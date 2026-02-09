const steps = [
    {
        number: "01",
        title: "แชร์เรื่องหรือข้อกังวล",
        description:
            "เลือกหัวข้อที่ต้องการแชร์ อธิบายรายละเอียด คุณสามารถเลือกที่จะระบุตัวตนหรือไม่ก็ได้",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "ทีมงานรับฟังและพิจารณา",
        description:
            "ทีมผู้ดูแลจะอ่านและทำความเข้าใจเรื่องของคุณ พร้อมวางแนวทางดูแลอย่างเหมาะสม",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "อัปเดตความคืบหน้าอย่างเหมาะสม",
        description:
            "คุณจะได้รับการอัปเดตเกี่ยวกับความคืบหน้าของเรื่อง ด้วยวิธีที่เหมาะสมและปลอดภัย",
        icon: (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
        ),
    },
];

export default function HowItWorks() {
    return (
        <section id="how-it-works" className="py-24 lg:py-32 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-teal-50/80 via-white to-accent-light/20" />
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-light/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur rounded-full px-4 py-1.5 mb-6 shadow-sm">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2">
                            <circle cx="12" cy="12" r="10" />
                            <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span className="text-sm font-medium text-primary">ง่ายเพียง 3 ขั้นตอน</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        <span className="gradient-text">วิธีการทำงาน</span>ของระบบ
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        กระบวนการที่เรียบง่าย ออกแบบมาเพื่อให้คุณสะดวกและมั่นใจ
                    </p>
                </div>

                {/* Steps */}
                <div className="grid lg:grid-cols-3 gap-8 relative">
                    {/* Connecting line (desktop only) */}
                    <div className="hidden lg:block absolute top-24 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-accent/20" />

                    {steps.map((step, index) => (
                        <div key={index} className="relative group">
                            <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border border-gray-100 h-full">
                                {/* Step number circle */}
                                <div className="relative mb-6">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary-light text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
                                        {step.number}
                                    </div>
                                </div>

                                {/* Icon */}
                                <div className="text-primary/60 mb-4">
                                    {step.icon}
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-gray-800 mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
