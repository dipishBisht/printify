import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { IHowItWorks } from "./types";

export default function Process({ howItWorks }: { howItWorks: IHowItWorks[] }) {
    return (
        <>
            {howItWorks.map((item, index) => {
                const Icon = item.icon;
                return (
                    <Card className="group gap-3 relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 h-full transition-all duration-300 hover:border-[#6f41d2]/30" key={index}>
                        <div className="absolute inset-0 h-full w-full bg-[url(/images/hero-bg-2.jpg)] bg-cover bg-center bg-no-repeat -z-10 rounded-2xl" />
                        <div className="absolute -top-5 -right-5 w-10 h-10 rounded-full bg-[#6f41d2]/20 flex items-center justify-center text-sm font-bold text-[#6f41d2] border border-[#6f41d2]/30">
                            {item.step}
                        </div>
                        <CardHeader>
                            <div className="w-16 h-16 bg-[#6f41d2]/10 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:bg-[#6f41d2]/20">
                                <Icon className="h-8 w-8 text-[#6f41d2]" />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardTitle className="text-xl font-semibold mb-3 text-white">{item.title}</CardTitle>
                            <CardDescription className="text-white/70">{item.description}</CardDescription>
                        </CardContent>
                    </Card>
                )
            })}
        </>
    )
}