"use client";
import React from "react";
import { useRef, useState } from "react";
import Image from "next/image";
import { InteractiveSectionProps } from "./types";
import { CheckCircle } from "lucide-react";
import { Heading, Paragraph } from "@/components/ui/typography";
import Animate from "@/components/ui/animate";

export default function InteractiveSection({
    title,
    description,
    features,
    imageSrc,
    accentColor,
    direction = "left",
}: InteractiveSectionProps) {

    const [isHovered, setIsHovered] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
            x: ((e.clientX - rect.left) / rect.width) * 100,
            y: ((e.clientY - rect.top) / rect.height) * 100,
        })
    }

    return (
        <div
            ref={containerRef}
            className={`relative overflow-hidden rounded-3xl border border-white/10 ${isHovered ? "bg-[#0D0E17]" : "bg-[#0B0C14]"
                } transition-colors duration-300`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
            style={{
                backgroundImage: isHovered
                    ? `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, ${accentColor}15 0%, transparent 60%)`
                    : "none",
            }}
        >
            <div
                className={`grid grid-cols-1 ${direction === "left" ? "md:grid-cols-[1.5fr,1fr]" : "md:grid-cols-[1fr,1.5fr] md:flex-row-reverse"
                    } gap-8 p-8 md:p-12`}
            >
                <div className={`flex flex-col justify-center ${direction === "right" ? "md:order-2" : ""}`}>
                    <Animate delay={300} animation="fade-right">
                        <Heading color="light" level={3}>
                            {title}
                        </Heading>
                    </Animate>
                    <Paragraph color="light" size="normal" className="mb-8">{description}</Paragraph>

                    <div className="space-y-4 mb-8">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`flex items-start transition-transform duration-300 ${isHovered ? "translate-x-2" : ""}`}
                                style={{ transitionDelay: `${index * 50}ms` }}
                            >
                                <div
                                    className="mr-3 mt-1 h-6 w-6 rounded-full flex items-center justify-center flex-shrink-0"
                                >
                                    <CheckCircle className="h-4 w-4" color={accentColor} />
                                </div>
                                <span className="text-white/80">{feature}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div
                    className={`relative h-64 md:h-auto rounded-xl overflow-hidden ${direction === "right" ? "md:order-1" : ""}`}
                >
                    <div
                        className={`absolute inset-0 ${accentColor.replace(
                            "bg",
                            "bg-opacity-30",
                        )} opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-30" : ""}`}
                    />
                    <Image src={imageSrc || "/placeholder.svg"} alt={title} fill className="object-cover" />
                </div>
            </div>
        </div>
    )
}