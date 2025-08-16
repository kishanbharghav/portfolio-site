"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Shield, ShoppingBag, Trophy, Search } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "IMDB Movie Analysis",
    description: "Comprehensive analysis of movie data and ratings using advanced data science techniques to uncover insights about film trends, box office performance, and audience preferences.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/daec7797-2a8b-4f5a-a021-5ea99ba8a473/generated_images/imdb-movie-analysis-dashboard-interface--5e0541cf-20250816140646.jpg",
    techStack: ["Python", "Pandas", "Matplotlib", "Seaborn", "Jupyter"],
    githubUrl: "https://github.com/example/imdb-analysis",
    liveUrl: null,
    category: "Data Science"
  },
  {
    id: 2,
    title: "SecureFileVault",
    description: "Advanced file encryption and security platform with military-grade encryption algorithms, secure key management, and intuitive user interface for protecting sensitive documents.",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=2340&auto=format&fit=crop",
    techStack: ["Node.js", "Electron", "AES-256", "React", "SQLite"],
    githubUrl: "https://github.com/example/secure-file-vault",
    liveUrl: "https://securefilevault.demo.com",
    category: "Security"
  },
  {
    id: 3,
    title: "Simple Phishing URL Detector",
    description: "Machine learning-powered cybersecurity tool that analyzes URLs and web content to detect phishing attempts and malicious websites with high accuracy rates.",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=2340&auto=format&fit=crop",
    techStack: ["Python", "Scikit-learn", "Flask", "BeautifulSoup", "TensorFlow"],
    githubUrl: "https://github.com/example/phishing-detector",
    liveUrl: "https://phishing-detector.demo.com",
    category: "Cybersecurity"
  },
  {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-stack e-commerce solution with modern payment integration, inventory management, user authentication, and responsive design for optimal shopping experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2340&auto=format&fit=crop",
    techStack: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
    githubUrl: "https://github.com/example/ecommerce-platform",
    liveUrl: "https://ecommerce.demo.com",
    category: "Web Development"
  },
  {
    id: 5,
    title: "Academic Excellence",
    description: "Comprehensive showcase of academic achievements, research projects, publications, and scholarly contributions across multiple disciplines and institutions.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?q=80&w=2340&auto=format&fit=crop",
    techStack: ["React", "LaTeX", "D3.js", "Firebase", "Material-UI"],
    githubUrl: "https://github.com/example/academic-portfolio",
    liveUrl: "https://academic-excellence.demo.com",
    category: "Academic"
  }
];

const categoryIcons = {
  "Data Science": Search,
  "Security": Shield,
  "Cybersecurity": Shield,
  "Web Development": ShoppingBag,
  "Academic": Trophy
};

export const GridOverlayGallery = () => {
  return (
    <section className="py-24 px-4 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Trophy className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Work</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A curated collection of innovative projects spanning data science, cybersecurity, 
            web development, and academic excellence. Each project demonstrates technical expertise 
            and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = categoryIcons[project.category] || Search;
            
            return (
              <Card 
                key={project.id}
                className="group relative overflow-hidden border hover:border-primary/50 bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                  
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/90 text-foreground border">
                      <IconComponent className="w-3 h-3 mr-1" />
                      {project.category}
                    </Badge>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-200 line-clamp-2 mb-4 overflow-hidden">
                      {project.description.substring(0, 120)}...
                    </p>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="text-xs border-primary/30 text-primary bg-primary/5 hover:bg-primary/10 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                    {project.techStack.length > 3 && (
                      <Badge variant="outline" className="text-xs text-muted-foreground">
                        +{project.techStack.length - 3} more
                      </Badge>
                    )}
                  </div>

                  <div className="flex gap-3 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300"
                        onClick={() => window.open(project.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};