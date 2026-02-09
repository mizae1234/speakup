const trustItems = [
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
                <line x1="18" y1="8" x2="23" y2="13" />
                <line x1="23" y1="8" x2="18" y2="13" />
            </svg>
        ),
        title: "ไม่บังคับระบุตัวตน",
        description: "คุณสามารถเลือกได้ว่าจะระบุชื่อหรือไม่ ไม่มีผลต่อการดูแลเรื่องของคุณ",
        color: "from-teal-50 to-teal-100/50",
        iconBg: "bg-teal-100",
        iconColor: "text-primary",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="2" y1="2" x2="22" y2="22" />
            </svg>
        ),
        title: "ไม่มีการติดตาม IP",
        description: "ระบบไม่เก็บ IP address หรือข้อมูลที่สามารถระบุตัวตนของคุณได้",
        color: "from-emerald-50 to-emerald-100/50",
        iconBg: "bg-emerald-100",
        iconColor: "text-accent",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        title: "ทุกเรื่องมีผู้ดูแล",
        description: "มีทีมงานที่ได้รับมอบหมายคอยดูแลและติดตามทุกเรื่องที่แชร์เข้ามา",
        color: "from-blue-50 to-blue-100/50",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
        ),
        title: "ข้อมูลเป็นความลับ",
        description: "ทุกข้อมูลถูกเก็บรักษาอย่างปลอดภัย และเข้าถึงได้เฉพาะผู้มีหน้าที่ดูแล",
        color: "from-violet-50 to-violet-100/50",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
    },
];

export default function TrustSafety() {
    return (
        <section id="trust" className="py-24 lg:py-32 relative">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-white" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-accent-light/50 rounded-full px-4 py-1.5 mb-6">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        </svg>
                        <span className="text-sm font-medium text-accent">
                            ความปลอดภัยเป็นสิ่งสำคัญ
                        </span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        คุณสามารถ<span className="gradient-text">ไว้วางใจ</span>ได้
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        ระบบถูกออกแบบมาเพื่อให้คุณรู้สึกปลอดภัยและมั่นใจในทุกขั้นตอน
                    </p>
                </div>

                {/* Trust cards */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {trustItems.map((item, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/10"
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl ${item.iconBg} ${item.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                            >
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
