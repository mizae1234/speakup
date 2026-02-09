"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";

type Submission = {
    id: string;
    referenceCode: string;
    identityMode: string;
    nickname: string | null;
    department: string | null;
    fullName: string | null;
    contact: string | null;
    categories: string[];
    message: string;
    whenHappened: string | null;
    relatedTeam: string | null;
    suggestedFix: string | null;
    status: string;
    createdAt: string;
    updatedAt: string;
};

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
    new: { label: "ใหม่", color: "text-blue-700", bg: "bg-blue-50 border-blue-200" },
    in_progress: { label: "กำลังดำเนินการ", color: "text-amber-700", bg: "bg-amber-50 border-amber-200" },
    resolved: { label: "เสร็จสิ้น", color: "text-emerald-700", bg: "bg-emerald-50 border-emerald-200" },
};

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

const identityLabels: Record<string, string> = {
    anonymous: "ไม่ระบุตัวตน",
    partial: "ระบุตัวตนบางส่วน",
    identified: "ระบุตัวตน",
};

export default function AdminDetailPage() {
    const params = useParams();
    const [submission, setSubmission] = useState<Submission | null>(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);

    useEffect(() => {
        async function fetchSubmission() {
            try {
                const res = await fetch(`/api/submissions/${params.id}`);
                if (res.ok) {
                    const data = await res.json();
                    setSubmission(data);
                }
            } catch (error) {
                console.error("Failed to fetch:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchSubmission();
    }, [params.id]);

    const updateStatus = async (newStatus: string) => {
        if (!submission) return;
        setUpdating(true);
        try {
            const res = await fetch(`/api/submissions/${submission.id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ status: newStatus }),
            });
            if (res.ok) {
                const data = await res.json();
                setSubmission(data);
            }
        } catch (error) {
            console.error("Failed to update:", error);
        } finally {
            setUpdating(false);
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50/50 flex items-center justify-center">
                <svg className="animate-spin w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
            </div>
        );
    }

    if (!submission) {
        return (
            <div className="min-h-screen bg-gray-50/50 flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-500 mb-4">ไม่พบข้อมูล</p>
                    <Link href="/admin" className="text-primary font-medium hover:underline">
                        กลับไปหน้า Admin
                    </Link>
                </div>
            </div>
        );
    }

    const sc = statusConfig[submission.status] || statusConfig.new;

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/admin" className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M19 12H5M12 19l-7-7 7-7" />
                            </svg>
                            <span className="text-sm font-medium">กลับ</span>
                        </Link>
                        <span className="text-gray-300">|</span>
                        <span className="font-mono text-sm font-bold text-primary">{submission.referenceCode}</span>
                    </div>
                </div>
            </header>

            <main className="max-w-4xl mx-auto px-6 py-8">
                {/* Status & reference */}
                <div className="flex flex-wrap items-center gap-3 mb-8">
                    <h1 className="text-xl font-bold text-gray-800">{submission.referenceCode}</h1>
                    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${sc.bg} ${sc.color}`}>
                        {sc.label}
                    </span>
                    <span className="text-sm text-gray-400">
                        {new Date(submission.createdAt).toLocaleDateString("th-TH", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                            hour: "2-digit",
                            minute: "2-digit",
                        })}
                    </span>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                    {/* Main content */}
                    <div className="lg:col-span-2 space-y-6">
                        {/* Message */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">ข้อความ</h2>
                            <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{submission.message}</p>
                        </div>

                        {/* Categories */}
                        {submission.categories.length > 0 && (
                            <div className="bg-white rounded-2xl border border-gray-100 p-6">
                                <h2 className="text-sm font-semibold text-gray-500 mb-3">หมวดหมู่</h2>
                                <div className="flex flex-wrap gap-2">
                                    {submission.categories.map((cat) => (
                                        <span key={cat} className="text-sm bg-teal-50 text-primary font-medium px-3 py-1.5 rounded-xl border border-teal-100">
                                            {categoryLabels[cat] || cat}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Optional details */}
                        {(submission.whenHappened || submission.relatedTeam || submission.suggestedFix) && (
                            <div className="bg-white rounded-2xl border border-gray-100 p-6 space-y-4">
                                <h2 className="text-sm font-semibold text-gray-500">รายละเอียดเพิ่มเติม</h2>
                                {submission.whenHappened && (
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">เหตุการณ์เกิดขึ้นเมื่อใด?</p>
                                        <p className="text-sm text-gray-700">{submission.whenHappened}</p>
                                    </div>
                                )}
                                {submission.relatedTeam && (
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">เกี่ยวข้องกับทีม / กระบวนการใด?</p>
                                        <p className="text-sm text-gray-700">{submission.relatedTeam}</p>
                                    </div>
                                )}
                                {submission.suggestedFix && (
                                    <div>
                                        <p className="text-xs text-gray-400 mb-1">แนวคิดในการแก้ไข</p>
                                        <p className="text-sm text-gray-700 whitespace-pre-wrap">{submission.suggestedFix}</p>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        {/* Identity info */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-3">ข้อมูลผู้ส่ง</h2>
                            <div className="space-y-3">
                                <div>
                                    <p className="text-xs text-gray-400">โหมดการระบุตัวตน</p>
                                    <p className="text-sm font-medium text-gray-700">
                                        {identityLabels[submission.identityMode] || submission.identityMode}
                                    </p>
                                </div>
                                {submission.nickname && (
                                    <div>
                                        <p className="text-xs text-gray-400">ชื่อเล่น</p>
                                        <p className="text-sm text-gray-700">{submission.nickname}</p>
                                    </div>
                                )}
                                {submission.department && (
                                    <div>
                                        <p className="text-xs text-gray-400">แผนก</p>
                                        <p className="text-sm text-gray-700">{submission.department}</p>
                                    </div>
                                )}
                                {submission.fullName && (
                                    <div>
                                        <p className="text-xs text-gray-400">ชื่อ-นามสกุล</p>
                                        <p className="text-sm text-gray-700">{submission.fullName}</p>
                                    </div>
                                )}
                                {submission.contact && (
                                    <div>
                                        <p className="text-xs text-gray-400">ช่องทางติดต่อ</p>
                                        <p className="text-sm text-gray-700">{submission.contact}</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Status update */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-6">
                            <h2 className="text-sm font-semibold text-gray-500 mb-4">อัพเดทสถานะ</h2>
                            <div className="space-y-2">
                                {Object.entries(statusConfig).map(([key, config]) => (
                                    <button
                                        key={key}
                                        onClick={() => updateStatus(key)}
                                        disabled={updating || submission.status === key}
                                        className={`w-full text-left px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all ${submission.status === key
                                                ? `${config.bg} ${config.color} border-current`
                                                : "border-gray-100 text-gray-500 hover:border-gray-200 hover:bg-gray-50"
                                            } ${updating ? "opacity-50 cursor-not-allowed" : ""}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            {submission.status === key && (
                                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                            )}
                                            {config.label}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
