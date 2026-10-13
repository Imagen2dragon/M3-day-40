export const DISHES = [
  { id: 1, name: "Doro Wat", price: 240, category: "Main", spicy: true, desc: "Slow-cooked spicy chicken stew with berbere and boiled egg." },
  { id: 2, name: "Shiro Wat", price: 120, category: "Vegetarian", spicy: false, desc: "Rich chickpea flour stew simmered with garlic and ginger." },
  { id: 3, name: "Beef Tibs", price: 280, category: "Main", spicy: true, desc: "Sautéed prime beef cubes with fresh rosemary and green chili." },
  { id: 4, name: "Veggie Beyaynetu", price: 180, category: "Vegetarian", spicy: false, desc: "Platter of yellow split peas, lentils, collard greens, and cabbage." },
  { id: 5, name: "Kitfo Special", price: 250, category: "Main", spicy: true, desc: "Minced prime beef warmed with spiced clarified butter (kibe) and mitmita." },
  { id: 6, name: "Injera Basket", price: 50, category: "Sides", spicy: false, desc: "Fresh 100% pure organic teff flatbread." }
];

export async function getAllDishes() {
  return DISHES;
}

export async function getDishById(id) {
  return DISHES.find(d => d.id === Number(id)) || null;
}