import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  // Guard: ensure API key is present before instantiating Resend
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service not configured" },
      { status: 500 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, phone, website } = await request.json();

    // Validate inputs
    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: "Name, email, and phone number are required." },
        { status: 400 }
      );
    }

    if (phone.length !== 10) {
      return NextResponse.json(
        { error: "Phone number must be exactly 10 digits." },
        { status: 400 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Rankly Demos <onboarding@resend.dev>",
      to: "aayush@rankly.dev",
      subject: `New Rankly Demo Request from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee;">
          <h2 style="border-bottom: 1px solid #eee; padding-bottom: 10px;">New Demo Request</h2>
          <p>You received a new demo booking request from the Rankly landing page.</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; width: 150px;">Full Name:</td>
              <td style="padding: 8px 0;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Email Address:</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Phone Number:</td>
              <td style="padding: 8px 0;"><a href="tel:${phone}">${phone}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold;">Current Website:</td>
              <td style="padding: 8px 0;">${website ? `<a href="https://${website}" target="_blank">${website}</a>` : "None provided"}</td>
            </tr>
          </table>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Unknown error";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
