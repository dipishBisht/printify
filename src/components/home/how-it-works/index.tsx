import React from "react";
import { Container } from "@/components/ui/container"
import { Heading, Paragraph, SubHeading } from "@/components/ui/typography"
import { howItWorks } from "./data"
import Process from "./Process"
import { Workflow } from "lucide-react"
import Animate from "@/components/ui/animate";

export default function HowItWorks() {

    return (
        <div className="mt-20">
            <Container>
                <div className="flex flex-col gap-2 items-center">
                    <Animate delay={300} className="flex flex-col gap-2 items-center">
                        <SubHeading icon={<Workflow className="w-4 h-4 text-purple-400" />}>Simple Process</SubHeading>
                        <Heading color="light" level={2}>How Printify Works</Heading>
                    </Animate>
                    <Paragraph color="light" size="normal">
                        Printify makes document printing simple and convenient in just a few easy steps
                    </Paragraph>
                    <div
                        className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-10"
                    >
                        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6f41d2]/0 via-[#6f41d2]/50 to-[#6f41d2]/0 hidden md:block" />
                        <Process howItWorks={howItWorks} />
                    </div>
                </div>
            </Container>
        </div>
    )
}