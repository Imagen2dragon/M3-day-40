import Link from "next/link";

export default function RootNotFound() {
  return (
    <div className="card" style={{ textAlign: "center", padding: "40px" }}>
      <h2>404 &mdash; Page Not Found</h2>
      <p style={{ margin: "14px 0", color: "var(--muted)" }}>
        The item or page you requested does not exist.
      </p>
      <Link href="/menu" className="btn-primary">Return to Menu</Link>
    </div>
  );
}