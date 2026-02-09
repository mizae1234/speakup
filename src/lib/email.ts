import nodemailer from "nodemailer";

function getTransporter() {
    return nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASSWORD,
        },
        authMethod: "LOGIN",
        // tls: { ciphers: "SSLv3" }, // Commented out for Gmail compatibility
    });
}

const categoryLabels: Record<string, string> = {
    work: "ปัญหาในการทำงาน",
    team: "สิ่งที่กระทบต่อทีม",
    risk: "ความเสี่ยงหรือความกังวล",
    suggestion: "ข้อเสนอแนะเพื่อการปรับปรุง",
    colleague: "เพื่อนร่วมงาน",
    transparency: "ความไม่โปร่งใสในการทำงาน",
    process: "กระบวนการทำงาน",
    other: "อื่นๆ",
};

export async function sendSubmissionEmail({
    referenceCode,
    categories,
    message,
}: {
    referenceCode: string;
    categories: string[];
    message: string;
}) {
    const emailFrom = process.env.EMAIL_FROM;
    const emailTo = process.env.EMAIL_TO;

    if (!emailFrom || !emailTo) {
        console.warn("[Email] EMAIL_FROM or EMAIL_TO not configured, skipping");
        return;
    }

    const categoryText = categories
        .map((c) => categoryLabels[c] || c)
        .join(", ");

    const subject = `แจ้งประเด็นเพื่อการปรับปรุงองค์กร (Case ID: ${referenceCode})`;

    const text = `เรียน ผู้บริหาร

ระบบ SpeakUp ได้รับการแจ้งประเด็นจากบุคลากรภายในองค์กร

ประเภทเรื่อง: ${categoryText}

ข้อความจากผู้แจ้ง
"${message}"


ระบบ SpeakUp`;

    try {
        const transporter = getTransporter();
        const info = await transporter.sendMail({
            from: emailFrom,
            to: emailTo,
            subject,
            text,
        });
        console.log(`[Email] Sent for ${referenceCode}, messageId: ${info.messageId}`);
    } catch (error) {
        console.error("[Email] Failed to send:", error);
    }
}
