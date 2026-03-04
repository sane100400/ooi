import { promises as fs } from "fs";
import path from "path";
import type { QuoteRequest } from "@/types/quote";

const DATA_PATH = path.join(process.cwd(), "data", "quotes.json");

export async function readQuotes(): Promise<QuoteRequest[]> {
  try {
    const raw = await fs.readFile(DATA_PATH, "utf-8");
    return JSON.parse(raw) as QuoteRequest[];
  } catch {
    return [];
  }
}

export async function writeQuotes(items: QuoteRequest[]): Promise<void> {
  await fs.mkdir(path.dirname(DATA_PATH), { recursive: true });
  await fs.writeFile(DATA_PATH, JSON.stringify(items, null, 2), "utf-8");
}
