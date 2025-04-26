import Animate from "@/components/ui/animate";
import { Container } from "@/components/ui/container";
import { Heading, SubHeading } from "@/components/ui/typography";
import React from "react";

export default function Partners() {
    return (
        <div className="relative mt-28">
            <Container>
                <div className="flex flex-col gap-2">
                    <Animate delay={300} className="flex flex-col items-center gap-2">
                        <SubHeading color="dark">Be Our Partners</SubHeading>
                        <Heading color="dark" level={2}>Our Partners</Heading>
                    </Animate>
                    <p>Logos or names of nearby verified print shops</p>
                    <p>“Want to partner with us? → Join Now”</p>
                </div>
            </Container>
        </div>
    )
}