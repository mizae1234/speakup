import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { sendSubmissionEmail } from "@/lib/email";

function generateReferenceCode(): string {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let code = "SP-";
    for (let i = 0; i < 6; i++) {
        code += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return code;
}

// POST — Create new submission
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const {
            identityMode,
            nickname,
            department,
            fullName,
            contact,
            categories,
            message,
            whenHappened,
            relatedTeam,
            suggestedFix,
        } = body;

        if (!message?.trim()) {
            return NextResponse.json(
                { error: "กรุณากรอกข้อความ" },
                { status: 400 }
            );
        }

        if (!identityMode) {
            return NextResponse.json(
                { error: "กรุณาเลือกโหมดการระบุตัวตน" },
                { status: 400 }
            );
        }

        // Generate unique reference code
        let referenceCode = generateReferenceCode();
        let attempts = 0;
        while (attempts < 10) {
            const existing = await prisma.submission.findUnique({
                where: { referenceCode },
            });
            if (!existing) break;
            referenceCode = generateReferenceCode();
            attempts++;
        }

        const submission = await prisma.submission.create({
            data: {
                referenceCode,
                identityMode,
                nickname: nickname || null,
                department: department || null,
                fullName: fullName || null,
                contact: contact || null,
                categories: categories || [],
                message: message.trim(),
                whenHappened: whenHappened || null,
                relatedTeam: relatedTeam || null,
                suggestedFix: suggestedFix || null,
            },
        });

        // Send email notification (fire-and-forget)
        sendSubmissionEmail({
            referenceCode: submission.referenceCode,
            categories: submission.categories,
            message: submission.message,
        }).catch((err) => console.error("Email send failed:", err));

        return NextResponse.json(
            { referenceCode: submission.referenceCode, id: submission.id },
            { status: 201 }
        );
    } catch (error) {
        console.error("Failed to create submission:", error);
        return NextResponse.json(
            { error: "เกิดข้อผิดพลาดในการส่งข้อมูล กรุณาลองอีกครั้ง" },
            { status: 500 }
        );
    }
}

// GET — List all submissions (for admin)
export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url);
        const status = searchParams.get("status");

        const where = status && status !== "all" ? { status } : {};

        const submissions = await prisma.submission.findMany({
            where,
            orderBy: { createdAt: "desc" },
            select: {
                id: true,
                referenceCode: true,
                identityMode: true,
                categories: true,
                message: true,
                status: true,
                createdAt: true,
            },
        });

        return NextResponse.json(submissions);
    } catch (error) {
        console.error("Failed to fetch submissions:", error);
        return NextResponse.json(
            { error: "เกิดข้อผิดพลาดในการดึงข้อมูล" },
            { status: 500 }
        );
    }
}
