import React from "react";
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { FaqItem } from "./types";

export default function FaqAccordionItem({ faq }: { faq: FaqItem }) {
    return (
        <div>
            <AccordionItem
                value={faq.id}
                className="border-b border-printify-primary/10 last:border-0 overflow-hidden"
            >
                <AccordionTrigger className="text-left group py-5 px-6 hover:no-underline data-[state=open]:bg-printify-primary/5 transition-all duration-300">
                    <div className="font-medium">{faq.question}</div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2 text-printify-neutral data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 bg-printify-dark/30">
                    <div className="pl-7">
                        {faq.answer}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </div>
    );
};