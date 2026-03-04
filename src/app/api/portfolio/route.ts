import { NextResponse } from "next/server";
import { readPortfolio, writePortfolio } from "@/lib/portfolio";
import type { PortfolioItem } from "@/types/portfolio";

export async function GET() {
  const items = await readPortfolio();
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { title, category, description, tags, color } = body as Omit<
    PortfolioItem,
    "id" | "createdAt"
  >;

  if (!title || !category || !description) {
    return NextResponse.json(
      { error: "title, category, description are required" },
      { status: 400 }
    );
  }

  const items = await readPortfolio();
  const newItem: PortfolioItem = {
    id: Date.now().toString(),
    title,
    category,
    description,
    tags: tags ?? [],
    color: color ?? "from-emerald-400 to-cyan-500",
    createdAt: new Date().toISOString().split("T")[0],
  };

  items.push(newItem);
  await writePortfolio(items);

  return NextResponse.json(newItem, { status: 201 });
}
