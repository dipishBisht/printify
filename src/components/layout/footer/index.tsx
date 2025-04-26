import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { ArrowRight, ChevronRight, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Printer, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="border-black/10 pt-20 pb-8 relative">
            <Container className="relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div>
                        <div className="flex items-center gap-2 text-xl font-bold text-black mb-6">
                            <Printer className="h-6 w-6 text-[#6f41d2]" />
                            <span>Printify</span>
                        </div>
                        <p className="text-black/70 mb-8">
                            The smart way for students to print documents. Upload, pay, and pick up at your convenience.
                        </p>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/70 hover:text-[#6f41d2] hover:bg-black/10 transition-colors"
                            >
                                <Facebook className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/70 hover:text-[#6f41d2] hover:bg-black/10 transition-colors"
                            >
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/70 hover:text-[#6f41d2] hover:bg-black/10 transition-colors"
                            >
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link
                                href="#"
                                className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center text-black/70 hover:text-[#6f41d2] hover:bg-black/10 transition-colors"
                            >
                                <Linkedin className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", href: "/" },
                                { name: "About Us", href: "#" },
                                { name: "How It Works", href: "#how-it-works" },
                                { name: "Pricing", href: "#pricing" },
                                { name: "Partner Locations", href: "#partners" },
                                { name: "FAQ", href: "#faq" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-black/70 hover:text-black hover:translate-x-1 transition-all flex items-center"
                                    >
                                        <ChevronRight className="h-3 w-3 mr-2 text-[#6f41d2]" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Support</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Help Center", href: "#" },
                                { name: "Contact Us", href: "#" },
                                { name: "Privacy Policy", href: "#" },
                                { name: "Terms of Service", href: "#" },
                                { name: "Refund Policy", href: "#" },
                            ].map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-black/70 hover:text-black hover:translate-x-1 transition-all flex items-center"
                                    >
                                        <ChevronRight className="h-3 w-3 mr-2 text-[#6f41d2]" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-6">Contact</h3>
                        <ul className="space-y-4 text-black/70">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 mr-3 text-[#6f41d2] mt-1 flex-shrink-0" />
                                <div>
                                    <p>123 University Avenue</p>
                                    <p>College Town, CT 12345</p>
                                </div>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 mr-3 text-[#6f41d2] flex-shrink-0" />
                                <p>support@printify.com</p>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 mr-3 text-[#6f41d2] flex-shrink-0" />
                                <p>(123) 456-7890</p>
                            </li>
                        </ul>

                        <div className="mt-8">
                            <h4 className="text-sm font-medium mb-4">Subscribe to our newsletter</h4>
                            <div className="flex">
                                <Input
                                    type="email"
                                    placeholder="Your email"
                                    className="bg-black/5 border-black/10 rounded-l-lg focus-visible:ring-[#6f41d2]"
                                />
                                <Button className="bg-[#6f41d2] hover:bg-[#6f41d2]/80 rounded-r-lg rounded-l-none">
                                    <ArrowRight className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-black/50 text-sm mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Printify. All rights reserved.
                    </p>
                    <div className="flex space-x-6">
                        <Link href="#" className="text-black/50 hover:text-black text-sm">
                            Privacy Policy
                        </Link>
                        <Link href="#" className="text-black/50 hover:text-black text-sm">
                            Terms of Service
                        </Link>
                        <Link href="#" className="text-black/50 hover:text-black text-sm">
                            Cookie Policy
                        </Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}