import Link from "next/link";

export default function FinalCTA() {
    return (
        <section className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50 via-white to-accent-light/20" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-xl shadow-primary/5 border border-gray-100 text-center relative overflow-hidden">
                        {/* Decorative elements */}
                        <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-br-full" />
                        <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-accent/5 to-transparent rounded-tl-full" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-primary/20">
                                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                                </svg>
                            </div>

                            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4 leading-snug">
                                การพูดคุยอย่างตรงไปตรงมา
                                <br />
                                <span className="gradient-text">คือจุดเริ่มต้นของการเปลี่ยนแปลงที่ดี</span>
                            </h2>

                            <p className="text-lg text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
                                ทุกเสียงของคุณคือพลังในการขับเคลื่อนองค์กรไปข้างหน้า
                                เราพร้อมรับฟังและทำงานร่วมกับคุณ
                            </p>

                            <Link href="/submit" className="group bg-gradient-to-r from-primary to-primary-light text-white font-semibold px-10 py-4 rounded-2xl text-lg transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 flex items-center gap-3 mx-auto">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                                </svg>
                                เริ่มแชร์เรื่องของคุณ
                                <svg
                                    width="18"
                                    height="18"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2.5"
                                    className="transition-transform group-hover:translate-x-1"
                                >
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
