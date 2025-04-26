import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading, Paragraph, SubHeading } from "@/components/ui/typography";
import Animate from "@/components/ui/animate";
import { Handshake } from "lucide-react";

export default function Cta() {
    return (
        <div className="relative flex items-center my-40">
            <Container>
                <div className="flex flex-col gap-5 items-center">
                    <Animate delay={300} className="flex flex-col items-center gap-5">
                        <SubHeading color="dark" icon={<Handshake className="w-4 h-4 text-purple-400" />}>Get Started with Printify Today</SubHeading>
                        <Heading color="dark" level={2}>Start Printing Smarter</Heading>
                    </Animate>
                    <Paragraph color="dark" size="normal" className="max-w-xl text-center">
                        Print your documents securely, skip the queues, and support your local print shop — all in just a few clicks.
                    </Paragraph>
                    <div className="space-x-4">
                        <Button>Sign Up</Button>
                        <Button variant="secondary">Login</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}