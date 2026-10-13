import Link from "next/link";
import CartBadge from "@/components/CartBadge";
import "./globals.css";

export const metadata = {
  title: "Addis Eats | Next.js Foundations",
  description: "Authentic Ethiopian Food Ordering with Next.js App Router",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="layout-container">
          <header className="site-header">
            <div className="brand">
              <Link href="/" className="brand-title">Addis Eats</Link>
            </div>
            <nav className="site-nav">
              <Link href="/">Home</Link>
              <Link href="/menu">Menu</Link>
              <Link href="/cart"><CartBadge /></Link>
              <Link href="/checkout">Checkout</Link>
            </nav>
          </header>

          <main className="main-content">{children}</main>

          <footer className="site-footer">
            <p>&copy; 2026 Addis Eats</p>
          </footer>
        </div>
      </body>
    </html>
  );
}