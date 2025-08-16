"use client";

import { Code, Database, Globe, Server, Cloud, Cpu, Monitor, FileCode } from "lucide-react";

const SimpleGridStats = () => {
  const skills = [
  {
    name: "Python",
    level: 90,
    icon: <Code className="w-6 h-6" />,
    description: "Advanced"
  },
  {
    name: "C++",
    level: 85,
    icon: <Cpu className="w-6 h-6" />,
    description: "Proficient"
  },
  {
    name: "Java",
    level: 80,
    icon: <FileCode className="w-6 h-6" />,
    description: "Proficient"
  },
  {
    name: "Web Development",
    level: 88,
    icon: <Globe className="w-6 h-6" />,
    description: "Django/Flask"
  },
  {
    name: "Frontend",
    level: 85,
    icon: <Monitor className="w-6 h-6" />,
    description: "HTML/CSS/JS"
  },
  {
    name: "Database",
    level: 82,
    icon: <Database className="w-6 h-6" />,
    description: "SQL/SQLite"
  },
  {
    name: "Cloud Platforms",
    level: 75,
    icon: <Cloud className="w-6 h-6" />,
    description: "AWS/Google Cloud"
  }];


  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto">
        <h1 className="text-center text-4xl font-semibold lg:text-6xl text-foreground">
          Technical Skills
        </h1>
        <div className="grid gap-8 pt-9 md:grid-cols-2 lg:grid-cols-3 lg:gap-6 lg:pt-20">
          {skills.map((skill, index) =>
          <div key={index} className="text-center p-6 rounded-lg bg-card border border-border hover:border-accent transition-colors">
              <div className="flex justify-center mb-4 text-accent">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {skill.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 !whitespace-pre-line">
                {skill.description}
              </p>
              <div className="w-full bg-secondary rounded-full h-2 mb-2">
                <div
                className="bg-accent h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}>
              </div>
              </div>
              <p className="text-sm font-medium text-muted-foreground">
                {skill.level}%
              </p>
            </div>
          )}
        </div>
      </div>
    </section>);

};

export { SimpleGridStats };