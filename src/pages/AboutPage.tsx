import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import FeaturesIconCards from "@/components/sections/features/FeaturesIconCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";
import NoiseBackground from "@/components/ui/NoiseBackground";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <NoiseBackground position="fixed" />
      
      <NavbarCentered
        logo="United Team"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />

      <main className="relative z-10 pt-24 pb-16 flex flex-col gap-24">
        <AboutTextSplit
          title="Built on Honesty, Transparency, and Partnership"
          descriptions={[
            "Since our founding on October 1, 2023, our mission has remained simple: deliver professional dispatch services built on honesty, transparency, and long-term partnerships.",
            "United Team is a professional Amazon Relay dispatch company providing reliable 24/7 dispatch support throughout the United States."
          ]}
          textAnimation="fade-blur"
        />

        <FeaturesIconCards
          tag="Our Specialization"
          title="Maximizing Revenue for Carriers"
          description="We specialize in maximizing revenue for carriers and owner-operators by combining our core strengths."
          features={[
            {
              icon: "📈",
              title: "Market Knowledge",
              description: "Deep understanding of freight markets to secure the best rates and keep your trucks moving profitably."
            },
            {
              icon: "🗺️",
              title: "Strategic Planning",
              description: "Optimized routing, scheduling, and load planning tailored to your specific operational needs."
            },
            {
              icon: "💬",
              title: "Exceptional Communication",
              description: "Reliable 24/7 support and transparent updates every step of the way, so you are never in the dark."
            }
          ]}
          textAnimation="slide-up"
        />

        <ContactCta
          tag="Partner With Us"
          text="Ready to maximize your revenue with a trusted dispatch partner?"
          primaryButton={{ text: "Contact Us", href: "/contact" }}
          secondaryButton={{ text: "Our Services", href: "/services" }}
          textAnimation="fade"
        />
      </main>

      <div className="relative z-10">
        <FooterSimple
          brand="United Team"
          columns={[
            {
              title: "Company",
              items: [
                { label: "About Us", href: "/about" },
                { label: "Services", href: "/services" },
                { label: "Contact", href: "/contact" }
              ]
            }
          ]}
          copyright="© 2024 United Team. All rights reserved."
          links={[
            { label: "Privacy Policy", href: "#" },
            { label: "Terms of Service", href: "#" }
          ]}
        />
      </div>
    </div>
  );
}