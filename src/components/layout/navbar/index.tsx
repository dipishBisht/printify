"use client";

import React, { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const checkAuth = () => {
            const token = localStorage.getItem("jwtToken");
            setIsLoggedIn(!!token);
        };

        checkAuth(); // initial check

        const handleAuthChange = () => {
            checkAuth(); // update login state
        };

        window.addEventListener("authChange", handleAuthChange);

        return () => {
            window.removeEventListener("authChange", handleAuthChange);
        };
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("user");

        setIsLoggedIn(false);
        window.dispatchEvent(new Event("authChange")); // 👈 manually trigger logout update
    };

    return (
        <nav className="sticky inset-0 z-10 w-full py-4 bg-gray-50">
            <Container>
                <div className="flex justify-between items-center">
                    <Link href="/">
                        <div className="flex items-center gap-2 text-xl font-bold text-black mb-6">
                            <Printer className="h-6 w-6 text-[#6f41d2]" />
                            <span>Printify</span>
                        </div>
                    </Link>

                    <div>
                        {isLoggedIn ? (
                            <div className="flex gap-4">
                                <Link href="/profile">
                                    <Button variant="outline">Profile</Button>
                                </Link>
                                <Button onClick={handleLogout} variant="destructive">
                                    Logout
                                </Button>
                            </div>
                        ) : (
                            <Link href="/login">
                                <Button>Login</Button>
                            </Link>
                        )}
                    </div>
                </div>
            </Container>
        </nav>
    );
}
