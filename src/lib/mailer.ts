import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendQuoteNotification(data: {
  name: string;
  contact: string;
  service: string;
  budget: string;
  description: string;
}) {
  const to = process.env.NOTIFY_EMAIL || "ruby100400@korea.ac.kr";

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("[Mail] SMTP not configured, skipping email notification");
    return;
  }

  await transporter.sendMail({
    from: `"OOi 견적알림" <${process.env.SMTP_USER}>`,
    to,
    subject: `[OOi] 새 견적 신청 — ${data.service}`,
    html: `
      <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:20px;">
        <h2 style="color:#10b981;">새로운 견적 신청이 들어왔습니다</h2>
        <table style="width:100%;border-collapse:collapse;">
          <tr><td style="padding:8px 0;color:#666;width:100px;">이름</td><td style="padding:8px 0;font-weight:bold;">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">연락처</td><td style="padding:8px 0;font-weight:bold;">${data.contact}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">서비스</td><td style="padding:8px 0;font-weight:bold;">${data.service}</td></tr>
          <tr><td style="padding:8px 0;color:#666;">예산</td><td style="padding:8px 0;font-weight:bold;">${data.budget}</td></tr>
        </table>
        <div style="margin-top:16px;padding:12px;background:#f8fafc;border-radius:8px;">
          <p style="margin:0;color:#334155;font-size:14px;">${data.description || "상세 내용 없음"}</p>
        </div>
        <p style="margin-top:20px;color:#999;font-size:12px;">OOi Admin에서 확인하세요 → /admin</p>
      </div>
    `,
  });
}
