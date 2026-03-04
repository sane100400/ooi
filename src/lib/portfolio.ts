import { promises as fs } from "fs";
import path from "path";
import type { PortfolioItem } from "@/types/portfolio";

const DATA_PATH = path.join(process.cwd(), "data", "portfolio.json");

export async function readPortfolio(): Promise<PortfolioItem[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw) as PortfolioItem[];
  } catch {
    return [];
  }
}

export async function writePortfolio(items: PortfolioItem[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(items, null, 2), "utf-8");
}
