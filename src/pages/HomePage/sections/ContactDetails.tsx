import React from 'react';
import FeaturesIconCards from '@/components/sections/features/FeaturesIconCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function ContactDetailsSection(): React.JSX.Element {
  return (
    <div id="contact" data-webild-section="contact-details">
      <SectionErrorBoundary name="contact-details">
        <FeaturesIconCards
          tag="Contact Us"
          title="Get in Touch"
          description="Reach out to United Team for professional Amazon Relay dispatch services."
          features={[
            {
              icon: "MapPin",
              title: "Head Office",
              description: "Dagbitskiy Street, Samarqand, Uzbekistan"
            },
            {
              icon: "Mail",
              title: "Email",
              description: "uniteddispatch24@gmail.com"
            },
            {
              icon: "Phone",
              title: "Phone",
              description: "+1 (513) 653-4606"
            },
            {
              icon: "Instagram",
              title: "Instagram",
              description: "@ut_logistics"
            },
            {
              icon: "Send",
              title: "Telegram",
              description: "@un1tedteam"
            },
            {
              icon: "MessageCircle",
              title: "WhatsApp",
              description: "@UT1TemurIsmatov"
            }
          ]}
          textAnimation="slide-up"
        />
      </SectionErrorBoundary>
    </div>
  );
}