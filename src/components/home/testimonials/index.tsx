"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Star, ChevronLeft, ChevronRight, User, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface Testimonial {
    id: number;
    name: string;
    avatar?: string;
    role: string;
    rating: number;
    comment: string;
    date: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Alex Johnson",
        avatar: "AJ",
        role: "Engineering Student",
        rating: 5,
        comment: "Printify has been a game-changer for my engineering projects. I upload my CAD drawings in the morning and pick them up perfectly printed the same day.",
        date: "March 10, 2023"
    },
    {
        id: 2,
        name: "Sophia Chen",
        avatar: "SC",
        role: "Medical Student",
        rating: 5,
        comment: "I love how easy it is to print my medical study materials. The app lets me schedule pickups between classes, saving me so much time.",
        date: "February 23, 2023"
    },
    {
        id: 3,
        name: "Marcus Taylor",
        avatar: "MT",
        role: "Law Student",
        rating: 4,
        comment: "As a law student, I'm constantly printing case studies. Printify's partner shops always deliver high-quality prints with reliable binding options.",
        date: "April 5, 2023"
    },
    {
        id: 4,
        name: "Olivia Rodriguez",
        avatar: "OR",
        role: "Design Student",
        rating: 5,
        comment: "The color accuracy of my design prints is amazing! I can count on consistent quality every time, which is crucial for my portfolio work.",
        date: "January 17, 2023"
    },
    {
        id: 5,
        name: "Jamal Washington",
        avatar: "JW",
        role: "Business Student",
        rating: 4,
        comment: "Quick, convenient, and reliable. I use Printify for all my business school presentations and group projects.",
        date: "May 2, 2023"
    }
];

const TestimonialCard: React.FC<{
    testimonial: Testimonial;
    isActive: boolean;
    direction: number;
}> = ({ testimonial}) => {

    return (
        <div className="absolute top-0 left-0 right-0 w-full">
            <Card className="glass-card overflow-hidden border-printify-primary/10 bg-gradient-to-br from-printify-dark/90 to-printify-dark/70 shadow-lg">
                <CardContent className="p-8 flex flex-col md:flex-row gap-6 items-center">
                    <div className="flex-shrink-0 flex flex-col items-center">
                        <Avatar className="h-20 w-20 border-4 border-printify-primary/20 shadow-lg shadow-printify-primary/10">
                            {testimonial.avatar ? (
                                <AvatarImage src={`/avatars/${testimonial.avatar.toLowerCase()}.jpg`} alt={testimonial.name} />
                            ) : null}
                            <AvatarFallback className="bg-printify-primary/20 text-printify-primary text-xl">
                                {testimonial.avatar}
                            </AvatarFallback>
                        </Avatar>
                        <div className="mt-4 mb-2 flex">
                            {[...Array(5)].map((_, i) => (
                                <Star
                                    key={i}
                                    size={16}
                                    className={cn(
                                        i < testimonial.rating
                                            ? "text-amber-400 fill-current"
                                            : "text-gray-600"
                                    )}
                                />
                            ))}
                        </div>
                        <p className="text-xs text-printify-neutral">{testimonial.date}</p>
                    </div>

                    <div className="flex-grow">
                        <div className="relative">
                            <Quote className="absolute -left-1 -top-1 text-printify-primary/30 h-8 w-8" />
                            <p className="text-lg text-gray-200 pl-7 pt-2 leading-relaxed italic">&quot;{testimonial.comment}&quot;</p>
                        </div>

                        <div className="mt-6 flex items-center gap-2">
                            <div className="w-10 h-1 bg-printify-primary/40 rounded-full"></div>
                            <div>
                                <p className="font-bold text-white">{testimonial.name}</p>
                                <p className="text-sm text-printify-neutral">{testimonial.role}</p>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export const TestimonialsSection: React.FC = () => {
    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
    const [isPaused, setIsPaused] = useState(false);

    const paginate = useCallback((newDirection: number) => {
        const nextIndex = (currentIndex + newDirection + testimonials.length) % testimonials.length;
        setCurrentIndex([nextIndex, newDirection]);
    }, [currentIndex]);

    // Auto-scroll functionality
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            paginate(1);
        }, 5000);

        return () => clearInterval(interval);
    }, [isPaused, paginate]);

    return (
        <section id="testimonials" className="section-container relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-20 -left-16 w-64 h-64 rounded-full bg-printify-primary/5 blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-40 -right-20 w-96 h-96 rounded-full bg-printify-primary/5 blur-3xl pointer-events-none"></div>

            <div className="relative z-10">
                <div className="flex flex-col items-center mb-8">
                    <div className="w-16 h-16 rounded-full bg-printify-primary/10 flex items-center justify-center mb-4 border border-printify-primary/20">
                        <User className="text-printify-primary" size={28} />
                    </div>
                    <h2 className="section-title mb-1">Student Stories</h2>
                    <div className="w-20 h-1 bg-printify-primary/30 rounded-full mb-4"></div>
                    <p className="section-subtitle max-w-2xl">
                        Discover how students across campus are using Printify to simplify their academic printing needs.
                    </p>
                </div>

                <div className="relative h-[280px] sm:h-[240px] md:h-[200px] max-w-4xl mx-auto my-16"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}>
                    <div>
                        <TestimonialCard
                            key={currentIndex}
                            testimonial={testimonials[currentIndex]}
                            isActive={true}
                            direction={direction}
                        />
                    </div>
                </div>

                <div className="flex justify-center items-center gap-4">
                    <button
                        onClick={() => paginate(-1)}
                        className="p-3 rounded-full bg-printify-dark hover:bg-printify-primary/80 text-white transition-colors border border-printify-primary/20 shadow-lg shadow-printify-primary/5"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    <div className="flex items-center gap-2">
                        {testimonials.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrentIndex([i, i > currentIndex ? 1 : -1])}
                                className={cn(
                                    "transition-all duration-300",
                                    i === currentIndex
                                        ? "w-12 h-3 bg-printify-primary rounded-full"
                                        : "w-3 h-3 bg-printify-primary/30 rounded-full hover:bg-printify-primary/50"
                                )}
                                aria-label={`Go to testimonial ${i + 1}`}
                            />
                        ))}
                    </div>

                    <button
                        onClick={() => paginate(1)}
                        className="p-3 rounded-full bg-printify-dark hover:bg-printify-primary/80 text-white transition-colors border border-printify-primary/20 shadow-lg shadow-printify-primary/5"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight size={20} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;