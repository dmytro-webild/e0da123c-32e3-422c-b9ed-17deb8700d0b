import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Team",
    "href": "#team"
  },
  {
    "name": "Partners",
    "href": "#partners"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Features",
    "href": "#features"
  }
];

  return (
    <StyleProvider buttonVariant="default" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="United Team"
      logoImageSrc="https://picsum.photos/seed/logoimagesrc/800/600"
      ctaButton={{
        text: "Contact Us",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleMedia
      brand="United Team"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Services",
              href: "#services",
            },
            {
              label: "Contact",
              href: "#contact",
            },
          ],
        },
        {
          title: "Legal",
          items: [
            {
              label: "Privacy Policy",
              href: "#",
            },
            {
              label: "Terms of Service",
              href: "#",
            },
          ],
        },
        {
          title: "Social",
          items: [
            {
              label: "Instagram",
              href: "#",
            },
            {
              label: "Telegram",
              href: "#",
            },
            {
              label: "WhatsApp",
              href: "#",
            },
          ],
        },
      ]}
      copyright="© 2026 United Team. All Rights Reserved."
      links={[
        {
          label: "Privacy",
          href: "#",
        },
        {
          label: "Terms",
          href: "#",
        },
      ]}
      imageSrc="https://storage.googleapis.com/webild/users/user_3GRpdvQoJFjolu5kC3kYNdQAvbt/uploaded-1783945575306-8wuf5v5s.png"
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
