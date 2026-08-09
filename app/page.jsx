import Link from "next/link";
import content from "../content.json";
import Hero from "../components/Hero";

const cardVariants = {
  primary: "bg-primary text-white",
  accent: "bg-accent text-white",
  muted: "bg-muted text-foreground",
  dark: "bg-foreground text-white",
};

const coloredCardText = {
  primary: "text-white",
  accent: "text-white",
  muted: "text-foreground",
  dark: "text-white",
};

export default function HomePage() {
  const { services, why, finalCta } = content.home;

  return (
    <>
      <Hero />

      {/* Servicios */}
      <section className="py-9 md:py-14 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[1.3rem] md:text-[1.65rem] font-semibold mb-5 md:mb-8 text-foreground">
            {services.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5">
            {services.items.map((item) => (
              <div
                key={item.title}
                tabIndex={0}
                className={`${cardVariants[item.variant]} rounded-[14px] p-[1.1rem] flex flex-col gap-[.6rem] min-h-[130px] shadow-[0_6px_16px_-10px_rgba(10,10,20,.3)] transition-all duration-300 outline-none hover:-translate-y-[9px] hover:scale-[1.015] hover:shadow-[0_22px_36px_-12px_rgba(10,10,20,.4)] focus-visible:-translate-y-[9px] focus-visible:scale-[1.015] focus-visible:shadow-[0_22px_36px_-12px_rgba(10,10,20,.4)]`}
              >
                <h3 className="text-[1.08rem] font-bold">{item.title}</h3>
                <p className={`text-[.92rem] leading-relaxed ${coloredCardText[item.variant]}`}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué */}
      <section className="py-9 md:py-14 px-6 bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-[1.3rem] md:text-[1.65rem] font-semibold mb-5 md:mb-8 text-foreground">
            {why.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {why.items.map((item) => (
              <div
                key={item.num}
                className="bg-white rounded-[14px] p-[1.2rem] border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-transparent"
              >
                <span className="text-[1.7rem] font-bold text-primary tabular-nums block mb-[.9rem]">
                  {item.num}
                </span>
                <h3 className="text-[1.02rem] font-bold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-[.92rem] text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-9 md:py-12 px-6 bg-gradient-to-r from-accent to-[#00a67c] text-white text-center">
        <h2 className="text-[1.7rem] md:text-[2.2rem] font-semibold mb-2">
          {finalCta.heading}
        </h2>
        <p className="text-white/[.97] mb-6">{finalCta.text}</p>
        <Link
          href="/contacto"
          className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-md shadow-[0_12px_26px_-10px_rgba(0,0,0,.28)] transition-all duration-300 hover:-translate-y-[3px] hover:shadow-[0_18px_32px_-10px_rgba(0,0,0,.32)]"
        >
          {finalCta.button}
        </Link>
      </section>
    </>
  );
}
