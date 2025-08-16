"use client";

import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X, Code2, Bot, Gamepad2 } from "lucide-react";
import { motion } from "motion/react";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Features", href: "#" },
  { name: "Templates", href: "#" },
  { name: "Pricing", href: "#" },
];

export function MinimalCenteredHero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-[var(--color-background-dark)] min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[var(--color-surface)] p-6 sm:max-w-sm sm:ring-1 sm:ring-[var(--color-border-subtle)]">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Kishan Bharghav V</span>
                <Code2 className="h-8 w-8 text-[var(--color-accent-blue)]" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-[var(--color-text-secondary)]"
              >
                <span className="sr-only">Close menu</span>
                <X aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-[var(--color-border-subtle)]">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-border-subtle)]"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-[var(--color-text-primary)] hover:bg-[var(--color-border-subtle)]"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[var(--color-accent-blue)] to-[var(--color-accent-cyan)] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
        <div className="container mx-auto max-w-4xl py-32 sm:py-48 lg:py-56">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hidden sm:mb-8 sm:flex sm:justify-center"
          >
            <div className="relative rounded-full px-4 py-2 text-sm/6 text-[var(--color-text-secondary)] ring-1 ring-[var(--color-border-subtle)] hover:ring-[var(--color-accent-blue)]/50 transition-all duration-300 backdrop-blur-sm">
              <span className="flex items-center gap-2">
                <Bot className="w-4 h-4 text-[var(--color-accent-blue)]" />
                Computer Science Student
              </span>
            </div>
          </motion.div>
          <div className="text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-[var(--font-display)] text-5xl font-bold tracking-tight text-balance text-[var(--color-text-primary)] sm:text-7xl bg-gradient-to-r from-[var(--color-text-primary)] via-[var(--color-accent-blue)] to-[var(--color-accent-cyan)] bg-clip-text text-transparent"
            >
              Kishan Bharghav V
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="mt-6 text-2xl font-semibold text-[var(--color-accent-blue)] sm:text-3xl"
            >
              Building the Future with Code & AI
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="mt-8 text-lg font-medium text-pretty text-[var(--color-text-secondary)] sm:text-xl/8 max-w-3xl mx-auto"
            >
              Passionate Computer Science Engineering student with expertise in AI/ML, full-stack development, and game development. 
              I create innovative solutions that bridge the gap between cutting-edge technology and real-world applications.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-10 flex items-center justify-center gap-x-6 flex-wrap gap-y-4"
            >
              <a
                href="#projects"
                className="group rounded-lg bg-[var(--color-accent-blue)] px-6 py-3 text-sm font-semibold text-white shadow-lg hover:bg-[var(--color-accent-blue)]/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-blue)] transition-all duration-300 hover:shadow-xl hover:shadow-[var(--color-accent-blue)]/25"
              >
                <span className="flex items-center gap-2">
                  <Code2 className="w-4 h-4" />
                  View My Work
                </span>
              </a>
              <a 
                href="#contact" 
                className="group text-sm/6 font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-accent-blue)] transition-colors duration-300 flex items-center gap-2"
              >
                Get In Touch 
                <span aria-hidden="true" className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="mt-16 flex justify-center gap-8 text-[var(--color-text-secondary)]"
            >
              <div className="flex items-center gap-2 text-sm">
                <Bot className="w-5 h-5 text-[var(--color-accent-blue)]" />
                <span>AI & Machine Learning</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Code2 className="w-5 h-5 text-[var(--color-accent-cyan)]" />
                <span>Full-Stack Development</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Gamepad2 className="w-5 h-5 text-[var(--color-success)]" />
                <span>Game Development</span>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[var(--color-accent-cyan)] to-[var(--color-accent-blue)] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" />
        </div>
      </div>
    </div>
  );
}