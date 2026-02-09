export default function Footer() {
    return (
        <footer className="py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold gradient-text">SpeakUp</span>
                    </div>

                    {/* Confidentiality message */}
                    <div className="max-w-md">
                        <p className="text-sm text-gray-400 leading-relaxed">
                            ข้อมูลทั้งหมดจะถูกใช้เพื่อการปรับปรุงองค์กร
                            <br />
                            และได้รับการดูแลอย่างเป็นความลับ
                        </p>
                    </div>

                    {/* Divider */}
                    <div className="w-16 h-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full" />

                    {/* Copyright */}
                    <p className="text-xs text-gray-300">
                        © {new Date().getFullYear()} SpeakUp — Internal Platform
                    </p>
                </div>
            </div>
        </footer>
    );
}
