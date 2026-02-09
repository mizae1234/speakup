import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-10 w-72 h-72 bg-teal-100/40 rounded-full blur-3xl" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-light/30 rounded-full blur-3xl" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-teal-50/50 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left: Content */}
                    <div className="space-y-8 animate-fade-in-up">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-2">
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                            <span className="text-sm text-primary font-medium">
                                ระบบภายในองค์กร — ปลอดภัยและเป็นความลับ
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl lg:text-5xl xl:text-[3.25rem] font-bold text-gray-800 leading-tight tracking-tight">
                            พื้นที่สำหรับ
                            <br />
                            <span className="gradient-text">การพูดคุยและช่วยกัน</span>
                            <br />
                            แก้ปัญหาในองค์กร
                        </h1>

                        {/* Subheadline */}
                        <div className="space-y-2 text-lg text-gray-500 leading-relaxed">
                            <p>ทุกเสียงมีความหมาย</p>
                            <p>คุณสามารถเลือกได้ว่าจะระบุตัวตนหรือไม่</p>
                            <p>ทุกเรื่องจะถูกดูแลอย่างเป็นความลับ</p>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-wrap gap-4 pt-2">
                            <Link href="/submit" className="group bg-gradient-to-r from-primary to-primary-light text-white font-semibold px-8 py-4 rounded-2xl text-base transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center gap-2">
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                แจ้งเรื่อง / แชร์ข้อกังวล
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    className="transition-transform group-hover:translate-x-1"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>

                            <button className="bg-white border border-gray-200 text-gray-600 font-medium px-7 py-4 rounded-2xl text-base transition-all duration-200 hover:border-primary/30 hover:text-primary hover:bg-teal-50/50 flex items-center gap-2">
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <circle cx="12" cy="12" r="10" />
                                    <polygon points="10 8 16 12 10 16 10 8" />
                                </svg>
                                วิธีการทำงานของระบบ
                            </button>
                        </div>

                        {/* Trust micro-badges */}
                        <div className="flex flex-wrap gap-6 pt-4 text-sm text-gray-400">
                            <div className="flex items-center gap-2">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-accent"
                                >
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                ปลอดภัย 100%
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-accent"
                                >
                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                    <line x1="1" y1="1" x2="23" y2="23" />
                                </svg>
                                ไม่ระบุตัวตนได้
                            </div>
                            <div className="flex items-center gap-2">
                                <svg
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    className="text-accent"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22 4 12 14.01 9 11.01" />
                                </svg>
                                เป็นความลับ
                            </div>
                        </div>
                    </div>

                    {/* Right: Illustration */}
                    <div className="relative hidden lg:flex justify-center items-center">
                        {/* Decorative ring */}
                        <div className="absolute w-[500px] h-[500px] border-2 border-dashed border-teal-100 rounded-full opacity-50 animate-[spin_60s_linear_infinite]" />
                        <div className="absolute w-[400px] h-[400px] border border-accent-light rounded-full opacity-30" />

                        {/* Main illustration */}
                        <div className="relative z-10 animate-float">
                            <div className="w-[420px] h-[420px] relative">
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-100/50 to-accent-light/30 rounded-3xl rotate-6" />
                                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-3xl shadow-2xl shadow-primary/10 overflow-hidden">
                                    <Image
                                        src="/hero-illustration.png"
                                        alt="SpeakUp - Trust & Communication"
                                        fill
                                        className="object-cover p-4"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Floating elements */}
                        <div className="absolute -top-4 -right-6 z-20 bg-white rounded-2xl shadow-lg shadow-primary/10 p-3 animate-float" style={{ animationDelay: "1s" }}>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-accent-light rounded-lg flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-medium text-gray-600">ปลอดภัย</span>
                            </div>
                        </div>

                        <div className="absolute -bottom-4 -left-10 z-20 bg-white rounded-2xl shadow-lg shadow-primary/10 p-3 animate-float" style={{ animationDelay: "2s" }}>
                            <div className="flex items-center gap-2">
                                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2">
                                        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                    </svg>
                                </div>
                                <span className="text-xs font-medium text-gray-600">เป็นความลับ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
