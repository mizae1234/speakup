import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SpeakUp — พื้นที่แห่งการรับฟังและแก้ปัญหาร่วมกัน",
  description:
    "แพลตฟอร์มภายในองค์กร สำหรับแชร์ข้อกังวลและไอเดียเพื่อปรับปรุงองค์กรไปด้วยกัน",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="antialiased">{children}</body>
    </html>
  );
}
