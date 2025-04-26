import React from "react";
import { Container } from "@/components/ui/container";
import { Printer } from "lucide-react";

export default function Navbar() {
    return (
        <nav className="sticky inset-0 z-10 w-full py-4 bg-gray-50">
            <Container>
                <div className="flex items-center gap-2 text-xl font-bold text-black mb-6">
                    <Printer className="h-6 w-6 text-[#6f41d2]" />
                    <span>Printify</span>
                </div>
            </Container>
        </nav>
    )
}