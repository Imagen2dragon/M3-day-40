"use client";

import { useCartStore } from "@/lib/cartStore";

export default function CartBadge() {
  const count = useCartStore((s) => (s?.items || []).reduce((acc, i) => acc + (i.qty || 1), 0));
  return <span>Cart ({count})</span>;
}