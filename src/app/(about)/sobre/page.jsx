import { AboutContent } from "@/components/about/content";
import { MissionVisionValues } from "@/components/about/missao-valores-visao";

export const metadata = {
  title: "Melo Prates e Oliveira - Sobre nós",
  description: "Advocacia",
  icons: {
    icon: "/logo-melopratesoliveira.png",
  },
};


const AboutPage = () => {
  return (
    <section className="all-content">
      <main className="content-page">
        <AboutContent />
        <MissionVisionValues />
      </main>
    </section>
  );
}

export default AboutPage;