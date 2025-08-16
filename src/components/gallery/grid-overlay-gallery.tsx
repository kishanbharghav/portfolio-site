"use client";
import { ArrowRight, Github } from "lucide-react";

import { Button } from "@/components/ui/button";

type TechStack = string;

interface ProjectData {
  title: string;
  githubLink: string;
  background: string;
  techStack: Array<TechStack>;
  description: string;
}

// Featured Projects Portfolio
const PROJECTS: Array<ProjectData> = [
  {
    title: "FarmAssist AI",
    githubLink: "https://github.com/kishanbharghav/FarmAssist-AI",
    background:
      "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["Python", "AI/ML", "Agriculture", "Computer Vision"],
    description: "AI-powered agricultural assistance system for crop monitoring and farming optimization",
  },
  {
    title: "House Price Predictor",
    githubLink: "https://github.com/kishan/house-price-predictor",
    background:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["Python", "ML", "Streamlit", "Pandas"],
    description: "Machine learning model for predicting house prices with interactive Streamlit dashboard",
  },
  {
    title: "ReelTalk",
    githubLink: "https://github.com/kishan/reeltalk",
    background:
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["React", "Node.js", "MongoDB", "Socket.io"],
    description: "Full-stack chatbot application for real-time movie discussions and recommendations",
  },
  {
    title: "SecureFileVault",
    githubLink: "https://github.com/kishan/secure-file-vault",
    background:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["C++", "Encryption", "Security", "File System"],
    description: "Advanced file security application with encryption and access control features",
  },
  {
    title: "Simple Phishing URL Detector",
    githubLink: "https://github.com/kishanbharghav/Simple-Phishing-URL-Detector",
    background:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["Python", "Machine Learning", "Cybersecurity", "URL Analysis"],
    description: "ML-based phishing URL detection system to identify and classify malicious websites for enhanced web security",
  },
  {
    title: "Password Generator",
    githubLink: "https://github.com/kishan/password-generator",
    background:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["JavaScript", "HTML/CSS", "Database", "Security"],
    description: "Web application for generating secure passwords with database storage capabilities",
  },
  {
    title: "IMDB Analysis",
    githubLink: "https://github.com/kishan/imdb-analysis",
    background:
      "https://images.unsplash.com/photo-1489599735734-79b4af9593fa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["Python", "Pandas", "Data Science", "Visualization"],
    description: "Comprehensive data analysis of IMDB movie database with statistical insights",
  },
  {
    title: "Rain Predictor",
    githubLink: "https://github.com/kishan/rain-predictor",
    background:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    techStack: ["Flask", "Python", "API", "Weather Data"],
    description: "Flask-based API for weather prediction using machine learning algorithms",
  },
];

const ProjectCard = ({ githubLink, background, title, techStack, description }: ProjectData) => {
  return (
    <a
      href={githubLink}
      style={{ backgroundImage: `url(${background})` }}
      className="before:content-[] relative min-h-auto w-full overflow-hidden rounded-[.5rem] bg-black/80 bg-cover bg-center bg-no-repeat p-5 transition-all duration-300 before:absolute before:top-0 before:left-0 before:z-10 before:block before:size-full before:bg-black/50 before:transition-all before:duration-300 hover:before:bg-black/30 sm:aspect-square md:aspect-auto md:min-h-[30rem] md:max-w-[30rem]"
    >
      <div className="relative z-20 flex size-full flex-col justify-end gap-8">
        <div className="flex w-full flex-col gap-6">
          <div className="flex flex-col gap-4">
            <div className="text-2xl leading-[1.2] font-normal text-white md:text-3xl">
              {title}
            </div>
            <div className="flex flex-wrap gap-2 mb-2">
              {techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-2 py-1 text-xs bg-white/20 backdrop-blur-sm rounded-md text-white border border-white/20"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="text-sm text-white/70 leading-relaxed">
              {description}
            </div>
          </div>
          <Button variant="secondary" size="default" className="w-fit bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 hover:text-white">
            <Github className="size-4 mr-2" />
            View on GitHub
            <ArrowRight className="size-4 ml-2" />
          </Button>
        </div>
      </div>
    </a>
  );
};

const GridOverlayGallery = () => {
  return (
    <section className="py-32 bg-[var(--color-background-dark)]">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-[var(--color-text-primary)] mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto">
            A showcase of my latest work in machine learning, web development, and software engineering
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={`project-${i}`} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export { GridOverlayGallery };