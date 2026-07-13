import React from 'react';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function FaqSection(): React.JSX.Element {
  return (
    <div data-webild-section="faq" id="faq" data-section="faq">
      <SectionErrorBoundary name="faq">
        <FaqSimple
          tag="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our Amazon Relay dispatch services."
          items={[
            {
              question: "What is Amazon Relay?",
              answer: "Amazon Relay is a suite of technology products that enables carriers to find, book, and execute Amazon loads."
            },
            {
              question: "How can United Team help my business?",
              answer: "We provide 24/7 dispatch services, route optimization, and strategic load planning to maximize your revenue and keep your trucks moving."
            },
            {
              question: "Do I need my own MC authority?",
              answer: "Yes, you must have an active MC authority, a valid DOT number, and meet Amazon's insurance and safety requirements to participate in the Relay program."
            },
            {
              question: "What are your dispatch fees?",
              answer: "Our fees are competitive and tailored to your specific needs and fleet size. Contact us for a personalized quote."
            }
          ]}
          textAnimation="slide-up"
        />
      </SectionErrorBoundary>
    </div>
  );
}