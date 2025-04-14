"use client"
import React from "react";
import { useEffect } from "react"
import AOS from "aos"
import "aos/dist/aos.css"
import { cn } from "@/lib/utils"

export default function Animate({
    children,
    animation = "fade-up",
    duration = 800,
    delay = 0,
    className
}: {
    children: React.ReactNode
    animation?: string
    duration?: number
    delay?: number
    className?: string
}) {
    useEffect(() => {
        AOS.init({
            once: true,
        })
        AOS.refresh();
    }, [])

    return (
        <div className={cn(className)}
            data-aos={animation}
            data-aos-duration={duration}
            data-aos-delay={delay}
        >
            {children}
        </div>
    )
}
