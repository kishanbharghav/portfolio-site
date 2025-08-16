"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Code, Users } from "lucide-react";

const aboutCards = [
{
  title: "Academic Excellence",
  description:
  "Pursuing Computer Science Engineering at SRM University with a CGPA of 9.69, specializing in Big Data Analytics and building a strong foundation in technology.",
  icon: GraduationCap,
  image:
  "https://3000-effccef4-e772-456f-bcd3-5fef527fcd81.proxy.daytona.work/"
},
{
  title: "Tech Enthusiast",
  description:
  "Passionate about AI, machine learning, and gaming. Fluent in English, Tamil, and Hindi, with a keen interest in exploring emerging technologies and their applications.",
  icon: Code,
  image:
  "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{
  title: "Active Contributor",
  description:
  "Member of Andropedia Tech Club, completed internships at CODSOFT, and actively contributes to open source projects while building practical solutions.",
  icon: Users,
  image:
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}];


const ThreeColumnImageCards = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto">
        <div className="m-auto mb-24 max-w-xl text-center">
          <h2 className="mb-6 text-3xl font-semibold lg:text-5xl font-display text-text-primary">
            About Me
          </h2>
          <p className="m-auto max-w-3xl text-lg lg:text-xl text-text-secondary font-body">
            A passionate Computer Science Engineering student at SRM University with a strong foundation in technology, 
            diverse interests, and a commitment to continuous learning and innovation.
          </p>
        </div>
        <div className="mt-11 grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aboutCards.map((card, index) =>
          <Card key={index} className="border-border-subtle bg-surface hover:bg-surface/80 transition-colors duration-300 pt-0 overflow-hidden">
              <div className="relative">
                <img
                src={card.image}
                alt={card.title}
                className="aspect-video w-full object-cover" />

                <div className="absolute top-4 right-4 bg-accent-blue/20 backdrop-blur-sm rounded-full p-2">
                  <card.icon className="w-5 h-5 text-accent-blue" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="mb-3 font-semibold text-lg font-display text-text-primary">{card.title}</h3>
                <p className="text-text-secondary font-body leading-relaxed">{card.description}</p>
              </div>
            </Card>
          )}
        </div>
      </div>
    </section>);

};

export { ThreeColumnImageCards };