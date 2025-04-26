"use client";
import React from "react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Heading, Paragraph } from "@/components/ui/typography";
import { Check, Sparkles } from "lucide-react";
import { PricingOption } from "./types";

export default function PricingSlider({ options }: { options: PricingOption[] }) {
    const [selectedOption, setSelectedOption] = useState(1);
    const [pages, setPages] = useState(20);
    const [isAnimating, setIsAnimating] = useState(false);
    const [savings, setSavings] = useState(0);

    useEffect(() => {
        if (selectedOption > 0) {
            const basicCost = pages * options[0].pricePerPage;
            const currentCost = pages * options[selectedOption].pricePerPage;
            setSavings(((basicCost - currentCost) / basicCost) * 100);
        }
    }, [selectedOption, pages, options]);

    const handleOptionChange = (index: number) => {
        setIsAnimating(true);
        setSelectedOption(index);
        setTimeout(() => setIsAnimating(false), 300);
    };

    const calculatePrice = () => {
        return (pages * options[selectedOption].pricePerPage).toFixed(2);
    };

    return (
        <div className="bg-gradient-to-br from-white-800/50 to-white-900/50 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden">
            <div className="px-8 py-12 md:py-16 md:px-12">
                {/* Plan Selection */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {options.map((option, index) => (
                        <div key={index} className="relative">
                            {option.popular && (
                                <div className="absolute -top-7 left-1/2 -translate-x-1/2 whitespace-nowrap">
                                    <span className="bg-gradient-to-r from-amber-500 to-amber-300 text-transparent bg-clip-text text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                                        <Sparkles className="h-3 w-3 text-amber-400" />
                                        <span>Most Popular</span>
                                    </span>
                                </div>
                            )}
                            <Button
                                variant={selectedOption === index ? "default" : "outline"}
                                className={`px-8 py-3 ${selectedOption === index
                                    ? `bg-gradient-to-r ${option.gradient} text-white shadow-lg shadow-${option.color}/20`
                                    : "bg-transparent border-black/20 text-black hover:bg-black/10 hover:text-black"
                                    } rounded-full transition-all duration-300`}
                                onClick={() => handleOptionChange(index)}
                            >
                                {option.name}
                            </Button>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Features Section */}
                    <div
                        className={`transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                            }`}
                    >
                        <div className="mb-8">
                            <Heading level={3} color="dark" className="mb-3">
                                {options[selectedOption].name} Plan
                            </Heading>
                            <Paragraph color="dark" size="normal" >
                                {options[selectedOption].description}
                            </Paragraph>
                        </div>

                        <ul className="space-y-4">
                            {options[selectedOption].features.map((feature, index) => (
                                <li
                                    key={index}
                                    className="flex items-start"
                                    style={{
                                        animation: isAnimating ? "none" : `fadeIn 0.3s ${index * 0.1}s both`,
                                    }}
                                >
                                    <div
                                        className={`mr-3 mt-1 h-5 w-5 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r ${options[selectedOption].gradient
                                            }`}
                                    >
                                        <Check className="h-3 w-3 text-white" />
                                    </div>
                                    <span className="text-black/80">{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Calculator Section */}
                    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                        <div className="text-center mb-8">
                            <Heading level={3} color="dark" className="mb-3">
                                Calculate Your Cost
                            </Heading>
                            <Paragraph color="dark" size="normal">
                                Adjust the slider to see your total price
                            </Paragraph>
                        </div>

                        <div className="space-y-8">
                            <div>
                                <div className="flex justify-between mb-2">
                                    <span className="text-black/70">
                                        Pages: <span className="text-black font-medium">{pages}</span>
                                    </span>
                                    <span className="text-black/70">
                                        Price per page:{" "}
                                        <span className="text-black font-medium">
                                            ₹{options[selectedOption].pricePerPage.toFixed(2)}
                                        </span>
                                    </span>
                                </div>
                                <Slider
                                    value={[pages]}
                                    min={1}
                                    max={100}
                                    step={1}
                                    onValueChange={(value) => setPages(value[0])}
                                    className="py-4"
                                />
                                <div className="flex justify-between text-xs text-black/50">
                                    <span>1 page</span>
                                    <span>50 pages</span>
                                    <span>100 pages</span>
                                </div>
                            </div>

                            <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-white/70">Total Cost:</span>
                                    <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        ₹{calculatePrice()}
                                    </span>
                                </div>
                                {selectedOption > 0 && savings > 0 && (
                                    <div className="text-center mt-4 text-sm">
                                        <span className="text-emerald-400">
                                            Save up to {Math.abs(savings).toFixed(0)}% compared to basic plan
                                        </span>
                                    </div>
                                )}
                            </div>

                            <Button
                                className={`w-full py-6 bg-gradient-to-r ${options[selectedOption].gradient} hover:opacity-90 transition-opacity`}
                            >
                                Get Started with {options[selectedOption].name}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
