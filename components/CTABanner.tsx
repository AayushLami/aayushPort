"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";

export function CTABanner() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // Modal form states
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/\D/g, "");
    // Cap at 10 digits
    if (value.length <= 10) {
      setPhone(value);
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setErrors((prev) => ({ ...prev, email: undefined }));
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setErrors((prev) => ({ ...prev, name: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};

    if (!name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (phone.length < 10) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Post data to Next.js API route
    fetch("/api/demo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, website }),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok && data.success) {
          setSubmitted(true);
          setTimeout(() => {
            setIsOpen(false);
            setSubmitted(false);
            setName("");
            setEmail("");
            setPhone("");
            setWebsite("");
            setErrors({});
          }, 3500);
        } else {
          setErrors({ email: data.error || "Failed to submit request." });
        }
      })
      .catch(() => {
        setErrors({ email: "An error occurred. Please try again later." });
      });
  };

  return (
    <section
      id="contact"
      className="py-32 px-6 bg-[#111111] flex flex-col items-center text-center"
    >
      <div
        ref={ref}
        className="max-w-3xl mx-auto flex flex-col items-center text-center gap-6"
      >
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight"
        >
          Ready to rank?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#9ca3af] text-base sm:text-lg max-w-md"
        >
          Let&apos;s build something that actually works for your business.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              onClick={() => setIsOpen(true)}
              variant="ctaPrimary"
              size="lg"
              className="min-w-[200px]"
            >
              Book a Demo
            </Button>
            <Button
              href="tel:9083386832"
              variant="ctaSecondary"
              size="lg"
              className="min-w-[200px]"
            >
              Call 908-338-6832
            </Button>
          </div>
          <p className="text-xs text-[#6b7280]">
            No commitment. 15 minutes. Real advice.
          </p>
        </motion.div>
      </div>

      {/* Book a Demo Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm px-6"
          >
            {/* Backdrop click to close */}
            <div className="absolute inset-0" onClick={() => setIsOpen(false)} />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 16 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative z-10 w-full max-w-md bg-[#111111] border border-white/10 rounded-xl p-8 flex flex-col gap-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
                aria-label="Close modal"
              >
                <X size={18} />
              </button>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center justify-center text-center py-10 gap-4"
                >
                  <div className="w-12 h-12 border border-white/20 bg-white/5 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <h3 className="font-heading text-xl font-bold text-white">
                    Request Received!
                  </h3>
                  <p className="text-sm text-[#888888] max-w-[280px]">
                    Thanks, {name}. I will call or email you within the next 24 hours.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="flex flex-col gap-1.5">
                    <h3 className="font-heading text-2xl font-bold text-white">
                      Book a Demo
                    </h3>
                    <p className="text-xs text-[#888888]">
                      Enter your details below to schedule a fast, 15-minute walkthrough.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-bold tracking-wider uppercase text-[#888888]">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={handleNameChange}
                        placeholder="John Doe"
                        className="bg-black border border-white/10 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors duration-200"
                        required
                      />
                      {errors.name && (
                        <span className="text-xs text-red-500">{errors.name}</span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-bold tracking-wider uppercase text-[#888888]">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="john@example.com"
                        className="bg-black border border-white/10 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors duration-200"
                        required
                      />
                      {errors.email && (
                        <span className="text-xs text-red-500">{errors.email}</span>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] font-bold tracking-wider uppercase text-[#888888]">
                        Phone Number (10 digits)
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="9083386832"
                        className="bg-black border border-white/10 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors duration-200 font-mono"
                        required
                      />
                      {errors.phone && (
                        <span className="text-xs text-red-500">{errors.phone}</span>
                      )}
                    </div>

                    {/* Website */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="website" className="text-[10px] font-bold tracking-wider uppercase text-[#888888]">
                        Current Website (Optional)
                      </label>
                      <input
                        type="text"
                        id="website"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        placeholder="yourbusiness.com"
                        className="bg-black border border-white/10 px-4 py-3 text-sm text-white focus:border-white focus:outline-none transition-colors duration-200"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button type="submit" variant="primary" className="mt-2 w-full justify-center">
                      Submit Request
                    </Button>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
