"use client";

import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Mail, Github, Twitter, Linkedin } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-lg mb-8">
            Interested in working together or have a question? Feel free to reach
            out!
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>

        <div className="space-y-4">
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${personalInfo.email}&su=Let's%20Work%20Together&body=Hi%20Idderf,%0D%0A%0D%0AI%20found%20your%20portfolio%20and%20I'd%20like%20to%20discuss...`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="w-full sm:w-auto">
              <Mail className="mr-2 h-5 w-5" />
              Email Me: {personalInfo.email}
            </Button>
          </a>

          <div className="flex gap-4 justify-center pt-4">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
            >
              <a
                href={personalInfo.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="mr-2 h-5 w-5" />
                Twitter/X
              </a>
            </Button>
          </div>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
