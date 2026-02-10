export default function Footer() {
    return (
        <footer className="py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex flex-col items-center text-center space-y-6">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <div className="relative h-12 w-40 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                            <img
                                src="/LOGO_GI.png"
                                alt="Gold Integrate Co., Ltd."
                                className="h-full w-full object-contain"
                            />
                        </div>
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
