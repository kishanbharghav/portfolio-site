"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Award, Code, Cloud, Brain } from "lucide-react";

interface Certification {
  id: string;
  name: string;
  organization: string;
  category: "AI/ML" | "Cloud" | "Programming" | "Data Science";
  link?: string;
  description?: string;
}

const certifications: Certification[] = [
  {
    id: "1",
    name: "Python Libraries for Data Science",
    organization: "Coursera",
    category: "Data Science",
    description: "NumPy, Pandas, Matplotlib, Seaborn",
  },
  {
    id: "2",
    name: "Machine Learning Fundamentals",
    organization: "edX",
    category: "AI/ML",
    description: "Supervised and Unsupervised Learning",
  },
  {
    id: "3",
    name: "Artificial Intelligence Course",
    organization: "Udemy",
    category: "AI/ML",
    description: "Neural Networks and Deep Learning",
  },
  {
    id: "4",
    name: "Google Cloud Platform Fundamentals",
    organization: "Google Cloud",
    category: "Cloud",
    description: "Core GCP services and architecture",
  },
  {
    id: "5",
    name: "Google Cloud Associate Engineer",
    organization: "Google Cloud",
    category: "Cloud",
    description: "Cloud infrastructure and deployment",
  },
  {
    id: "6",
    name: "Microsoft Azure Fundamentals",
    organization: "Microsoft",
    category: "Cloud",
    description: "Azure services and cloud concepts",
  },
  {
    id: "7",
    name: "Advanced Python Programming",
    organization: "Python Institute",
    category: "Programming",
    description: "Object-oriented programming and frameworks",
  },
  {
    id: "8",
    name: "Data Analysis with Python",
    organization: "FreeCodeCamp",
    category: "Data Science",
    description: "Statistical analysis and visualization",
  }
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "AI/ML":
      return <Brain className="h-4 w-4" />;
    case "Cloud":
      return <Cloud className="h-4 w-4" />;
    case "Programming":
      return <Code className="h-4 w-4" />;
    case "Data Science":
      return <Award className="h-4 w-4" />;
    default:
      return <Award className="h-4 w-4" />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case "AI/ML":
      return "bg-[var(--color-accent-cyan)] text-[var(--color-background-dark)]";
    case "Cloud":
      return "bg-[var(--color-accent-blue)] text-white";
    case "Programming":
      return "bg-[var(--color-success)] text-[var(--color-background-dark)]";
    case "Data Science":
      return "bg-purple-600 text-white";
    default:
      return "bg-[var(--color-surface)] text-[var(--color-text-primary)]";
  }
};

export default function CertificationGrid() {
  return (
    <div className="bg-[var(--color-background-dark)] py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-[var(--font-display)] font-bold text-[var(--color-text-primary)] mb-4">
            Professional Certifications
          </h2>
          <p className="text-[var(--color-text-secondary)] text-lg max-w-2xl mx-auto">
            Continuous learning through industry-recognized certifications in AI/ML, cloud computing, and programming
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certifications.map((cert) => (
            <Card
              key={cert.id}
              className="bg-[var(--color-surface)] border-[var(--color-border-subtle)] hover:border-[var(--color-accent-blue)] transition-all duration-300 hover:shadow-lg hover:shadow-[var(--color-accent-blue)]/10 group cursor-pointer"
            >
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-2">
                    {getCategoryIcon(cert.category)}
                    <Badge 
                      variant="secondary" 
                      className={`${getCategoryColor(cert.category)} text-xs font-medium`}
                    >
                      {cert.category}
                    </Badge>
                  </div>
                  {cert.link && (
                    <ExternalLink className="h-4 w-4 text-[var(--color-text-secondary)] group-hover:text-[var(--color-accent-blue)] transition-colors" />
                  )}
                </div>
                
                <CardTitle className="text-[var(--color-text-primary)] text-lg leading-tight font-[var(--font-display)] font-semibold group-hover:text-[var(--color-accent-blue)] transition-colors">
                  {cert.name}
                </CardTitle>
                
                <CardDescription className="text-[var(--color-text-secondary)] text-sm font-medium">
                  {cert.organization}
                </CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                {cert.description && (
                  <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                    {cert.description}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-[var(--color-text-secondary)] text-sm">
            More certifications in progress. Always learning and growing! 🚀
          </p>
        </div>
      </div>
    </div>
  );
}