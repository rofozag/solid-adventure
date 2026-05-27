import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(100, "Name too long"),
  email: z.string().email("Invalid email address"),
  projectType: z.enum(
    ["Photography", "Video Production", "Graphic Design", "Other"],
    { errorMap: () => ({ message: "Please select a valid service" }) }
  ),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message too long"),
});

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error.errors[0]?.message ?? "Invalid input" },
        { status: 400 }
      );
    }

    const { name, email, projectType, message } = result.data;

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL ?? "",
      subject: `New enquiry from ${name} — ${projectType}`,
      html: `
        <div style="font-family:'Courier New',monospace;max-width:600px;margin:0 auto;
          background:#090807;color:#f0ebe4;padding:48px;border:1px solid #1c1916;">

          <div style="border-bottom:1px solid #1c1916;padding-bottom:24px;margin-bottom:32px;">
            <p style="font-size:9px;letter-spacing:4px;text-transform:uppercase;
              color:#c9a96e;margin:0 0 8px 0;">New Portfolio Enquiry</p>
            <h1 style="font-family:Georgia,serif;font-size:24px;
              color:#f0ebe4;margin:0;font-weight:700;">${name}</h1>
            <p style="font-size:11px;color:#a89e93;margin:4px 0 0 0;">${projectType}</p>
          </div>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="font-size:9px;letter-spacing:2px;text-transform:uppercase;
                color:#5c544c;padding:10px 0;width:100px;vertical-align:top;">From</td>
              <td style="font-size:12px;color:#a89e93;padding:10px 0;">${name}</td>
            </tr>
            <tr>
              <td style="font-size:9px;letter-spacing:2px;text-transform:uppercase;
                color:#5c544c;padding:10px 0;vertical-align:top;">Email</td>
              <td style="font-size:12px;padding:10px 0;">
                <a href="mailto:${email}" style="color:#c9a96e;text-decoration:none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="font-size:9px;letter-spacing:2px;text-transform:uppercase;
                color:#5c544c;padding:10px 0;vertical-align:top;">Service</td>
              <td style="font-size:12px;color:#a89e93;padding:10px 0;">${projectType}</td>
            </tr>
          </table>

          <div style="margin-top:32px;padding-top:24px;border-top:1px solid #1c1916;">
            <p style="font-size:9px;letter-spacing:2px;text-transform:uppercase;
              color:#5c544c;margin:0 0 12px 0;">Message</p>
            <p style="font-size:13px;line-height:2;color:#a89e93;
              margin:0;white-space:pre-wrap;">${message}</p>
          </div>

          <div style="margin-top:48px;padding-top:24px;border-top:1px solid #1c1916;">
            <p style="font-size:9px;letter-spacing:3px;text-transform:uppercase;
              color:#5c544c;margin:0;">Sent via your portfolio contact form</p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch {
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
