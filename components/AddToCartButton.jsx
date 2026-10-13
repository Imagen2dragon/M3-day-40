"use client";

import { useCartStore } from "@/lib/cartStore";

export default function AddToCartButton({ dish }) {
  const addItem = useCartStore((s) => s.addItem);
  return (
    <button type="button" className="btn-add" onClick={() => addItem(dish)}>
      + Add
    </button>
  );
}