'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'SYLLABUS', path: '/syllabus' },
  { name: 'FINAL PROJECTS', path: '/final-projects' },
  { name: 'RESOURCES', path: '/resources' },
  { name: 'TEAM', path: '/team' },
];

export default function Navigation() {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1700px] px-2 md:px-4 lg:px-6 py-2 md:py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-0">
          <div className="flex items-center flex-wrap gap-2 sm:gap-3 md:gap-4 lg:gap-6 pl-1 md:pl-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative text-xs sm:text-sm md:text-base uppercase font-medium tracking-[0.1em] transition-colors whitespace-nowrap"
                >
                  <span
                    className={`transition-colors ${
                      isActive ? 'text-white' : 'text-white/60 hover:text-white/90'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}
          </div>
          {!isHomePage && (
            <div className="font-jersey text-white text-sm sm:text-base md:text-lg lg:text-xl tracking-[-0.02em] whitespace-nowrap">
              &gt;&gt;&gt; Move Fast & Fix Things
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

