"use client";
import React, { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://formspree.io/f/xanqjjgz", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setStatus("success");
      setFormData({
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      });
    } else {
      setStatus("error");
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto rounded-lg p-1 sm:p-8 shadow-lg bg-white dark:bg-black">
      <h2 className="font-bold text-xl sm:text-2xl text-neutral-800 dark:text-neutral-200 text-center">
        Contact Us
      </h2>
      <p className="text-neutral-600 text-sm sm:text-base text-center mt-2 dark:text-neutral-300">
        We'd love to hear from you! Fill out the form below and we'll get back
        to you soon.
      </p>

      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First Name</Label>
            <Input
              id="firstname"
              placeholder="John"
              type="text"
              value={formData.firstname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last Name</Label>
            <Input
              id="lastname"
              placeholder="Doe"
              type="text"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </LabelInputContainer>
        </div>

        <LabelInputContainer>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="you@example.com"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="subject">Subject</Label>
          <Input
            id="subject"
            placeholder="Subject of your message"
            type="text"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <LabelInputContainer>
          <Label htmlFor="message">Message</Label>
          <textarea
            id="message"
            placeholder="Type your message here..."
            className="w-full border border-gray-300 dark:border-gray-600 rounded-md p-3 h-28 sm:h-32 resize-none"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </LabelInputContainer>

        <button
          className="bg-gradient-to-br relative group from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 w-full text-red-600 font-bold rounded-md h-12 shadow-md hover:opacity-90 transition"
          type="submit"
        >
          Send Message &rarr;
          <BottomGradient />
        </button>

        {status === "success" && (
          <p className="text-green-600 text-center mt-4">
            ✅ Message sent successfully!
          </p>
        )}
        {status === "error" && (
          <p className="text-red-600 text-center mt-4">
            ❌ Something went wrong. Please try again.
          </p>
        )}
      </form>
    </div>
  );
}

const BottomGradient = () => (
  <>
    <span className="group-hover:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({ children, className }) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>{children}</div>
);
