import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading, Paragraph, SubHeading } from "@/components/ui/typography";
import Animate from "@/components/ui/animate";

export default function Cta() {
    return (
        <div className="relative min-h-[70vh] flex items-center mt-40">
            <div className="absolute w-full h-full bg-[url(/images/purple-circle.png)] bg-contain bg-center bg-no-repeat -z-10" />
            <Container>
                <div className="flex flex-col gap-5 items-center">
                    <Animate delay={300} className="flex flex-col items-center gap-5">
                        <SubHeading>Get Started with Printify Today</SubHeading>
                        <Heading color="light" level={2}>Start Printing Smarter</Heading>
                    </Animate>
                    <Paragraph color="light" size="normal" className="max-w-xl text-center">
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