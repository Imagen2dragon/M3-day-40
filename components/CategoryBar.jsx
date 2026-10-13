"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function CategoryBar() {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category") ?? "All";
  const categories = ["All", "Main", "Vegetarian", "Sides"];

  return (
    <nav className="chip-bar" aria-label="Menu categories">
      {categories.map((cat) => (
        <Link
          key={cat}
          href={cat === "All" ? "/menu" : `/menu?category=${cat}`}
          className={`chip ${currentCategory === cat ? "on" : ""}`}
        >
          {cat}
        </Link>
      ))}
    </nav>
  );
}