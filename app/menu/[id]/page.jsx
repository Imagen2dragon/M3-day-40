import { getAllDishes, getDishById } from "@/lib/dishes";
import { notFound } from "next/navigation";
import AddToCartButton from "@/components/AddToCartButton";
import Link from "next/link";

export async function generateStaticParams() {
  const dishes = await getAllDishes();
  return dishes.map(d => ({ id: String(d.id) }));
}

export default async function DishDetailPage({ params }) {
  const { id } = await params;
  const dish = await getDishById(id);

  if (!dish) {
    notFound(); // Triggers app/not-found.js
  }

  return (
    <div className="card" style={{ maxWidth: "600px", margin: "0 auto" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>{dish.name} {dish.spicy && "🌶️"}</h2>
        <span className="category-pill">{dish.category}</span>
      </div>
      <p style={{ margin: "16px 0", color: "var(--muted)" }}>{dish.desc}</p>
      <p className="price" style={{ fontSize: "24px" }}>{dish.price} ETB</p>
      <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
        <AddToCartButton dish={dish} />
        <Link href="/menu" className="btn-secondary">&larr; Back to Menu</Link>
      </div>
    </div>
  );
}