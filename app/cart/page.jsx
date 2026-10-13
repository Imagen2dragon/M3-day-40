"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/cartStore";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const remove = useCartStore((s) => s.remove);
  const total = useCartStore((s) => s.items.reduce((sum, i) => sum + i.price * i.qty, 0));

  if (items.length === 0) {
    return (
      <div className="card">
        <h2>Your Cart</h2>
        <p className="empty-msg">Your cart is currently empty.</p>
        <Link href="/menu" className="btn-primary" style={{ display: "inline-block", marginTop: "14px" }}>
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="card">
      <h2>Your Cart</h2>
      <ul className="cart-list">
        {items.map((item) => (
          <li key={item.id} className="cart-row">
            <span><strong>{item.name}</strong> ({item.qty} &times; {item.price} ETB)</span>
            <button type="button" className="btn-del" onClick={() => remove(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
      <h3 style={{ marginTop: "16px" }}>Total: {total} ETB</h3>
      <Link href="/checkout" className="btn-primary" style={{ display: "inline-block", marginTop: "16px" }}>
        Proceed to Checkout &rarr;
      </Link>
    </div>
  );
}