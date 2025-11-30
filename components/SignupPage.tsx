import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail, Lock, User, Link as LinkIcon, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row relative overflow-hidden bg-[#0F0C29]">

            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#BB3DF6]/20 rounded-full blur-[100px] animate-blob" />
                <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-[#008CFF]/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute top-[40%] right-[20%] w-[600px] h-[600px] bg-[#FF3A81]/15 rounded-full blur-[120px] animate-blob animation-delay-4000" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            {/* Left Panel - Brand & Vision (Desktop: Left, Mobile: Top) */}
            <div className={`w-full lg:w-1/2 p-6 md:p-12 lg:p-20 flex flex-col justify-center relative z-10 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="max-w-xl mx-auto lg:mx-0 space-y-6 md:space-y-10 text-center lg:text-left mt-8 lg:mt-0">

                    {/* Logo/Brand Header */}
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 lg:mb-0">
                            <Sparkles className="w-4 h-4 text-[#BB3DF6]" />
                            <span className="text-xs font-medium text-white/80 tracking-wider uppercase">Join the Future of Work</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
                            Find Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81]">True Calling</span>
                        </h1>
                    </div>

                    {/* Mobile-Optimized Content */}
                    <div className="hidden md:block space-y-8 text-white/70 leading-relaxed text-lg">
                        <p>
                            Join the exclusive network where <strong className="text-white">human potential</strong> meets mission-critical alignment.
                            Stop searching for jobs. Start fulfilling your purpose.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#BB3DF6]">
                                    <User size={24} />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-white font-semibold">Deep Profiling</h3>
                                    <p className="text-sm text-white/50">Uncover your vocational archetype</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#FF3A81]">
                                    <LinkIcon size={24} />
                                </div>
                                <div className="text-left">
                                    <h3 className="text-white font-semibold">Perfect Alignment</h3>
                                    <p className="text-sm text-white/50">Match with missions, not just roles</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel - Signup Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-12 relative z-20">
                <div className={`w-full max-w-md relative transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                    {/* Glass Card */}
                    <div className="bg-[#191934]/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden group">

                        {/* Subtle Gradient Border Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#BB3DF6]/10 via-transparent to-[#FF3A81]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="text-center mb-8 relative">
                            <h2 className="text-3xl font-bold text-white mb-2">Create Account</h2>
                            <p className="text-white/50">Join Elinity to find your calling</p>
                        </div>

                        <form className="space-y-4 relative" onSubmit={(e) => e.preventDefault()}>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-white/60 ml-1 uppercase tracking-wider">First Name</label>
                                    <input
                                        type="text"
                                        placeholder="Jane"
                                        className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#BB3DF6] focus:ring-1 focus:ring-[#BB3DF6] transition-all duration-300 shadow-inner"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-semibold text-white/60 ml-1 uppercase tracking-wider">Last Name</label>
                                    <input
                                        type="text"
                                        placeholder="Doe"
                                        className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-3.5 px-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#BB3DF6] focus:ring-1 focus:ring-[#BB3DF6] transition-all duration-300 shadow-inner"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-white/60 ml-1 uppercase tracking-wider">Email</label>
                                <div className="relative group/input">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="w-5 h-5 text-white/40 group-focus-within/input:text-[#BB3DF6] transition-colors duration-300" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#BB3DF6] focus:ring-1 focus:ring-[#BB3DF6] transition-all duration-300 shadow-inner"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-white/60 ml-1 uppercase tracking-wider">Password</label>
                                <div className="relative group/input">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Lock className="w-5 h-5 text-white/40 group-focus-within/input:text-[#BB3DF6] transition-colors duration-300" />
                                    </div>
                                    <input
                                        type="password"
                                        placeholder="Create a strong password"
                                        className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#BB3DF6] focus:ring-1 focus:ring-[#BB3DF6] transition-all duration-300 shadow-inner"
                                    />
                                </div>
                            </div>

                            <div className="pt-2">
                                <button className="w-full bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(187,61,246,0.3)] hover:shadow-[0_0_30px_rgba(187,61,246,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn relative overflow-hidden">
                                    <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 rounded-xl" />
                                    <span className="relative z-10">Create Account</span>
                                    <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>

                        <div className="mt-8 text-center relative">
                            <p className="text-white/40 text-sm">
                                Already have an account?{' '}
                                <Link to="/login" className="text-white hover:text-[#BB3DF6] transition-colors font-medium underline decoration-transparent hover:decoration-[#BB3DF6] underline-offset-4">
                                    Sign in
                                </Link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
