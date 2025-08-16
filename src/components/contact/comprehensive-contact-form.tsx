"use client"

import React from "react";
import { Github, Linkedin, Mail, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const ComprehensiveContactForm = () => {
  const languages = [
    { name: "English", level: "Fluent" },
    { name: "Tamil", level: "Native" },
    { name: "Japanese", level: "Intermediate" },
    { name: "Hindi", level: "Conversational" }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/kishanbharghav",
      color: "hover:text-white"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      href: "https://linkedin.com/in/kishan-bharghav",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:kishan.bharghav@example.com",
      color: "hover:text-accent-cyan"
    }
  ];

  return (
    <section className="relative mx-2.5 mt-2.5 rounded-t-2xl rounded-b-[36px] bg-[var(--color-background-dark)] py-32 lg:mx-4">
      <div className="container max-w-4xl mx-auto">
        <h1 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl text-[var(--color-text-primary)] font-[var(--font-display)]">
          Let's Connect
        </h1>
        <p className="mt-4 text-center leading-snug font-medium text-[var(--color-text-secondary)] lg:mx-auto max-w-2xl">
          I'm currently open to new opportunities and exciting projects. 
          Let's discuss how we can work together to create something amazing.
        </p>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Social Links */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] font-[var(--font-display)]">
              Get in Touch
            </h2>
            <div className="space-y-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`flex items-center gap-4 text-[var(--color-text-secondary)] transition-colors ${link.color} group`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="p-3 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border-subtle)] group-hover:border-[var(--color-accent-blue)] transition-colors">
                    <link.icon size={20} />
                  </div>
                  <span className="font-medium">{link.name}</span>
                </a>
              ))}
            </div>

            {/* Resume Download */}
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-[var(--color-accent-blue)] hover:bg-blue-600 text-white font-medium px-8 py-3 rounded-lg transition-all duration-200 flex items-center gap-3"
              >
                <Download size={20} />
                Download Resume
              </Button>
            </div>
          </div>

          {/* Language Proficiency */}
          <div className="space-y-8">
            <h2 className="text-xl font-semibold text-[var(--color-text-primary)] font-[var(--font-display)]">
              Languages
            </h2>
            <div className="space-y-4">
              {languages.map((language) => (
                <div 
                  key={language.name}
                  className="flex justify-between items-center p-4 bg-[var(--color-surface)] border border-[var(--color-border-subtle)] rounded-lg"
                >
                  <span className="font-medium text-[var(--color-text-primary)]">
                    {language.name}
                  </span>
                  <span className="text-sm text-[var(--color-accent-blue)] font-medium">
                    {language.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-[var(--color-text-secondary)]">
            Available for full-time opportunities starting Summer 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export { ComprehensiveContactForm };