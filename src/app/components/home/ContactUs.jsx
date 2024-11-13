"use client"

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const ContactUs = () => {
  const { toast } = useToast();
  const containerRef = useRef(null);
  const imageRef = useRef(null);  // Reference for the image
  const [open, setOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const isInView = useInView(containerRef, { 
    once: true,
    amount: 0.2 
  });

  const imageInView = useInView(imageRef, {  // Check if image is in view
    once: false,   // Allow repeated fades
    amount: 0.5    // Trigger at 50% visibility
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using server API route
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'hello@indomite.com',
          subject: `New Contact Form Submission from ${formData.name}`,
          text: `
            Name: ${formData.name}
            Email: ${formData.email}
            Phone: ${formData.phone}
            Message: ${formData.message}
          `
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      // Show success message
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
        duration: 5000,
      });

      // Reset form and close dialog
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
      setOpen(false);
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  
  const buttonVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2
      }
    }
  };


  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1.5, ease: "easeOut" } },
    fadeOut: { opacity: 0, scale: 0.95, transition: { duration: 1.5, ease: "easeIn" } }
  };

  return (
    <motion.div 
      ref={containerRef}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="max-w-8xl bg-white text-black mx-auto px-6 py-16 text-center"
    >
      <motion.h1 
        variants={fadeUpVariants}
        className="text-5xl md:text-7xl mb-8"
      >
        Intimate Weddings By Fave
      </motion.h1>
      
      <motion.div 
        ref={imageRef}  // Attach ref to monitor view status
        variants={imageVariants}
        animate={imageInView ? "visible" : "fadeOut"}  // Apply fade-out when out of view
        className="mb-8 flex justify-center"
      >
        <div className="relative">
          <Image
            src="/assets/images/woman.png"
            alt="Wedding Photographer"
            className="object-contain"
            width={600}
            height={800}
          />
        </div>
      </motion.div>

      <motion.p 
        variants={fadeUpVariants}
        className="text-gray-700 max-w-5xl mx-auto text-2xl leading-relaxed mb-8 text-center"
      >
        I&apos;ve always been enchanted by destination weddings, but I have realised they can 
        feel out of reach unless you actually travel to the country. I wanted to break away 
        from the typical Lagos wedding scene and offer something different. I wanted 
        couples to experience their special day in new and magical ways, like a fairy tale 
        come to life. That&apos;s why I started intimate weddings by Fave
      </motion.p>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <motion.button 
            variants={buttonVariants}
            whileHover="hover"
            className="bg-[#0A341F] text-white px-6 py-2 rounded-3xl hover:bg-green-800 transition-colors"
          >
            Contact us
          </motion.button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-md ">
          <DialogHeader>
            <DialogTitle className="text-2xl mb-4">Get in Touch</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your email"
                className="w-full"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Your phone number"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your message"
                className="w-full"
                required
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#0A341F] text-white px-6 py-2 rounded-3xl hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </motion.div>
  );
};

export default ContactUs;
