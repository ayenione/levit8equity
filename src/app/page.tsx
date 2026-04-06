import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WhatWeLookFor from "@/components/WhatWeLookFor";
import WhatSellersExpect from "@/components/WhatSellersExpect";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <div className="divider" />
        <WhatWeLookFor />
        <div className="divider" />
        <WhatSellersExpect />
        <div className="divider" />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
