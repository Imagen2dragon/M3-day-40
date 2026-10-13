import { NextResponse } from "next/server";
import { getAllDishes } from "@/lib/dishes";

export async function GET() {
  const dishes = await getAllDishes();
  return NextResponse.json(dishes, { status: 200 });
}