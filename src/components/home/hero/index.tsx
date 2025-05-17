import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Heading, Paragraph, SubHeading } from "@/components/ui/typography";
import { Sparkle } from "lucide-react";
import Animate from "@/components/ui/animate";

export default function HomeHero() {
    return (
        <div className="min-h-[80vh] relative flex flex-col justify-center">
            <Container className="flex flex-col items-center gap-2">
                <Animate animation="fade-down">
                    <SubHeading color="dark" icon={<Sparkle className="w-4 h-4 text-purple-400" />}>Your Prints, Ready When You Are.</SubHeading>
                </Animate>
                <Animate animation="zoom-in" delay={400}>
                    <Heading color="dark" level={1} className="flex flex-col text-center sm:text-7xl">
                        <span>Print Smarter</span><span>Pick Up Faster!</span>
                    </Heading>
                </Animate>
                <Animate animation="fade-up" delay={600}>
                    <Paragraph color="dark" size="normal">Upload your document, schedule your pickup, pay online, and collect hassle-free.</Paragraph>
                </Animate>
                <Button size="lg">Upload & Schedule</Button>
            </Container>
        </div>
    )
}