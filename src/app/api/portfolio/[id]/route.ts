import { NextResponse } from "next/server";
import { readPortfolio, writePortfolio } from "@/lib/portfolio";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const items = await readPortfolio();
  const filtered = items.filter((item) => item.id !== id);

  if (filtered.length === items.length) {
    return NextResponse.json({ error: "Item not found" }, { status: 404 });
  }

  await writePortfolio(filtered);
  return NextResponse.json({ success: true });
}
