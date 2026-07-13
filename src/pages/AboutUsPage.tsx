import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import AboutParallaxHighlight from "@/components/sections/about/AboutParallaxHighlight";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import TeamProfileCards from "@/components/sections/team/TeamProfileCards";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />

      <main className="flex-grow">
        <AboutParallaxHighlight
          tag="Our Story"
          title="Building the future of"
          titleHighlight="digital experiences"
          description="We are a team of passionate creators, engineers, and designers dedicated to crafting exceptional software that empowers businesses to thrive in the modern era. We believe in the power of technology to transform ideas into reality."
          primaryButton={{ text: "Join Our Team", href: "/careers" }}
          secondaryButton={{ text: "View Our Work", href: "/portfolio" }}
          frontImageSrc="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
          backImageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
          textAnimation="fade-blur"
        />

        <AboutFeaturesSplit
          tag="Core Values"
          title="What drives us forward"
          description="Our principles guide every decision we make and every line of code we write. We are committed to delivering excellence through our core values."
          items={[
            {
              icon: "🚀",
              title: "Innovation",
              description: "We constantly push boundaries to find better, more efficient solutions for complex problems."
            },
            {
              icon: "🤝",
              title: "Empathy",
              description: "We build for humans, prioritizing user experience and accessibility above all else."
            },
            {
              icon: "🛡️",
              title: "Integrity",
              description: "We operate with transparency and honesty in all our partnerships and client relationships."
            }
          ]}
          imageSrc="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80"
          textAnimation="slide-up"
        />

        <TeamProfileCards
          tag="Leadership"
          title="Meet the minds behind the magic"
          description="A diverse group of industry veterans committed to excellence and driving our vision forward."
          items={[
            {
              title: "Jane Doe",
              description: "CEO & Founder",
              avatarSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80"
            },
            {
              title: "John Smith",
              description: "Chief Technology Officer",
              avatarSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            },
            {
              title: "Alice Johnson",
              description: "Head of Design",
              avatarSrc: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80"
            }
          ]}
          textAnimation="fade"
        />
      </main>

      <FooterSimple
        brand="Webild"
        columns={[
          {
            title: "Company",
            items: [
              { label: "About Us", href: "/about-us" },
              { label: "Careers", href: "/careers" },
              { label: "Contact", href: "/contact" }
            ]
          },
          {
            title: "Resources",
            items: [
              { label: "Blog", href: "/blog" },
              { label: "Documentation", href: "/docs" },
              { label: "Help Center", href: "/help" }
            ]
          }
        ]}
        copyright="© 2024 Webild Inc. All rights reserved."
        links={[
          { label: "Privacy Policy", href: "/privacy" },
          { label: "Terms of Service", href: "/terms" }
        ]}
      />
    </div>
  );
}