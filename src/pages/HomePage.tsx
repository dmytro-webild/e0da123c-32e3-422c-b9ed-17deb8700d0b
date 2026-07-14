import AboutTestimonial from '@/components/sections/about/AboutTestimonial';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesDetailedCards from '@/components/sections/features/FeaturesDetailedCards';
import FeaturesImageBento from '@/components/sections/features/FeaturesImageBento';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsIconCards from '@/components/sections/metrics/MetricsIconCards';
import TeamOverlayCards from '@/components/sections/team/TeamOverlayCards';
import TestimonialRatingCards from '@/components/sections/testimonial/TestimonialRatingCards';
import { Calendar, Clock, Truck, Users } from "lucide-react";
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
      tag="United Team Logistics"
      title="Professional Amazon Relay Dispatch Services Across the United States"
      description="United Team provides reliable 24/7 Amazon Relay dispatch services, helping carriers and owner-operators maximize revenue through strategic load planning and route optimization."
      primaryButton={{
        text: "Get Started",
        href: "#contact",
      }}
      secondaryButton={{
        text: "About Us",
        href: "#about",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/modern-white-freight-truck-transporting-cargo-winter-highway-logistics-truck-road_169016-71714.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/orange-trucks-road_1127-184.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/close-up-black-man-writing-notes-build-new-development-strategy-managing-data-analytics_482257-136351.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/truck-digital-art-illustration_23-2151650079.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/technological-futuristic-holograms-logistics-means-transport_23-2151663015.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/delivery-van-loaded-with-boxes-warehouse_23-2151998679.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTestimonial
      tag="Our Story"
      quote="Founded on October 1, 2023, United Team was built with one mission: to deliver honest, transparent, and professional dispatch services that help carriers succeed."
      author="Management Team"
      role="United Team Founders"
      imageSrc="http://img.b2bpic.net/free-photo/female-staff-working-airport-terminal_107420-85075.jpg"
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="services" data-section="services">
    <SectionErrorBoundary name="services">
          <FeaturesDetailedCards
      tag="Our Services"
      title="Logistics Dispatch Solutions"
      description="We specialize in Amazon Relay dispatch services throughout the United States, combining market expertise and exceptional communication."
      items={[
        {
          title: "24/7 Dispatch Support",
          description: "Round-the-clock availability and support for your fleet operations.",
          tags: ["24/7", "Support"],
          imageSrc: "http://img.b2bpic.net/free-photo/handicapped-disabled-operator-sitting-wheelchair-making-telemarketing-business-office-immobilized-disabled-paralysed-freelancer-working-financial-corporate-building-using-heatset_482257-12923.jpg",
        },
        {
          title: "Expert Rate Negotiation",
          description: "Maximizing your revenue through proactive and expert rate negotiation.",
          tags: ["Revenue", "Negotiation"],
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-cardboard-boxes-pile-clipboard-pen_107791-17002.jpg",
        },
        {
          title: "Strategic Load Planning",
          description: "Efficiently planning loads to minimize downtime and maximize profitability.",
          tags: ["Planning", "Efficiency"],
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-shot-road-with-pilot-mountain-north-carolina-usa-cloudy-blue-sky_181624-20895.jpg",
        },
        {
          title: "Advanced Route Optimization",
          description: "Optimizing routes to save fuel, time, and reduce operational costs.",
          tags: ["Routing", "Optimization"],
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-shot-road-with-pilot-mountain-north-carolina-usa-cloudy-blue-sky_181624-20895.jpg",
        },
        {
          title: "Dedicated Driver Communication",
          description: "Maintaining clear and consistent communication with drivers on the road.",
          tags: ["Communication", "Drivers"],
          imageSrc: "http://img.b2bpic.net/free-photo/handicapped-disabled-operator-sitting-wheelchair-making-telemarketing-business-office-immobilized-disabled-paralysed-freelancer-working-financial-corporate-building-using-heatset_482257-12923.jpg",
        },
        {
          title: "Performance Tracking & Reporting",
          description: "Detailed analytics and reporting to monitor and improve fleet performance.",
          tags: ["Tracking", "Reporting"],
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-cardboard-boxes-pile-clipboard-pen_107791-17002.jpg",
        },
        {
          title: "Safety & Compliance Guidance",
          description: "Ensuring your operations meet all safety and regulatory compliance standards.",
          tags: ["Safety", "Compliance"],
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-shot-road-with-pilot-mountain-north-carolina-usa-cloudy-blue-sky_181624-20895.jpg",
        },
        {
          title: "Precise Trip Sheet Calculation",
          description: "Accurate and timely trip sheet calculations for seamless accounting.",
          tags: ["Trip Sheets", "Accounting"],
          imageSrc: "http://img.b2bpic.net/free-photo/3d-render-cardboard-boxes-pile-clipboard-pen_107791-17002.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesImageBento
      tag="Why Choose Us"
      title="Performance-Driven Dispatch"
      description="Drivers trust United Team because we focus on higher rates, honest communication, and professional support."
      items={[
        {
          title: "Higher Rates",
          description: "Focusing on your bottom line.",
          imageSrc: "http://img.b2bpic.net/free-photo/aerial-view-elevated-motorway-along-lam-takhong-lake-thailand_1308-189326.jpg",
        },
        {
          title: "Fast Response",
          description: "Quick communication.",
          imageSrc: "http://img.b2bpic.net/free-photo/warehouse-woman-worker-confidently-walking-through-large-warehouse-storage-center-organizing-distribution_342744-1517.jpg",
        },
        {
          title: "Dedicated Support",
          description: "Always here for you.",
          imageSrc: "http://img.b2bpic.net/free-photo/man-with-medical-mask-working-radio-station_23-2148815355.jpg",
        },
        {
          title: "Route Optimization",
          description: "Optimized every mile.",
          imageSrc: "http://img.b2bpic.net/free-photo/autonomous-delivery-robot_35913-2154.jpg",
        },
        {
          title: "Long-Term Partners",
          description: "Building lasting success.",
          imageSrc: "http://img.b2bpic.net/free-photo/management-warehouse-profile-woman-with-long-red-hair-protective-helmet-looking-tablet-screen-walking-along-warehouse-aisle_259150-56882.jpg",
        },
        {
          title: "Safety First",
          description: "Compliance monitored.",
          imageSrc: "http://img.b2bpic.net/free-photo/high-angle-man-holding-smartphone_23-2149426490.jpg",
        },
        {
          title: "24/7 Operations",
          description: "Working for you always.",
          imageSrc: "http://img.b2bpic.net/free-photo/professional-trucker-driver-hugging-his-truck-cabin-loving-his-job_342744-1270.jpg",
        },
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsIconCards
      tag="Our Growth"
      title="Dispatch By The Numbers"
      description="Trusted by partner carriers across the nation."
      metrics={[
        {
          icon: Calendar,
          title: "Founded",
          value: "2023",
        },
        {
          icon: Users,
          title: "Dispatchers",
          value: "16",
        },
        {
          icon: Truck,
          title: "Drivers/Operators",
          value: "30+",
        },
        {
          icon: Clock,
          title: "Availability",
          value: "24/7",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamOverlayCards
      tag="Meet Our Dispatchers"
      title="The United Team"
      description="Our professionals are dedicated to your carrier success."
      members={[
        {
          name: "Alex Johnson",
          role: "Senior Dispatcher",
          imageSrc: "http://img.b2bpic.net/free-photo/young-attractive-man-glassess-is-standing-near-workplace-office-he-wears-blue-shirt-dark-jacket-laptop-hand-he-is-looking-camera_197531-519.jpg",
        },
        {
          name: "Sarah Smith",
          role: "Operations Manager",
          imageSrc: "http://img.b2bpic.net/free-photo/online-remote-courses-bored-student-home_23-2148552277.jpg",
        },
        {
          name: "Mike Davis",
          role: "Load Planner",
          imageSrc: "http://img.b2bpic.net/free-photo/modern-company-manager-workplace-bright-office_1163-5267.jpg",
        },
        {
          name: "Elena Ross",
          role: "Safety Compliance",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-smiling-call-center-agent-dealing-with-unhappy-customers_482257-117856.jpg",
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialRatingCards
      tag="Testimonials"
      title="Trusted by Carriers"
      description="Feedback from partners we support."
      testimonials={[
        {
          name: "John Doe",
          role: "Owner Operator",
          quote: "United Team increased my load rates and efficiency. Highly recommended.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businessman-happy-expression_1194-1681.jpg",
        },
        {
          name: "Jane Miller",
          role: "Fleet Manager",
          quote: "The most transparent and professional dispatch service I have worked with.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/young-businesswoman-prepared-meeting_1098-2188.jpg",
        },
        {
          name: "Sam Roberts",
          role: "Driver",
          quote: "Excellent communication and route planning every single day.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-as-truck-driver_23-2151489776.jpg",
        },
        {
          name: "Lisa Wang",
          role: "Carrier Partner",
          quote: "They truly care about maximizing my revenue. Outstanding support.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/truck-driver-opening-reservoir-tank-refuel-truck-holding-thumbs-up_342744-1274.jpg",
        },
        {
          name: "David Brown",
          role: "Owner Operator",
          quote: "Reliable 24/7 service that has stabilized our business operations.",
          rating: 5,
          imageSrc: "http://img.b2bpic.net/free-photo/mid-adult-engineer-using-touchpad-communicating-with-african-american-worker-about-product-reports-industrial-building_637285-4098.jpg",
        },
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Contact Us"
      text="Ready to scale your Amazon Relay operations? Get in touch with United Team today."
      primaryButton={{
        text: "Request Dispatch Service",
        href: "#contact-form",
      }}
      secondaryButton={{
        text: "Call Now",
        href: "tel:+15136534606",
      }}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
