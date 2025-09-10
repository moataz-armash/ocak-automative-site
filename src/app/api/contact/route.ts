import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/validation";
import { sendMail } from "@/lib/mailer";

let lastHit = 0; // basit rate limit (örn. 5 sn)

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const payload = Object.fromEntries(form) as any;
    const parsed = contactSchema.safeParse(payload);
    if (!parsed.success)
      return NextResponse.json(
        { ok: false, error: "Geçersiz alanlar" },
        { status: 400 }
      );
    if (parsed.data.company) return NextResponse.json({ ok: true }); // bot

    const now = Date.now();
    if (now - lastHit < 5000)
      return NextResponse.json(
        { ok: false, error: "Lütfen tekrar deneyin" },
        { status: 429 }
      );
    lastHit = now;

    await sendMail({
      from: parsed.data.email,
      subject: `İletişim Formu – ${parsed.data.name}`,
      text: parsed.data.message,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json(
      { ok: false, error: "Sunucu hatası" },
      { status: 500 }
    );
  }
}
