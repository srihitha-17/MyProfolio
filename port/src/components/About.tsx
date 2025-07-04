import { useEffect, useRef } from "react";

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLElement;
            element.style.opacity = "1";
            element.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="bg-navy-dark text-slate-light py-24">
      <div className="container max-w-screen-xl opacity-0 transition-opacity duration-500" ref={sectionRef}>
        <h2 className="section-title text-slate-light">
          <span className="section-number">01.</span> About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <p>
              Hello! My name is Srihitha and I love designing and building things for the web. My journey into web development began back in 2024 when I started customizing Tumblr themes — who knew styling a reblog button could teach so much HTML & CSS : )
            </p>
            <p>
              Fast forward to now, I’ve been lucky to work with a start-up, a big tech firm, an ad agency, and a student-led design team. Lately, I’m focused on crafting inclusive, user-friendly digital products for diverse clients.
            </p>
            <p>
             A few frameworks I’ve enjoyed working recently:
            </p>
            
            <div className="grid grid-cols-2 gap-x-4 gap-y-2 font-mono text-sm pt-4">
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                JavaScript (ES6+)
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                React
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                TypeScript
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                Node.js
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                Next.js
              </div>
              <div className="flex items-center">
                <span className="text-teal mr-2">▹</span>
                Tailwind CSS
              </div>
            </div>
          </div>
          
          <div className="relative group mx-auto">
            <div className="relative z-10 rounded-md overflow-hidden w-70 h-70 md:w-80 md:h-80">
              <img 
                src="/image.png" 
                alt="Srihitha Aridasu" 
                className="w-full h-full object-cover hover:grayscale-0 transition-all duration-300"
              />
            </div>
            <div className="absolute inset-0 border-2 border-teal rounded-md translate-x-5 translate-y-5 group-hover:translate-x-4 group-hover:translate-y-4 transition-all duration-300"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;