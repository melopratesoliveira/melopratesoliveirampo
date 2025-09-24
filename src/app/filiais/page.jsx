import { FiliaisContent } from "@/components/filiais/filiais-content";
import { getFiliais } from "@/lib/filiais";

export const metadata = {
  title: "Melo Prates e Oliveira - Filiais",
  description: "Advocacia",
  icons: {
    icon: "/logo-melopratesoliveira.png",
  },
};

const FiliaisPage = async () => {
  const filiais = await getFiliais();

  return (
    <section className="all-content">
      <main className="content-page">
        <FiliaisContent filiais={filiais} />
      </main>
    </section>
  );
};

export default FiliaisPage;
