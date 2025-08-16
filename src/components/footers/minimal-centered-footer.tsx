"use client"

import { ArrowUpRight } from "lucide-react";

const MinimalCenteredFooter = () => {
  const portfolioLinks = [
    { name: "GitHub", href: "https://github.com/kishanbharghavv", external: true },
    { name: "LinkedIn", href: "https://linkedin.com/in/kishan-bharghav-v", external: true },
    { name: "Email", href: "mailto:kishanbharghav@example.com", external: false },
    { name: "Resume", href: "/resume.pdf", external: true },
  ];

  return (
    <section className="bg-[var(--color-background-dark)] border-t border-[var(--color-border-subtle)] py-16">
      <div className="container mx-auto flex flex-col items-center gap-6">
        <nav className="flex flex-col items-center gap-4">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {portfolioLinks.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={`flex items-center gap-0.5 font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)] transition-colors ${item.external ? '' : ''}`}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                >
                  {item.name} {item.external && <ArrowUpRight className="size-4" />}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="text-center text-sm text-[var(--color-text-secondary)]">
          <p className="mb-2">Built with Next.js & Tailwind CSS</p>
          <p>© 2024 Kishan Bharghav V</p>
        </div>
      </div>
    </section>
  );
};

export { MinimalCenteredFooter };