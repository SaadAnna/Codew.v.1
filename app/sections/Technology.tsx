/* eslint-disable jsx-a11y/alt-text */
"use client";
import csslogo from "@/public/csslogo.png";
import htmllogo from "@/public/htmllogo.png";
import jslogo from "@/public/javascriptlogo.png";
import reactlogo from "@/public/reactlogo.png";
import tailwindlogo from "@/public/tailwindcss.png";
import pythonlogo from "@/public/pythonlogo.png";
import npmlogo from "@/public/npmlogo.png";
import vscode from "@/public/vscode.png";
import { motion } from "framer-motion";
import gitlogo from "@/public/gitlogo.png";
import githublogo from "@/public/githublogo.png";
export const Technology = () => {
  return (
    <section className="py-20">
      <div className="px-4 md:px-0 lg:max-w-4xl max-w-4xl mx-auto">
      <div className="flex items-center gap-5">
      <h2 className="text-white font-medium lg:text-3xl text-xl">
      Our Technology
      </h2>
          <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
            <motion.div
              initial={{ translateX: "-50%" }}
              animate={{ translateX: "0" }}
              transition={{
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              }}
              className="flex flex-none gap-14 pr-14 -translate-x-1/2 "
            >
              {[
                csslogo,
                htmllogo,
                jslogo,
                reactlogo,
                pythonlogo,
                tailwindlogo,
                githublogo,
                npmlogo,
                vscode,
                gitlogo,
                csslogo,
                htmllogo,
                jslogo,
                reactlogo,
                pythonlogo,
                tailwindlogo,
                githublogo,
                npmlogo,
                vscode,
                gitlogo,                
              ].map((logo) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={logo.src} key={logo.src} className="h-16 lg:h-24 w-auto border border-white/10 rounded-lg bg-neutral-900 px-10 py-5" />
              ))}
            </motion.div>
          </div>
        </div>
        
      </div>
    </section>
  );
};