import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, message } = await req.json();

    const data = await resend.emails.send({
      from: `${name} <noreply@fitzsystems.ca>`,
      to: ["connorkfitzsimmons@fitzsystems.ca"],
      subject: `New message from ${name}`,
      html: message
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    return NextResponse.json({ success: false, error: message }, { status: 500 });
  }
}
