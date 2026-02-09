const categories = [
    {
        title: "ปัญหาในการทำงาน",
        description: "กระบวนการที่ไม่สะดวก เครื่องมือที่ไม่เพียงพอ หรือสิ่งที่ทำให้งานไม่ราบรื่น",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
            </svg>
        ),
        gradient: "from-teal-50 to-teal-100/30",
        iconBg: "bg-teal-100",
        iconColor: "text-primary",
    },
    {
        title: "สิ่งที่กระทบต่อทีม",
        description: "ปัญหาด้านการสื่อสาร ความร่วมมือในทีม หรือสิ่งที่ส่งผลต่อบรรยากาศในการทำงาน",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        ),
        gradient: "from-blue-50 to-blue-100/30",
        iconBg: "bg-blue-100",
        iconColor: "text-blue-600",
    },
    {
        title: "ความเสี่ยงที่ควรระวัง",
        description: "สิ่งที่อาจส่งผลกระทบต่อองค์กร ความปลอดภัย หรือคุณภาพของงาน",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                <line x1="12" y1="9" x2="12" y2="13" />
                <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
        ),
        gradient: "from-amber-50 to-amber-100/30",
        iconBg: "bg-amber-100",
        iconColor: "text-amber-600",
    },
    {
        title: "ข้อเสนอแนะเพื่อการปรับปรุง",
        description: "ไอเดียที่อยากเสนอ กระบวนการที่อยากปรับปรุง หรือสิ่งใหม่ที่อยากให้ลอง",
        icon: (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
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
        gradient: "from-violet-50 to-violet-100/30",
        iconBg: "bg-violet-100",
        iconColor: "text-violet-600",
    },
];

export default function WhatYouCanShare() {
    return (
        <section id="what-to-share" className="py-24 lg:py-32 relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-teal-50 rounded-full px-4 py-1.5 mb-6">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0D9488" strokeWidth="2">
                            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                        </svg>
                        <span className="text-sm font-medium text-primary">หัวข้อที่แชร์ได้</span>
                    </div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                        สิ่งที่คุณสามารถ<span className="gradient-text">แชร์ได้</span>
                    </h2>
                    <p className="text-lg text-gray-500 leading-relaxed">
                        ไม่ว่าจะเป็นปัญหาเล็กหรือใหญ่ ทุกเรื่องมีคุณค่าต่อการพัฒนาองค์กร
                    </p>
                </div>

                {/* Category cards */}
                <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl p-6 lg:p-8 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 hover:-translate-y-1 border border-gray-100 hover:border-primary/10"
                        >
                            <div
                                className={`w-14 h-14 rounded-2xl ${cat.iconBg} ${cat.iconColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
                            >
                                {cat.icon}
                            </div>
                            <h3 className="text-lg font-bold text-gray-800 mb-2">
                                {cat.title}
                            </h3>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {cat.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Reassurance text */}
                <div className="text-center mt-12 max-w-lg mx-auto">
                    <div className="bg-teal-50/50 rounded-2xl p-6 border border-teal-100/50">
                        <p className="text-gray-600 leading-relaxed">
                            <span className="font-medium text-primary">หากไม่แน่ใจว่าเรื่องนี้ควรแชร์หรือไม่</span>
                            <br />
                            <span className="text-gray-500">คุณสามารถแชร์ได้ — เราพร้อมรับฟัง</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
