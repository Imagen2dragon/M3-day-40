import { getAllDishes } from "@/lib/dishes";
import AddToCartButton from "@/components/AddToCartButton";
import CategoryBar from "@/components/CategoryBar";
import Link from "next/link";

// ISR: Revalidates the cache every 3600 seconds (1 hour)
export const revalidate = 3600;

export default async function MenuPage({ searchParams }) {
  const sp = await searchParams;
  const category = sp?.category ?? "All";

  const allDishes = await getAllDishes();
  const filtered = category === "All"
    ? allDishes
    : allDishes.filter(d => d.category === category);

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <h2>Our Menu</h2>
      </div>

      <CategoryBar selected={category} />

      {filtered.length === 0 ? (
        <p className="empty-msg">No dishes found in this category.</p>
      ) : (
        <div className="grid">
          {filtered.map(dish => (
            <article key={dish.id} className="dish-card">
              <div>
                <h3>{dish.name} {dish.spicy && "🌶️"}</h3>
                <p className="desc">{dish.desc}</p>
              </div>
              <div className="card-bottom">
                <span className="price">{dish.price} ETB</span>
                <div style={{ display: "flex", gap: "8px" }}>
                  <Link href={`/menu/${dish.id}`} className="link-detail">Details</Link>
                  <AddToCartButton dish={dish} />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}