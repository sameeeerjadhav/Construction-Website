import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

type Payload = {
  name?: string;
  phone?: string;
  email?: string;
  home?: string;
  message?: string;
};

export async function POST(request: Request) {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return Response.json({ ok: false }, { status: 400 });
  }

  const name = String(body.name || "").trim().slice(0, 80);
  const phone = String(body.phone || "").trim().slice(0, 20);
  const email = String(body.email || "").trim().slice(0, 120);
  const home = String(body.home || "").trim().slice(0, 80);
  const message = String(body.message || "").trim().slice(0, 1000);

  if (name.length < 2 || !/^[0-9+\-\s]{10,16}$/.test(phone)) {
    return Response.json({ ok: false }, { status: 400 });
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  const entry = {
    name,
    phone,
    email,
    home,
    message,
    createdAt: new Date().toISOString(),
  };

  const dir = path.join(process.cwd(), "data");
  const file = path.join(dir, "enquiries.json");
  await mkdir(dir, { recursive: true });

  let existing: unknown[] = [];
  try {
    existing = JSON.parse(await readFile(file, "utf8")) as unknown[];
    if (!Array.isArray(existing)) existing = [];
  } catch {
    existing = [];
  }

  existing.push(entry);
  await writeFile(file, JSON.stringify(existing, null, 2));
  return Response.json({ ok: true });
}
