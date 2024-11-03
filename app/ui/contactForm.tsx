// app/ContactForm.tsx
"use client";

import { div } from "framer-motion/client";
import { useState } from "react";
import React from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus("sent");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col font-inria space-y-8 text-white w-[40rem]"
    >
      <h2 className="text-left text-3xl font-comfortaa font-bold text-white">
        Contact Me!
      </h2>
      <div>
        <p className="text-left font-inria mb-4">Your name*</p>
        <input
          className="p-4 w-[40rem] h-12 bg-transparent border-white border-2 rounded-xl font-inria font-normal"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />
      </div>
      <div>
        <p className="text-left font-inria mb-4">Your email*</p>
        <input
          className="p-4 w-[40rem] h-12 bg-transparent border-white border-2 rounded-xl font-inria font-normal"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your Email"
          required
        />
      </div>
      <div>
        <p className="text-left font-inria mb-4">Your message*</p>
        <textarea
          className=" p-4 w-[40rem] h-56 bg-transparent border-white border-2 rounded-xl font-inria text-md font-normal"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
        />
      </div>
      <button
        className="bg-white text-black p-2 rounded-xl font-inria font-normal"
        type="submit"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      {status === "sent" && <p>Message sent!</p>}
      {status === "error" && <p>Error sending message.</p>}
    </form>
  );
};

export default ContactForm;
