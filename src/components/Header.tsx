"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                ? "bg-white/80 backdrop-blur-xl shadow-sm"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative h-10 w-32 transition-transform group-hover:scale-105">
                            <img
                                src="/LOGO_GI.png"
                                alt="Gold Integrate Co., Ltd."
                                className="h-full w-full object-contain object-left"
                            />
                        </div>
                        <div className="h-6 w-px bg-gray-200" />
                        <span className="text-xl font-bold gradient-text">SpeakUp</span>
                    </Link>

                    {/* Nav Links */}
                    <nav className="hidden md:flex items-center gap-8">
                        <a
                            href="#how-it-works"
                            className="text-sm text-gray-500 hover:text-primary transition-colors"
                        >
                            วิธีการทำงาน
                        </a>
                        <a
                            href="#what-to-share"
                            className="text-sm text-gray-500 hover:text-primary transition-colors"
                        >
                            สิ่งที่แชร์ได้
                        </a>
                        <a
                            href="#trust"
                            className="text-sm text-gray-500 hover:text-primary transition-colors"
                        >
                            ความปลอดภัย
                        </a>
                    </nav>

                    {/* CTA */}
                    <Link href="/submit" className="bg-primary hover:bg-primary-dark text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-primary/25">
                        แจ้งเรื่อง
                    </Link>
                </div>
            </div>
        </header>
    );
}
