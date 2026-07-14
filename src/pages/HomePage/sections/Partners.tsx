import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';

export default function PartnersSection() {
  return (
    <div data-webild-section="partners" id="partners">
      <SocialProofMarquee
        tag="Partners"
        title="Our Carrier Partners"
        description="We collaborate with trusted carriers to ensure reliable and efficient logistics operations."
        names={[
          "MANSUR LOGISTICS INC",
          "REM EXPRESS LLC",
          "DALE & R INC",
          "NODIR TRUCKING CORPORATION"
        ]}
        textAnimation="fade-blur"
      />
    </div>
  );
}