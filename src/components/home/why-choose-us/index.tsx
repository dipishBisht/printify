import React from "react";
import { Container } from "@/components/ui/container";
import { Heading, Paragraph, SubHeading } from "@/components/ui/typography";
import InteractiveSection from "./InteractiveSection";
import { Crown } from "lucide-react";
import Animate from "@/components/ui/animate";

export default function WhyChooseUs() {
    return (
        <div className="relative mt-40">
            <Container>
                <div className="flex flex-col gap-2 items-center">
                    <Animate delay={300} className="flex flex-col items-center gap-2">
                        <SubHeading color="dark" icon={<Crown className="h-5 w-5 text-purple-400" />}>Advantages</SubHeading>
                        <Heading color="dark" level={2}>Why Choose Printify</Heading>
                    </Animate>
                    <Paragraph color="dark" size="normal">
                        We offer a range of benefits that make document printing easier than ever before
                    </Paragraph>
                </div>
                <div className="space-y-7 mt-10">
                    <InteractiveSection
                        title="Time-Saving Convenience"
                        description="No more waiting in lines or rushing to print before class. Upload your documents anytime, from anywhere, and pick them up when you're ready."
                        features={[
                            "24/7 document submission",
                            "Schedule pickup at your convenience",
                            "Real-time status updates",
                            "Mobile-friendly platform",
                        ]}
                        imageSrc="/placeholder.svg?height=600&width=800&text=Time+Saving"
                        accentColor="#6f41d2"
                        direction="left"
                    />

                    <InteractiveSection
                        title="Campus-Wide Availability"
                        description="With print locations across campus and nearby areas, you're never far from a Printify pickup point."
                        features={[
                            "50+ campus locations",
                            "Strategically placed near libraries and study areas",
                            "Extended hours at select locations",
                            "New locations added regularly",
                        ]}
                        imageSrc="/placeholder.svg?height=600&width=800&text=Campus+Locations"
                        accentColor="#2196F3"
                        direction="right"
                    />

                    <InteractiveSection
                        title="Student-Friendly Pricing"
                        description="Our pricing is designed with student budgets in mind, with special discounts and package deals for frequent users."
                        features={[
                            "Transparent pricing with no hidden fees",
                            "Volume discounts for larger print jobs",
                            "Special rates for student organizations",
                            "Loyalty program for regular users",
                        ]}
                        imageSrc="/placeholder.svg?height=600&width=800&text=Student+Pricing"
                        accentColor="#4CAF50"
                        direction="left"
                    />
                </div>
            </Container>
        </div>
    )
}
