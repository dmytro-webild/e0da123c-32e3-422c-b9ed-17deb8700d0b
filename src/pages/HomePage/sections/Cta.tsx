import { ClipboardCheck, Truck, Banknote } from "lucide-react";
import TextAnimation from "@/components/ui/TextAnimation";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function CtaSection() {
  const steps = [
    {
      num: "01",
      title: "Apply",
      description: "Fill out our simple application form with your details and preferences.",
      icon: ClipboardCheck,
    },
    {
      num: "02",
      title: "Drive",
      description: "Hit the road with premium loads booked and routes optimized for maximum revenue.",
      icon: Truck,
    },
    {
      num: "03",
      title: "Get Paid",
      description: "Enjoy consistent, high-revenue loads with transparent invoicing and fast payments.",
      icon: Banknote,
    },
  ];

  return (
    <section data-webild-section="cta" id="cta" className="relative w-full py-24 bg-background overflow-hidden">
      <div className="w-content-width mx-auto flex flex-col items-center text-center">
        <ScrollReveal variant="fade">
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-[#00ff66]/20 bg-[#00ff66]/10 text-[#00ff66] text-sm font-medium mb-6 uppercase tracking-wider">
            How it works
          </div>
        </ScrollReveal>
        
        <TextAnimation 
          text="Get Started in 3 Simple Steps" 
          variant="fade-blur" 
          tag="h2" 
          className="text-4xl md:text-5xl font-bold text-foreground mb-24" 
          gradientText={false} 
        />

        <div className="relative w-full max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-[1px] bg-[#00ff66]/20 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
            {steps.map((step, index) => (
              <ScrollReveal variant="fade" key={index} delay={index * 0.2} className="relative flex flex-col items-center">
                {/* Icon Container */}
                <div className="relative flex items-center justify-center mb-8 w-full">
                  {/* Number Badge */}
                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-[5.5rem] z-10 w-8 h-8 rounded-full bg-[#00ff66] text-black flex items-center justify-center text-sm font-bold">
                    {step.num}
                  </div>
                  
                  {/* Icon Circle */}
                  <div className="w-24 h-24 rounded-full bg-[#131c2e] border border-white/5 flex items-center justify-center relative z-0 shadow-xl">
                    <div className="w-16 h-16 rounded-full bg-[#00ff66]/10 flex items-center justify-center">
                      <step.icon className="w-8 h-8 text-[#00ff66]" />
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-accent text-center leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}