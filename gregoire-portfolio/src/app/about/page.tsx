import { Header } from "@/components/sections/Header";
import { About } from "@/components/sections/About";
import { Footer } from "@/components/sections/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}
