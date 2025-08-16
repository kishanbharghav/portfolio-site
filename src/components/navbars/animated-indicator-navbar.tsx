"use client";

import { Menu, X, Download } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const NAV_LOGO = {
  url: "/",
  title: "KBV",
};
const NAV_ITEMS = [
  { name: "About", link: "#about" },
  { name: "Skills", link: "#skills" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Certifications", link: "#certifications" },
  { name: "Contact", link: "#contact" },
];

const AnimatedIndicatorNavbar = () => {
  const [activeItem, setActiveItem] = useState(NAV_ITEMS[0].name);

  const indicatorRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const updateIndicator = () => {
      const activeEl = document.querySelector(
        `[data-nav-item="${activeItem}"]`
      ) as HTMLElement;

      if (activeEl && indicatorRef.current && menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        const itemRect = activeEl.getBoundingClientRect();

        indicatorRef.current.style.width = `${itemRect.width}px`;
        indicatorRef.current.style.left = `${itemRect.left - menuRect.left}px`;
      }
    };
    updateIndicator();
    window.addEventListener("resize", updateIndicator);

    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeItem]);

  return (
    <section className="py-4 bg-[var(--color-background-dark)]">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Left WordMark */}
        <a href={NAV_LOGO.url} className="flex items-center gap-2">
          <span className="text-lg font-semibold tracking-tighter text-[var(--color-text-primary)] font-[var(--font-display)]">
            {NAV_LOGO.title}
          </span>
        </a>

        <NavigationMenu className="hidden lg:block">
          <NavigationMenuList
            ref={menuRef}
            className="rounded-4xl flex items-center gap-6 px-8 py-3"
          >
            {NAV_ITEMS.map((item) => (
              <React.Fragment key={item.name}>
                <NavigationMenuItem>
                  <NavigationMenuLink
                    data-nav-item={item.name}
                    onClick={() => setActiveItem(item.name)}
                    className={`relative cursor-pointer text-sm font-medium hover:bg-transparent ${
                      activeItem === item.name
                        ? "text-[var(--color-text-primary)]"
                        : "text-[var(--color-text-secondary)]"
                    }`}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </React.Fragment>
            ))}
            {/* Active Indicator */}
            <div
              ref={indicatorRef}
              className="absolute bottom-2 flex h-1 items-center justify-center px-2 transition-all duration-300"
            >
              <div className="bg-[var(--color-accent-blue)] h-0.5 w-full rounded-t-none transition-all duration-300" />
            </div>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Popover */}
        <MobileNav activeItem={activeItem} setActiveItem={setActiveItem} />

        <div className="hidden items-center gap-2 lg:flex">
          <Button
            variant="outline"
            size="sm"
            className="h-10 py-2.5 text-sm font-normal bg-[var(--color-accent-blue)] text-white border-[var(--color-accent-blue)] hover:bg-[var(--color-accent-blue)]/80"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Resume
          </Button>
        </div>
      </nav>
    </section>
  );
};

export { AnimatedIndicatorNavbar };

const AnimatedHamburger = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div className="group relative h-6 w-6">
      <div className="absolute inset-0">
        <Menu
          className={`text-muted-foreground group-hover:text-foreground absolute transition-all duration-300 ${
            isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"
          }`}
        />
        <X
          className={`text-muted-foreground group-hover:text-foreground absolute transition-all duration-300 ${
            isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"
          }`}
        />
      </div>
    </div>
  );
};

const MobileNav = ({
  activeItem,
  setActiveItem,
}: {
  activeItem: string;
  setActiveItem: (item: string) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block lg:hidden">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger>
          <AnimatedHamburger isOpen={isOpen} />
        </PopoverTrigger>

        <PopoverContent
          align="end"
          className="relative -left-4 -top-4 block w-screen max-w-md overflow-hidden rounded-xl p-0 lg:hidden bg-[var(--color-surface)] border-[var(--color-border-subtle)]"
        >
          <ul className="bg-[var(--color-surface)] text-[var(--color-text-primary)] w-full py-4">
            {NAV_ITEMS.map((navItem, idx) => (
              <li key={idx}>
                <a
                  href={navItem.link}
                  onClick={() => setActiveItem(navItem.name)}
                  className={`text-[var(--color-text-primary)] flex items-center border-l-[3px] px-6 py-4 text-sm font-medium transition-all duration-75 ${
                    activeItem === navItem.name
                      ? "border-[var(--color-accent-blue)] text-[var(--color-text-primary)]"
                      : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] border-transparent"
                  }`}
                >
                  {navItem.name}
                </a>
              </li>
            ))}
            <li className="flex flex-col px-7 py-2">
              <Button variant="secondary" className="bg-[var(--color-accent-blue)] text-white hover:bg-[var(--color-accent-blue)]/80">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </li>
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};