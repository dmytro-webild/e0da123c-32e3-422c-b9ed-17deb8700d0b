import Button from "@/components/ui/Button";
import TextAnimation from "@/components/ui/TextAnimation";

export default function AboutPage() {
  return (
    <>
      <div data-webild-section="AboutTextSplit"><section aria-label="About section" className=""><div className="flex flex-col mx-auto w-content-width"><div className="flex flex-col md:flex-row gap-3"><div className="w-full md:w-1/2"><TextAnimation text="Who We Are" variant="slide-up" gradientText={true} tag="h2" className="text-7xl 2xl:text-8xl leading-[1.15] font-semibold text-balance" /></div><div className="flex flex-col gap-2 w-full md:w-1/2"><TextAnimation key={0} text="Since our founding on October 1, 2023, our mission has remained simple: deliver professional dispatch services built on honesty, transparency, and long-term partnerships." variant="slide-up" gradientText={false} tag="p" className="text-xl md:text-2xl leading-snug text-balance" />
<TextAnimation key={1} text="United Team is a professional Amazon Relay dispatch company providing reliable 24/7 dispatch support throughout the United States." variant="slide-up" gradientText={false} tag="p" className="text-xl md:text-2xl leading-snug text-balance" />
<TextAnimation key={2} text="We specialize in maximizing revenue for carriers and owner-operators by combining market knowledge, strategic planning, and exceptional communication." variant="slide-up" gradientText={false} tag="p" className="text-xl md:text-2xl leading-snug text-balance" /><div className="flex flex-wrap gap-3 mt-2 md:mt-3"><Button text="Get in Touch" href="/contact" variant="primary" /><Button text="Learn More" href="/services" variant="secondary" animationDelay={0.1} /></div></div></div><div className="w-full border-b border-foreground/5" /></div></section></div>
    </>
  );
}