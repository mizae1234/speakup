"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type Submission = {
    id: string;
    referenceCode: string;
    identityMode: string;
    categories: string[];
    message: string;
    status: string;
    createdAt: string;
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
    suggestion: "ข้อเสนอแนะ",
    colleague: "เพื่อนร่วมงาน",
    transparency: "ความไม่โปร่งใส",
    process: "กระบวนการทำงาน",
    other: "อื่นๆ",
};

export default function AdminPage() {
    const [submissions, setSubmissions] = useState<Submission[]>([]);
    const [loading, setLoading] = useState(true);
    const [filterStatus, setFilterStatus] = useState("all");

    const fetchSubmissions = useCallback(async () => {
        setLoading(true);
        try {
            const params = filterStatus !== "all" ? `?status=${filterStatus}` : "";
            const res = await fetch(`/api/submissions${params}`);
            const data = await res.json();
            setSubmissions(data);
        } catch (error) {
            console.error("Failed to fetch:", error);
        } finally {
            setLoading(false);
        }
    }, [filterStatus]);

    useEffect(() => {
        fetchSubmissions();
    }, [fetchSubmissions]);

    const statusCounts = {
        all: submissions.length,
        new: submissions.filter((s) => s.status === "new").length,
        in_progress: submissions.filter((s) => s.status === "in_progress").length,
        resolved: submissions.filter((s) => s.status === "resolved").length,
    };

    return (
        <div className="min-h-screen bg-gray-50/50">
            {/* Header */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                            </div>
                            <span className="text-lg font-bold text-primary">SpeakUp</span>
                        </Link>
                        <span className="text-gray-300">|</span>
                        <span className="text-sm font-medium text-gray-500">Admin Dashboard</span>
                    </div>
                </div>
            </header>

            <main className="max-w-6xl mx-auto px-6 py-8">
                {/* Page title */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">Submissions</h1>
                    <p className="text-gray-500 text-sm">จัดการเรื่องที่ได้รับจากระบบ SpeakUp</p>
                </div>

                {/* Stats cards */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {[
                        { key: "all", label: "ทั้งหมด", count: statusCounts.all, accent: "text-gray-700 bg-white" },
                        { key: "new", label: "ใหม่", count: statusCounts.new, accent: "text-blue-700 bg-blue-50" },
                        { key: "in_progress", label: "กำลังดูแล", count: statusCounts.in_progress, accent: "text-amber-700 bg-amber-50" },
                        { key: "resolved", label: "เสร็จสิ้น", count: statusCounts.resolved, accent: "text-emerald-700 bg-emerald-50" },
                    ].map((s) => (
                        <button
                            key={s.key}
                            onClick={() => setFilterStatus(s.key)}
                            className={`p-4 rounded-2xl border-2 transition-all text-left ${filterStatus === s.key
                                    ? "border-primary shadow-md shadow-primary/10"
                                    : "border-gray-100 hover:border-gray-200"
                                } ${s.accent}`}
                        >
                            <p className="text-2xl font-bold">{s.count}</p>
                            <p className="text-sm opacity-70">{s.label}</p>
                        </button>
                    ))}
                </div>

                {/* Submissions list */}
                <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
                    {loading ? (
                        <div className="p-12 text-center text-gray-400">
                            <svg className="animate-spin w-8 h-8 mx-auto mb-3 text-primary" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                            </svg>
                            กำลังโหลด...
                        </div>
                    ) : submissions.length === 0 ? (
                        <div className="p-12 text-center text-gray-400">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="mx-auto mb-3 opacity-50">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                            <p>ยังไม่มี submission</p>
                        </div>
                    ) : (
                        <div className="divide-y divide-gray-50">
                            {submissions.map((sub) => {
                                const sc = statusConfig[sub.status] || statusConfig.new;
                                return (
                                    <Link
                                        key={sub.id}
                                        href={`/admin/${sub.id}`}
                                        className="flex items-center gap-4 p-5 hover:bg-gray-50/50 transition-colors group"
                                    >
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-center gap-3 mb-1.5">
                                                <span className="font-mono text-sm font-bold text-primary">
                                                    {sub.referenceCode}
                                                </span>
                                                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full border ${sc.bg} ${sc.color}`}>
                                                    {sc.label}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-700 line-clamp-1 mb-1.5">
                                                {sub.message}
                                            </p>
                                            <div className="flex items-center gap-3 text-xs text-gray-400">
                                                <span>
                                                    {new Date(sub.createdAt).toLocaleDateString("th-TH", {
                                                        day: "numeric",
                                                        month: "short",
                                                        year: "numeric",
                                                        hour: "2-digit",
                                                        minute: "2-digit",
                                                    })}
                                                </span>
                                                {sub.categories.length > 0 && (
                                                    <>
                                                        <span>•</span>
                                                        <span>
                                                            {sub.categories
                                                                .map((c) => categoryLabels[c] || c)
                                                                .join(", ")}
                                                        </span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300 group-hover:text-primary transition-colors shrink-0">
                                            <path d="M9 18l6-6-6-6" />
                                        </svg>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
