"use client";

import { useState } from "react";
import { GlassCard } from "@/components/ui/GlassCard";
import { PrimaryCTA } from "@/components/ui/PrimaryCTA";

export default function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6">
      <GlassCard className="w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold mb-2">
            {isLogin ? "Welcome Back" : "Create Account"}
          </h1>
          <p className="text-foreground/60 text-sm">
            {isLogin 
              ? "Enter your details to access your account." 
              : "Sign up to start shopping premium products."}
          </p>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 rounded-lg border border-foreground/10 bg-background/50 focus:outline-none focus:border-primary transition-colors"
                placeholder="John Doe"
              />
            </div>
          )}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input 
              type="email" 
              className="w-full px-4 py-2 rounded-lg border border-foreground/10 bg-background/50 focus:outline-none focus:border-primary transition-colors"
              placeholder="john@example.com"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input 
              type="password" 
              className="w-full px-4 py-2 rounded-lg border border-foreground/10 bg-background/50 focus:outline-none focus:border-primary transition-colors"
              placeholder="••••••••"
            />
          </div>
          
          <PrimaryCTA className="w-full mt-6 py-3">
            {isLogin ? "Sign In" : "Sign Up"}
          </PrimaryCTA>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-foreground/60">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
          </span>
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="font-semibold hover:underline"
          >
            {isLogin ? "Sign Up" : "Sign In"}
          </button>
        </div>
      </GlassCard>
    </div>
  );
}
