'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const navItems = [
  { name: 'HOME', path: '/' },
  { name: 'SYLLABUS', path: '/syllabus' },
  { name: 'GUEST SPEAKERS', path: '/guest-speakers' },
  { name: 'OPPORTUNITIES', path: '/opportunities' },
  { name: 'TEAM', path: '/team' },
  { name: 'BLOG', path: '/blog' },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]">
      <div className="mx-auto max-w-[1700px] px-2 md:px-4 lg:px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6 md:gap-8 pl-1 md:pl-4">
            {navItems.map((item) => {
              const isActive = pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className="relative text-sm font-medium tracking-wide transition-colors"
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
        </div>
      </div>
    </nav>
  );
}

