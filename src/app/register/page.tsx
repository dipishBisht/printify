"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Link from 'next/link';
import { register } from '@/lib/api';
import { useRouter } from 'next/navigation';

const Register: React.FC = () => {
    const [email, setEmail] = useState('');
    const [fullName, setFullName] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [nameError, setNameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [formError, setFormError] = useState('');
    const [loading, setLoading] = useState(false);
    const [passwordStrength, setPasswordStrength] = useState(0);

    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken")
        if (token)
            router.push("/")
    }, [])

    const validateForm = () => {
        let isValid = true;

        if (!email) {
            setEmailError('Email is required');
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Please enter a valid email address');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (!fullName) {
            setNameError('Full name is required');
            isValid = false;
        } else {
            setNameError('');
        }

        if (!password) {
            setPasswordError('Password is required');
            isValid = false;
        } else if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters');
            isValid = false;
        } else {
            setPasswordError('');
        }

        return isValid;
    };

    const checkPasswordStrength = (password: string) => {
        if (!password) {
            setPasswordStrength(0);
            return;
        }

        let strength = 0;
        if (password.length >= 8) strength += 1;
        if (password.length >= 12) strength += 1;
        if (/[A-Z]/.test(password)) strength += 1;
        if (/[a-z]/.test(password)) strength += 1;
        if (/[0-9]/.test(password)) strength += 1;
        if (/[^A-Za-z0-9]/.test(password)) strength += 1;

        setPasswordStrength(Math.min(strength, 4));
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordStrength(newPassword);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setLoading(true);
        setFormError('');

        try {
            const { user, token } = await register(fullName, email, password);
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('user', JSON.stringify(user));
            router.push("/");

        } catch (err) {
            if (err instanceof Error) {
                setFormError(err.message);
            } else {
                setFormError("An unexpected error occurred");
            }
        } finally {
            setLoading(false);
        }
    };


    const strengthLabels = ['Very weak', 'Weak', 'Medium', 'Strong', 'Very strong'];
    const strengthColors = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-400', 'bg-green-600'];

    return (
        <div className="p-8 max-w-md mx-auto border rounded-lg space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">Create your account</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email address</label>
                    <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@example.com"
                    />
                    {emailError && <p className="text-sm text-red-600 mt-1">{emailError}</p>}
                </div>

                <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full name</label>
                    <Input
                        id="fullName"
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="John Doe"
                    />
                    {nameError && <p className="text-sm text-red-600 mt-1">{nameError}</p>}
                </div>

                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                    <Input
                        id="password"
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        placeholder="••••••••"
                    />
                    {passwordError && <p className="text-sm text-red-600 mt-1">{passwordError}</p>}

                    {password && (
                        <div className="mt-2">
                            <div className="flex h-1 mb-1">
                                {[0, 1, 2, 3].map((index) => (
                                    <div
                                        key={index}
                                        className={`h-full flex-1 mx-0.5 rounded-full ${index < passwordStrength ? strengthColors[passwordStrength - 1] : 'bg-gray-200'
                                            }`}
                                    ></div>
                                ))}
                            </div>
                            <p className="text-xs text-gray-500">
                                {passwordStrength > 0 ? strengthLabels[passwordStrength] : ''}
                            </p>
                        </div>
                    )}
                </div>

                {formError && (
                    <div className="text-sm text-red-600 bg-red-50 px-4 py-2 rounded-md">
                        {formError}
                    </div>
                )}

                <Button type="submit" disabled={loading} className="w-full">
                    {loading ? 'Creating account...' : 'Create account'}
                </Button>

                <div className="text-center text-sm text-gray-600 mt-4">
                    By creating an account, you agree to our{' '}
                    <a href="#" className="text-purple-600 hover:underline font-medium">Terms of Service</a> and{' '}
                    <a href="#" className="text-purple-600 hover:underline font-medium">Privacy Policy</a>.
                </div>
            </form>

            <div className="text-center text-gray-600 text-sm">
                Already have an account?{' '}
                <Link href="/login" className="text-purple-600 hover:underline font-medium">
                    Sign in
                </Link>
            </div>
        </div>
    );
};

export default Register;
