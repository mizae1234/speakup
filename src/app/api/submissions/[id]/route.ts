import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET — Get single submission detail
export async function GET(
    _request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const submission = await prisma.submission.findUnique({
            where: { id },
        });

        if (!submission) {
            return NextResponse.json(
                { error: "ไม่พบข้อมูล" },
                { status: 404 }
            );
        }

        return NextResponse.json(submission);
    } catch (error) {
        console.error("Failed to fetch submission:", error);
        return NextResponse.json(
            { error: "เกิดข้อผิดพลาดในการดึงข้อมูล" },
            { status: 500 }
        );
    }
}

// PATCH — Update submission status
export async function PATCH(
    request: NextRequest,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { status } = body;

        const validStatuses = ["new", "in_progress", "resolved"];
        if (!validStatuses.includes(status)) {
            return NextResponse.json(
                { error: "สถานะไม่ถูกต้อง" },
                { status: 400 }
            );
        }

        const submission = await prisma.submission.update({
            where: { id },
            data: { status },
        });

        return NextResponse.json(submission);
    } catch (error) {
        console.error("Failed to update submission:", error);
        return NextResponse.json(
            { error: "เกิดข้อผิดพลาดในการอัพเดทข้อมูล" },
            { status: 500 }
        );
    }
}
