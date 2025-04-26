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
                className="border-b last:border-0 overflow-hidden"
            >
                <AccordionTrigger className="text-left group py-5 px-6 hover:no-underline transition-all duration-300 text-gray-500">
                    <div className="font-medium">{faq.question}</div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-2 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 text-gray-700">
                    <div className="pl-7">
                        {faq.answer}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </div>
    );
};