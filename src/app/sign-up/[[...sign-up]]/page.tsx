"use client";

import { SignUp } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#020617]">
      {/* Premium Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-purple-900/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] h-[40%] w-[40%] rounded-full bg-indigo-900/20 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10"
      >
        <SignUp
          appearance={{
            baseTheme: dark,
            elements: {
              rootBox: "mx-auto",
              card: "bg-slate-900/40 backdrop-blur-xl border border-white/10 shadow-2xl rounded-2xl overflow-hidden",
              headerTitle: "text-white text-[1.625rem] font-bold tracking-tight",
              headerSubtitle: "text-slate-400 text-[0.9375rem]",
              socialButtonsBlockButton:
                "bg-white/5 hover:bg-white/10 text-white border border-white/10 transition-all duration-200",
              socialButtonsBlockButtonText: "font-semibold text-[0.9375rem]",
              formButtonPrimary:
                "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white transition-all duration-300 shadow-lg shadow-indigo-500/25 text-[0.9375rem] font-semibold",
              formFieldInput:
                "bg-white/5 border border-white/10 text-white placeholder-slate-500 focus:border-purple-500/50 focus:ring-purple-500/20 h-11 text-[0.9375rem]",
              footerActionLink:
                "text-purple-400 hover:text-purple-300 font-semibold transition-colors text-[0.9375rem]",
              dividerLine: "bg-white/10",
              dividerText: "text-slate-500 text-[0.875rem]",
              formFieldLabel: "text-slate-300 font-semibold mb-1.5 text-[0.9375rem]",
              formFieldInputShowPasswordButton: "text-slate-400 hover:text-white",
            },
            variables: {
              colorPrimary: "#8b5cf6",
              colorBackground: "transparent",
              colorText: "white",
              colorTextSecondary: "#94a3b8",
              borderRadius: "0.75rem",
              fontSize: "0.9375rem", // Increased base font size
            },
          }}
        />
      </motion.div>
    </div>
  );
}