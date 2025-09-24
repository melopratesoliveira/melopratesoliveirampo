import { PraticeAreasCard } from "@/components/areas/areas-cards";
import { AreasContent } from "@/components/areas/content";

export const metadata = {
  title: "Melo Prates e Oliveira - Áreas de atuação",
  description: "Advocacia",
  icons: {
    icon: "/logo-melopratesoliveira.png",
  },
};

const AreasPage = () => {
  return (
    <section className="all-content">
      <main className="content-page">
        <AreasContent />
        <PraticeAreasCard />
      </main>
    </section>
  );
};

export default AreasPage;
