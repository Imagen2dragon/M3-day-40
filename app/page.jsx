import Link from "next/link";

export default function HomePage() {
  return (
    <div className="card hero-card">
      <h2>Welcome to Addis Eats</h2>
      <p style={{ margin: "14px 0", color: "var(--muted)" }}>
        Authentic Ethiopian cuisine delivered fresh across Addis Ababa.
      </p>
      <Link href="/menu" className="btn-primary">
        Explore Full Menu &rarr;
      </Link>
    </div>
  );
}