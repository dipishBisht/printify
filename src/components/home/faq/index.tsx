"use client";
import React from 'react';
import { Heading, Paragraph, SubHeading } from '@/components/ui/typography';
import Animate from '@/components/ui/animate';
import { faqItems } from './data';
import { Accordion } from '@/components/ui/accordion';
import FaqAccordionItem from './FaqItem';
import { MessageCircleQuestion } from 'lucide-react';

export default function FaqSection() {

    return (
        <div className="relative mt-28">
            <div className="flex flex-col gap-2 items-center mb-6">
                <Animate delay={300} className="flex flex-col items-center gap-2">
                    <SubHeading color='dark' icon={<MessageCircleQuestion className="w-4 h-4 text-purple-400" />}>Have Any Questions</SubHeading>
                    <Heading color='dark' level={2}>Frequently Ask Questions</Heading>
                </Animate>
                <Paragraph color='dark' size='normal'>
                    Find answers to commonly asked questions about our printing services and platform.
                </Paragraph>
            </div>
            <div
                className="max-w-4xl mx-auto backdrop-blur-sm rounded-xl shadow overflow-hidden">
                <Accordion type="single" collapsible className="w-full">
                    <div>
                        {
                            faqItems.map((item) => (
                                <FaqAccordionItem
                                    key={item.id}
                                    faq={item}
                                />
                            ))
                        }
                    </div>
                </Accordion>
            </div>
        </div>
    );
};
