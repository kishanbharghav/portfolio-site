"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Users } from "lucide-react";

const aboutCards = [
  {
    title: "Academic Excellence",
    description: "Currently pursuing Computer Science Engineering at SRM University with a CGPA of 9.69, maintaining high academic standards while exploring cutting-edge technologies.",
    icon: GraduationCap,
    imageUrl: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/daec7797-2a8b-4f5a-a021-5ea99ba8a473/generated_images/academic-excellence-digital-illustration-9aac7cd8-20250816140638.jpg?"
  },
  {
    title: "Tech Enthusiast",
    description: "Passionate about AI/ML development, game programming, and full-stack technologies. Proficient in multiple programming languages with a keen interest in emerging tech trends.",
    icon: Code,
    imageUrl: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=500&q=80"
  },
  {
    title: "Active Contributor",
    description: "Active member of technical clubs and communities, with hands-on experience through internships and collaborative projects. Always eager to learn and share knowledge.",
    icon: Users,
    imageUrl: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&q=80"
  }
];

export const ThreeColumnImageCards = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Exploring the intersection of technology and innovation through academics, 
            practical experience, and community engagement.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aboutCards.map((card, index) => {
            const IconComponent = card.icon;
            return (
              <Card 
                key={index} 
                className="group overflow-hidden border-border hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-card"
              >
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={card.imageUrl}
                      alt={card.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 right-4 w-12 h-12 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-card-foreground mb-3 group-hover:text-primary transition-colors duration-200">
                    {card.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};