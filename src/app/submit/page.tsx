"use client";

import { useState } from "react";
import Link from "next/link";

type IdentityMode = "anonymous" | "partial" | "identified";

const categories = [
    {
        id: "work",
        label: "ปัญหาในการทำงาน",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
    },
    {
        id: "team",
        label: "สิ่งที่กระทบต่อทีม",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        id: "risk",
        label: "ความเสี่ยงหรือความกังวล",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
    },
    {
        id: "suggestion",
        label: "ข้อเสนอแนะเพื่อการปรับปรุง",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="2" x2="12" y2="6" />
                <line x1="12" y1="18" x2="12" y2="22" />
                <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                <line x1="2" y1="12" x2="6" y2="12" />
                <line x1="18" y1="12" x2="22" y2="12" />
                <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
            </svg>
        ),
    },
    {
        id: "colleague",
        label: "เพื่อนร่วมงาน",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
    {
        id: "transparency",
        label: "ความไม่โปร่งใสในการทำงาน",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
            </svg>
        ),
    },
    {
        id: "process",
        label: "กระบวนการทำงาน",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
        ),
    },
    {
        id: "other",
        label: "อื่นๆ",
        icon: (
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="1" />
                <circle cx="19" cy="12" r="1" />
                <circle cx="5" cy="12" r="1" />
            </svg>
        ),
    },
];

