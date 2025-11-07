"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";
import * as React from "react";
import Image from "next/image";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(255, 255, 255, ${0.1 + i * 0.03})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke={path.color}
                        strokeWidth={path.width}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    children,
    className = "",
}: {
    children?: React.ReactNode;
    className?: string;
}) {
    const [logoBlur, setLogoBlur] = React.useState(0);

    useEffect(() => {
        function handleScroll() {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollableHeight = documentHeight - windowHeight;
            
            // Calculate scroll percentage (0 at top, 1 at bottom)
            const scrollPercentage = scrollableHeight > 0 
                ? Math.min(scrollTop / scrollableHeight, 1) 
                : 0;
            
            // Blur from 0px at top to 50px at bottom
            const blur = scrollPercentage * 50;
            setLogoBlur(blur);
        }

        // Initial calculation
        handleScroll();

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);

    return (
        <div className={`relative overflow-hidden ${className}`}>
            <div className="absolute inset-0">
                {/* Centered Sozu Credit Logo - Fixed position, behind everything */}
                <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-[1]">
                    <div 
                        className="relative opacity-30 transition-all duration-300 ease-out"
                        style={{ 
                            filter: `blur(${logoBlur}px)`
                        }}
                    >
                        <Image
                            src="/sozucredit_logo.png"
                            alt="Sozu Credit"
                            width={200}
                            height={200}
                            className="w-56 h-56 md:w-76 md:h-76 lg:w-96 lg:h-96"
                            priority
                        />
                    </div>
                </div>
                {/* Animated vectors on top of logo */}
                <div className="absolute inset-0 z-[2]">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
                </div>
            </div>
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
}

