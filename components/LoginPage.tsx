import React, { useEffect, useState } from 'react';
import { ArrowRight, Mail, Lock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row relative overflow-hidden bg-[#0F0C29]">

            {/* Dynamic Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#BB3DF6]/20 rounded-full blur-[100px] animate-blob" />
                <div className="absolute top-[40%] right-[-10%] w-[400px] h-[400px] bg-[#008CFF]/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-[#FF3A81]/15 rounded-full blur-[120px] animate-blob animation-delay-4000" />

                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
            </div>

            {/* Left Panel - Brand & Manifesto (Desktop: Left, Mobile: Top) */}
            <div className={`w-full lg:w-1/2 p-6 md:p-12 lg:p-20 flex flex-col justify-center relative z-10 transition-all duration-1000 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="max-w-xl mx-auto lg:mx-0 space-y-6 md:space-y-10 text-center lg:text-left mt-8 lg:mt-0">

                    {/* Logo/Brand Header */}
                    <div className="space-y-3">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4 lg:mb-0">
                            <Sparkles className="w-4 h-4 text-[#BB3DF6]" />
                            <span className="text-xs font-medium text-white/80 tracking-wider uppercase">The Alignment Platform</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white drop-shadow-lg">
                            Elinity
                        </h1>
                        <p className="text-xl md:text-2xl text-transparent bg-clip-text bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] font-light tracking-wide">
                            Purpose. Mission. Vocation.
                        </p>
                    </div>

                    {/* Mobile-Optimized Content */}
                    <div className="hidden md:block space-y-8 text-white/70 leading-relaxed text-lg">
                        <p>
                            In a post-AGI world, <strong className="text-white">human essence</strong> is the only scarcity.
                            We connect you with missions that resonate with your deepest calling.
                        </p>

                        <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                            {[
                                'Mission Fit', 'Values', 'Leadership Energy', 'Cultural Tone',
                                'Purpose', 'Calling', 'Traits', 'Meaning'
                            ].map((item, i) => (
                                <span
                                    key={item}
                                    className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 hover:border-[#BB3DF6]/50 transition-all duration-300 cursor-default"
                                    style={{ transitionDelay: `${i * 50}ms` }}
                                >
                                    {item}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Right Panel - Login Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-4 md:p-12 relative z-20">
                <div className={`w-full max-w-md relative transition-all duration-1000 delay-300 transform ${mounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

                    {/* Glass Card */}
                    <div className="bg-[#191934]/40 backdrop-blur-2xl border border-white/10 rounded-[2rem] p-8 md:p-10 shadow-[0_0_40px_rgba(0,0,0,0.3)] relative overflow-hidden group">

                        {/* Subtle Gradient Border Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#BB3DF6]/10 via-transparent to-[#FF3A81]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="text-center mb-8 relative">
                            <h2 className="text-3xl font-bold text-white mb-2">Welcome Back</h2>
                            <p className="text-white/50">Sign in to access your dashboard</p>
                        </div>

                        <form className="space-y-5 relative" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label className="text-xs font-semibold text-white/60 ml-1 uppercase tracking-wider">Email</label>
                                <div className="relative group/input">
                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                        <Mail className="w-5 h-5 text-white/40 group-focus-within/input:text-[#BB3DF6] transition-colors duration-300" />
                                    </div>
                                    <input
                                        type="email"
                                        placeholder="you@example.com"
                                        className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#BB3DF6] focus:ring-1 focus:ring-[#BB3DF6] transition-all duration-300 shadow-inner"
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
                                        placeholder="••••••••"
                                        className="w-full bg-[#0F0C29]/60 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#BB3DF6] focus:ring-1 focus:ring-[#BB3DF6] transition-all duration-300 shadow-inner"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between text-sm pt-2">
                                <label className="flex items-center gap-2 cursor-pointer group/check">
                                    <div className="relative">
                                        <input type="checkbox" className="peer sr-only" />
                                        <div className="w-5 h-5 rounded border border-white/20 bg-transparent peer-checked:bg-[#BB3DF6] peer-checked:border-[#BB3DF6] transition-all flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12"></polyline>
                                            </svg>
                                        </div>
                                    </div>
                                    <span className="text-white/60 group-hover/check:text-white/80 transition-colors">Remember me</span>
                                </label>
                                <a href="#" className="text-[#BB3DF6] hover:text-[#FF3A81] transition-colors font-medium">Forgot password?</a>
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#BB3DF6] to-[#FF3A81] text-white font-bold py-4 rounded-xl shadow-[0_0_20px_rgba(187,61,246,0.3)] hover:shadow-[0_0_30px_rgba(187,61,246,0.5)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn mt-6 relative overflow-hidden">
                                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 rounded-xl" />
                                <span className="relative z-10">Sign In</span>
                                <ArrowRight className="w-5 h-5 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
                            </button>
                        </form>

                        <div className="mt-8 text-center relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-white/10"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-[#16162c] text-white/40 rounded-full">Or continue with</span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-2 gap-4">
                            <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm text-white/80 font-medium">
                                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" /></svg>
                                Google
                            </button>
                            <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-sm text-white/80 font-medium">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
                                Facebook
                            </button>
                        </div>

                        <div className="mt-8 text-center">
                            <p className="text-white/40 text-sm">
                                Don't have an account?{' '}
                                <Link to="/signup" className="text-white hover:text-[#BB3DF6] transition-colors font-medium underline decoration-transparent hover:decoration-[#BB3DF6] underline-offset-4">Create an account</Link>
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
