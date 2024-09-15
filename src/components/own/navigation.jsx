"use client";

import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import { useState } from "react";
import { usePathname } from "next/navigation";
import web from "@/constants/web";

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Navigation Desktop */}
      <nav className="hidden md:flex justify-between items-center p-4">
        <ul className="flex gap-4 items-center">
          {web.navigationItem.map((item) => (
            <li key={item.name}>
              <Link href={item.href} className={`hover:bg-muted p-2 rounded-md ${pathname === item.href ? "bg-accent" : ""}`}>
                {item.name}
              </Link>
            </li>
          ))}
          <ModeToggle />
        </ul>
      </nav>

      {/* Navigation Mobile */}
      <nav className="md:hidden p-4">
        <button onClick={() => setIsOpen(!isOpen)} className={`text-2xl ${isOpen ? "hidden" : ""}`}>
          ☰
        </button>
        {isOpen && (
          <ul className="flex flex-col gap-2 items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
              {isOpen ? "✕" : "☰"}
            </button>
            {web.navigationItem.map((item) => (
              <li key={item.name} className="mb-2">
                <Link href={item.href} className="block hover:bg-muted p-2 rounded-md" onClick={() => setIsOpen(false)}>
                  {item.name}
                </Link>
              </li>
            ))}
            <ModeToggle />
          </ul>
        )}
      </nav>
    </div>
  );
}
