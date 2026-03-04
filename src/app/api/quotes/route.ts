import { NextResponse } from "next/server";
import { readQuotes, writeQuotes } from "@/lib/quotes";
import { sendQuoteNotification } from "@/lib/mailer";
import type { QuoteRequest } from "@/types/quote";

export async function GET() {
  const items = await readQuotes();
  return NextResponse.json(items);
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, contact, service, budget, description } = body as Omit<
    QuoteRequest,
    "id" | "createdAt" | "read"
  >;

  if (!name || !contact || !service) {
    return NextResponse.json(
      { error: "name, contact, service are required" },
      { status: 400 }
    );
  }

  const quotes = await readQuotes();
  const newQuote: QuoteRequest = {
    id: Date.now().toString(),
    name,
    contact,
    service,
    budget: budget || "미정",
    description: description || "",
    createdAt: new Date().toISOString(),
    read: false,
  };

  quotes.unshift(newQuote);
  await writeQuotes(quotes);

  // Send email notification (non-blocking)
  sendQuoteNotification({ name, contact, service, budget, description }).catch(
    (err) => console.error("[Mail] Failed to send:", err)
  );

  return NextResponse.json(newQuote, { status: 201 });
}
