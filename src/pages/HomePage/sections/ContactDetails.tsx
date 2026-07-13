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
        features={[{"title":"Head Office","icon":"MapPin","description":"Dagbitskiy Street, Samarqand, Uzbekistan"},{"icon":"Mail","description":"uniteddispatch24@gmail.com","title":"Email"},{"description":"+1 (513) 653-4606","icon":"Phone","title":"Phone"}]}
        textAnimation="slide-up"
      />
      </SectionErrorBoundary>
    </div>
  );
}