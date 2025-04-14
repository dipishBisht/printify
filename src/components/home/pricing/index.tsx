"use client";
import React from "react";
import { Container } from "@/components/ui/container";
import { Heading, Paragraph, SubHeading } from "@/components/ui/typography";
import { BadgeIndianRupee } from "lucide-react";
import PricingSlider from "./PricingSlider";
import { pricingOptions } from "./data";
import Animate from "@/components/ui/animate";

export default function Pricing() {

    return (
        <div className="mt-28">
            <Container>
                <div className="flex flex-col items-center gap-2">
                    <Animate delay={300} className="flex flex-col items-center gap-2">
                        <SubHeading icon={<BadgeIndianRupee className="text-purple-400 h-5 w-5" />}>Pricing</SubHeading>
                        <Heading color="light" level={2}>Simple, Transparent Pricing</Heading>
                    </Animate>
                    <Paragraph color="light" size="normal" className="max-w-3xl text-center">
                        Whether you&apos;re printing simple documents or producing high-quality marketing materials, we have a plan that fits your needs. Transparent pricing with no hidden fees.
                    </Paragraph>
                </div>
                <div className="mt-16">
                    <PricingSlider options={pricingOptions} />
                </div>
            </Container>
        </div>
    )
}
