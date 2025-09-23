import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const featuredProjectsRef = useRef(null);
  const additionalProjectsRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animation for featured projects
    gsap.fromTo(
      featuredProjectsRef.current?.children || [],
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: featuredProjectsRef.current,
          start: "top bottom-=100",
          once: true,
          fastScrollEnd: true,
        },
      }
    );

    // Animation for additional projects
    gsap.fromTo(
      additionalProjectsRef.current?.children || [],
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        scrollTrigger: {
          trigger: additionalProjectsRef.current,
          start: "top bottom-=50",
          once: true,
          fastScrollEnd: true,
        },
      }
    );
  }, []);

  const featuredProjects = [
    {
      id: 1,
      title: "Online Accounts Marketplace",
      description: "A comprehensive marketplace where users can list online freelancing accounts they are selling and buyers can browse, communicate with sellers, and purchase accounts safely.",
      image: "/images/project1.png",
      link: "https://onlineaccounts.co.ke/",
      techStack: ["React.js", "Vite", "TailwindCSS", "Firebase"]
    },
    {
      id: 2,
      title: "TaskTyde - Online Tutoring Platform",
      description: "An innovative online platform where students can hire qualified online tutors to help them with homework across various subjects, featuring real-time collaboration tools.",
      image: "/images/project2.png",
      link: "https://tasktyde.com",
      techStack: ["React.js", "Vite", "TailwindCSS", "Firebase"]
    },
    {
      id: 3,
      title: "Pin PalPals - Location Sharing App",
      description: "A cross-platform mobile application similar to Find My Friends where users can join rooms and see live locations of friends in the same room, with comprehensive chat functionality and media sharing.",
      image: "/images/project3.png",
      link: "https://pinpalpals.com",
      techStack: ["Flutter", "Firebase", "Google Maps API", "Real-time Database"]
    }
  ];

  const additionalProjects = [
    {
      id: 4,
      title: "Medical AI Diagnostic Platform",
      description: "An AI-powered medical platform where users can upload symptom images for diagnosis, medication images for prescription details, or medical scans like X-rays and MRIs for analysis.",
      link: "https://medicalai.com",
      techStack: ["React.js", "Vite", "TailwindCSS", "Firebase", "AI/ML APIs"]
    },
    {
      id: 5,
      title: "Golden Ecstasy - Luxury Escort Services",
      description: "A luxury website platform for hiring professional escorts for private home visits, focusing on premium user experience and discretion.",
      link: "https://goldenecstasy.com",
      techStack: ["React.js", "Vite", "TailwindCSS", "Firebase"]
    },
    {
      id: 6,
      title: "Flix - Movie & TV Show Hub",
      description: "A comprehensive entertainment platform to watch reviews, discover trending movies and TV shows, search all content, view ratings, and watch trailers directly.",
      link: "https://flix.com",
      techStack: ["React.js", "Vite", "TailwindCSS", "Firebase", "Movie APIs"]
    },
    {
      id: 7,
      title: "Trip Planner AI",
      description: "An AI-powered travel planning website where users select destinations, duration, budget, and group size to receive personalized itineraries with hotel recommendations and attractions.",
      link: "https://tripplanner.com",
      techStack: ["React.js", "Vite", "TailwindCSS", "Firebase", "AI APIs"]
    }
  ];

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 relative">
              See My{" "}
              <span className="text-transparent bg-gradient-to-r from-turquoise-50 via-blue-400 to-turquoise-100 bg-clip-text animate-pulse">
                Work
              </span>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-turquoise-50 to-turquoise-100 rounded-full opacity-80"></div>
            </h1>
          </div>
          <p className="text-white-50 text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed">
            A curated showcase of my{" "}
            <span className="text-turquoise-50 font-semibold">featured projects</span> and{" "}
            <span className="text-turquoise-50 font-semibold">development portfolio</span>
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
              Featured{" "}
              <span className="text-transparent bg-gradient-to-r from-turquoise-50 to-turquoise-100 bg-clip-text">
                Projects
              </span>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-turquoise-50 to-turquoise-100 rounded-full"></div>
            </h2>
            <p className="text-white-50 text-lg max-w-2xl mx-auto mt-4">
              My most impactful and innovative projects showcased with full details
            </p>
          </div>
          <div ref={featuredProjectsRef} className="featured-projects-grid">
            {featuredProjects.map((project) => (
              <div key={project.id} className="featured-project-card">
                <div className="project-image-wrapper">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <div className="project-overlay">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="view-project-btn"
                    >
                      View Project
                    </a>
                  </div>
                </div>
                <div className="project-content">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="tech-stack">
                    <span className="tech-label">Tech Stack:</span>
                    <div className="tech-tags">
                      {project.techStack.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Projects */}
        <div>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative inline-block">
              Additional{" "}
              <span className="text-transparent bg-gradient-to-r from-turquoise-50 to-turquoise-100 bg-clip-text">
                Projects
              </span>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-turquoise-50 to-turquoise-100 rounded-full"></div>
            </h2>
            <p className="text-white-50 text-lg max-w-2xl mx-auto mt-4">
              More amazing projects from my development journey
            </p>
          </div>
          <div ref={additionalProjectsRef} className="additional-projects-grid">
            {additionalProjects.map((project) => (
              <div key={project.id} className="additional-project-card">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="project-title-small">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="external-link"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <p className="project-description-small">{project.description}</p>
                <div className="tech-stack-small">
                  <span className="tech-label-small">Tech:</span>
                  <div className="tech-tags-small">
                    {project.techStack.map((tech, index) => (
                      <span key={index} className="tech-tag-small">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;