export default function SubmitPage() {
    const [identityMode, setIdentityMode] = useState<IdentityMode>("anonymous");
    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
    const [message, setMessage] = useState("");
    const [showOptional, setShowOptional] = useState(false);
    const [optionalWhen, setOptionalWhen] = useState("");
    const [optionalTeam, setOptionalTeam] = useState("");
    const [optionalSolution, setOptionalSolution] = useState("");
    const [nickname, setNickname] = useState("");
    const [department, setDepartment] = useState("");
    const [fullName, setFullName] = useState("");
    const [contact, setContact] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [referenceCode, setReferenceCode] = useState("");
    const [error, setError] = useState("");

    const toggleCategory = (id: string) => {
        setSelectedCategories((prev) =>
            prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
        );
    };

    const handleSubmit = async () => {
        setIsSubmitting(true);
        setError("");
        try {
            const res = await fetch("/api/submissions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    identityMode,
                    nickname: nickname || undefined,
                    department: department || undefined,
                    fullName: fullName || undefined,
                    contact: contact || undefined,
                    categories: selectedCategories,
                    message,
                    whenHappened: optionalWhen || undefined,
                    relatedTeam: optionalTeam || undefined,
                    suggestedFix: optionalSolution || undefined,
                }),
            });
            const data = await res.json();
            if (!res.ok) {
                setError(data.error || "เกิดข้อผิดพลาด กรุณาลองอีกครั้ง");
                return;
            }
            setReferenceCode(data.referenceCode);
            setIsSubmitted(true);
        } catch {
            setError("ไม่สามารถเชื่อมต่อกับเซิร์ฟเวอร์ได้ กรุณาลองอีกครั้ง");
        } finally {
            setIsSubmitting(false);
        }
    };

    /* ─── Success state ─── */
    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center px-6">
                <div className="max-w-lg w-full text-center animate-fade-in-up">
                    {/* Success icon */}
                    <div className="w-20 h-20 mx-auto mb-6 bg-accent-light rounded-full flex items-center justify-center">
                        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                            <polyline points="22 4 12 14.01 9 11.01" />
                        </svg>
                    </div>

                    <h1 className="text-3xl font-bold text-gray-800 mb-3">
                        ส่งเรื่องเรียบร้อยแล้ว
                    </h1>
                    <p className="text-gray-500 mb-8 leading-relaxed">
                        ขอบคุณที่ไว้วางใจแชร์เรื่องราวกับเรา
                        <br />
                        ทีมงานจะดูแลเรื่องของคุณอย่างเป็นความลับ
                    </p>

                    {/* Reference code */}
                    <div className="bg-teal-50 border border-teal-100 rounded-2xl p-6 mb-8">
                        <p className="text-sm text-gray-500 mb-2">รหัสอ้างอิงของคุณ</p>
                        <p className="text-2xl font-bold tracking-widest gradient-text">
                            {referenceCode}
                        </p>
                        <p className="text-xs text-gray-400 mt-3">
                            เก็บรหัสนี้ไว้เพื่อติดตามความคืบหน้า
                        </p>
                    </div>

                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-light text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                    >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                            <polyline points="9 22 9 12 15 12 15 22" />
                        </svg>
                        กลับไปหน้าแรก
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white relative">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-teal-50/60 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-light/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
            </div>

            {/* Header bar */}
            <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100">
                <div className="max-w-3xl mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold text-primary">SpeakUp</span>
                    </Link>

                    {/* Progress indicator */}
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="hidden sm:inline">ขั้นตอนที่ 2 จาก 3</span>
                        <div className="flex gap-1.5">
                            <div className="w-8 h-1.5 rounded-full bg-primary" />
                            <div className="w-8 h-1.5 rounded-full bg-primary" />
                            <div className="w-8 h-1.5 rounded-full bg-gray-200" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Main content */}
            <main className="relative z-10 max-w-3xl mx-auto px-6 py-12">
                {/* Page header */}
                <div className="text-center mb-12 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-2 mb-6">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span className="text-sm text-primary font-medium">ปลอดภัยและเป็นความลับ</span>
                    </div>
                    <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        แชร์เรื่องหรือ<span className="gradient-text">ข้อกังวล</span>ของคุณ
                    </h1>
                    <p className="text-gray-500 leading-relaxed text-lg">
                        คุณสามารถเลือกได้ว่าจะระบุตัวตนหรือไม่
                        <br />
                        ทุกข้อมูลจะถูกดูแลอย่างเป็นความลับ
                    </p>
                </div>

                {/* Form sections */}
                <div className="space-y-10">

                    {/* ── Section 1: Identity Selection ── */}
                    <section className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-primary text-sm font-bold">1</div>
                            <h2 className="text-lg font-semibold text-gray-800">คุณต้องการระบุตัวตนหรือไม่?</h2>
                        </div>
                        <div className="grid md:grid-cols-3 gap-4">
                            {/* Anonymous */}
                            <button
                                onClick={() => setIdentityMode("anonymous")}
                                className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-300 ${identityMode === "anonymous"
                                    ? "border-primary bg-teal-50/50 shadow-lg shadow-primary/10"
                                    : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                                    }`}
                            >
                                {identityMode === "anonymous" && (
                                    <div className="absolute top-3 right-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                )}
                                <div className="w-10 h-10 bg-accent-light rounded-xl flex items-center justify-center mb-3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                        <line x1="2" y1="2" x2="22" y2="22" />
                                    </svg>
                                </div>
                                <p className="font-semibold text-gray-800 mb-1">ไม่ระบุตัวตน</p>
                                <span className="inline-block text-xs bg-accent-light text-accent font-medium px-2 py-0.5 rounded-full mb-2">แนะนำ</span>
                                <p className="text-xs text-gray-400 leading-relaxed">ระบบจะไม่บันทึกข้อมูลที่สามารถระบุตัวคุณได้</p>
                            </button>

                            {/* Partial */}
                            <button
                                onClick={() => setIdentityMode("partial")}
                                className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-300 ${identityMode === "partial"
                                    ? "border-primary bg-teal-50/50 shadow-lg shadow-primary/10"
                                    : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                                    }`}
                            >
                                {identityMode === "partial" && (
                                    <div className="absolute top-3 right-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                )}
                                <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center mb-3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="1.5">
                                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                                        <circle cx="12" cy="7" r="4" />
                                    </svg>
                                </div>
                                <p className="font-semibold text-gray-800 mb-1">ระบุตัวตนบางส่วน</p>
                                <p className="text-xs text-gray-400 leading-relaxed">ชื่อเล่น / แผนก (ไม่บังคับ)</p>
                            </button>

                            {/* Fully identified */}
                            <button
                                onClick={() => setIdentityMode("identified")}
                                className={`relative text-left p-5 rounded-2xl border-2 transition-all duration-300 ${identityMode === "identified"
                                    ? "border-primary bg-teal-50/50 shadow-lg shadow-primary/10"
                                    : "border-gray-100 bg-white hover:border-gray-200 hover:shadow-md"
                                    }`}
                            >
                                {identityMode === "identified" && (
                                    <div className="absolute top-3 right-3 w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    </div>
                                )}
                                <div className="w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center mb-3">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3B82F6" strokeWidth="1.5">
                                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                                        <line x1="16" y1="2" x2="16" y2="6" />
                                        <line x1="8" y1="2" x2="8" y2="6" />
                                        <line x1="3" y1="10" x2="21" y2="10" />
                                    </svg>
                                </div>
                                <p className="font-semibold text-gray-800 mb-1">ระบุตัวตน</p>
                                <p className="text-xs text-gray-400 leading-relaxed">ชื่อ-นามสกุล และช่องทางติดต่อ</p>
                            </button>
                        </div>

                        {/* Conditional identity fields */}
                        {identityMode === "partial" && (
                            <div className="mt-5 p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-4 animate-fade-in-up">
                                <div>
                                    <label className="text-sm text-gray-600 font-medium mb-1.5 block">ชื่อเล่น (ไม่บังคับ)</label>
                                    <input
                                        type="text"
                                        value={nickname}
                                        onChange={(e) => setNickname(e.target.value)}
                                        placeholder="เช่น น้องแอม, พี่โอ๊ค"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-600 font-medium mb-1.5 block">แผนก (ไม่บังคับ)</label>
                                    <input
                                        type="text"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                        placeholder="เช่น ฝ่ายการตลาด, IT"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>
                        )}
                        {identityMode === "identified" && (
                            <div className="mt-5 p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-4 animate-fade-in-up">
                                <div>
                                    <label className="text-sm text-gray-600 font-medium mb-1.5 block">ชื่อ-นามสกุล</label>
                                    <input
                                        type="text"
                                        value={fullName}
                                        onChange={(e) => setFullName(e.target.value)}
                                        placeholder="ชื่อจริง นามสกุล"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-600 font-medium mb-1.5 block">ช่องทางติดต่อ (ไม่บังคับ)</label>
                                    <input
                                        type="text"
                                        value={contact}
                                        onChange={(e) => setContact(e.target.value)}
                                        placeholder="อีเมล หรือ เบอร์โทร"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                            </div>
                        )}
                    </section>

                    {/* ── Section 2: Issue Category ── */}
                    <section className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-primary text-sm font-bold">2</div>
                            <h2 className="text-lg font-semibold text-gray-800">เรื่องที่คุณอยากแชร์เกี่ยวกับอะไร?</h2>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            {categories.map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => toggleCategory(cat.id)}
                                    className={`flex items-center gap-2.5 px-5 py-3 rounded-xl border-2 transition-all duration-300 text-sm font-medium ${selectedCategories.includes(cat.id)
                                        ? "border-primary bg-teal-50/50 text-primary shadow-md shadow-primary/10"
                                        : "border-gray-100 bg-white text-gray-600 hover:border-gray-200 hover:shadow-sm"
                                        }`}
                                >
                                    <span className={selectedCategories.includes(cat.id) ? "text-primary" : "text-gray-400"}>
                                        {cat.icon}
                                    </span>
                                    {cat.label}
                                    {selectedCategories.includes(cat.id) && (
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-primary">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                    )}
                                </button>
                            ))}
                        </div>
                        <p className="text-xs text-gray-400 mt-3 ml-1">สามารถเลือกได้มากกว่า 1 หัวข้อ</p>
                    </section>

                    {/* ── Section 3: Main Message ── */}
                    <section className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-8 h-8 bg-teal-50 rounded-lg flex items-center justify-center text-primary text-sm font-bold">3</div>
                            <h2 className="text-lg font-semibold text-gray-800">เล่าเรื่องของคุณ</h2>
                        </div>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows={6}
                            placeholder={"คุณสามารถเล่าได้ตามสบาย\nไม่จำเป็นต้องใช้คำทางการ"}
                            className="w-full px-5 py-4 bg-white rounded-2xl border-2 border-gray-100 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none leading-relaxed"
                        />
                        <p className="text-xs text-gray-400 mt-2.5 ml-1 leading-relaxed">
                            ไม่มีรูปแบบถูกหรือผิด — เราอยากเข้าใจมุมมองของคุณ
                        </p>
                    </section>

                    {/* ── Section 4: Optional Details ── */}
                    <section className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
                        <button
                            onClick={() => setShowOptional(!showOptional)}
                            className="w-full flex items-center justify-between p-5 rounded-2xl border-2 border-gray-100 bg-white hover:border-gray-200 hover:shadow-sm transition-all duration-300"
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gray-50 rounded-lg flex items-center justify-center">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#94A3B8" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <line x1="12" y1="8" x2="12" y2="16" />
                                        <line x1="8" y1="12" x2="16" y2="12" />
                                    </svg>
                                </div>
                                <div className="text-left">
                                    <p className="text-sm font-semibold text-gray-700">เพิ่มรายละเอียดเพิ่มเติม</p>
                                    <p className="text-xs text-gray-400">ไม่บังคับ — กรอกเฉพาะส่วนที่สะดวก</p>
                                </div>
                            </div>
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#94A3B8"
                                strokeWidth="2"
                                className={`transition-transform duration-300 ${showOptional ? "rotate-180" : ""}`}
                            >
                                <polyline points="6 9 12 15 18 9" />
                            </svg>
                        </button>

                        {showOptional && (
                            <div className="mt-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 space-y-5 animate-fade-in-up">
                                <div>
                                    <label className="text-sm text-gray-600 font-medium mb-1.5 block">
                                        เหตุการณ์เกิดขึ้นเมื่อใด?
                                    </label>
                                    <input
                                        type="text"
                                        value={optionalWhen}
                                        onChange={(e) => setOptionalWhen(e.target.value)}
                                        placeholder="เช่น สัปดาห์ที่แล้ว, เดือนที่ผ่านมา, ไม่แน่ใจ"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-600 font-medium mb-1.5 block">
                                        เกี่ยวข้องกับทีม / กระบวนการใด?
                                    </label>
                                    <input
                                        type="text"
                                        value={optionalTeam}
                                        onChange={(e) => setOptionalTeam(e.target.value)}
                                        placeholder="เช่น ทีม HR, กระบวนการประเมินผล"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    />
                                </div>
                                <div>
                                    <label className="text-sm text-gray-600 font-medium mb-1.5 block">
                                        มีแนวคิดในการแก้ไขหรือไม่?
                                    </label>
                                    <textarea
                                        value={optionalSolution}
                                        onChange={(e) => setOptionalSolution(e.target.value)}
                                        rows={3}
                                        placeholder="หากมี สามารถแชร์ได้ตรงนี้เลย"
                                        className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 text-gray-800 placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                                    />
                                </div>
                            </div>
                        )}
                    </section>

                    {/* ── Confidentiality Reminder ── */}
                    <section className="animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
                        <div className="flex items-start gap-4 p-5 bg-teal-50/50 rounded-2xl border border-teal-100">
                            <div className="w-10 h-10 bg-accent-light rounded-xl flex items-center justify-center shrink-0 mt-0.5">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-gray-700 mb-1">ข้อมูลของคุณได้รับการปกป้อง</p>
                                <p className="text-sm text-gray-500 leading-relaxed">
                                    ข้อมูลทั้งหมดจะถูกใช้เพื่อการพัฒนาองค์กรเท่านั้น
                                    <br />
                                    และจะไม่ถูกเปิดเผยโดยไม่จำเป็น
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* ── Error Message ── */}
                    {error && (
                        <div className="flex items-start gap-3 p-4 bg-red-50 rounded-2xl border border-red-100 animate-fade-in-up">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF4444" strokeWidth="1.5" className="shrink-0 mt-0.5">
                                <circle cx="12" cy="12" r="10" />
                                <line x1="15" y1="9" x2="9" y2="15" />
                                <line x1="9" y1="9" x2="15" y2="15" />
                            </svg>
                            <p className="text-sm text-red-600">{error}</p>
                        </div>
                    )}

                    {/* ── Submit Section ── */}
                    <section className="animate-fade-in-up pt-2" style={{ animationDelay: "0.6s" }}>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button
                                onClick={handleSubmit}
                                disabled={isSubmitting || !message.trim()}
                                className={`group flex-1 flex items-center justify-center gap-2.5 font-semibold px-8 py-4 rounded-2xl text-base transition-all duration-300 ${message.trim()
                                    ? "bg-gradient-to-r from-primary to-primary-light text-white hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
                                    : "bg-gray-100 text-gray-400 cursor-not-allowed"
                                    }`}
                            >
                                {isSubmitting ? (
                                    <>
                                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        กำลังส่ง...
                                    </>
                                ) : (
                                    <>
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                        </svg>
                                        ส่งเรื่องอย่างปลอดภัย
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform group-hover:translate-x-1">
                                            <path d="M5 12h14M12 5l7 7-7 7" />
                                        </svg>
                                    </>
                                )}
                            </button>
                            <Link
                                href="/"
                                className="flex items-center justify-center gap-2 px-7 py-4 rounded-2xl text-base font-medium border-2 border-gray-100 text-gray-500 bg-white hover:border-gray-200 hover:text-gray-700 transition-all duration-300"
                            >
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M19 12H5M12 19l-7-7 7-7" />
                                </svg>
                                กลับไปหน้าแรก
                            </Link>
                        </div>

                        <p className="text-center text-xs text-gray-400 mt-5 leading-relaxed">
                            หลังจากส่งเรื่องแล้ว คุณจะได้รับรหัสอ้างอิงเพื่อติดตามความคืบหน้า
                        </p>
                    </section>
                </div>
            </main>
        </div>
    );
}
