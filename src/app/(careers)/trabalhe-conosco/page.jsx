import { CareersContent } from "@/components/careers";
import { getVagas } from "@/lib/vagas";


export const metadata = {
  title: "Melo Prates e Oliveira - Trabalhe Conosco",
  description: "Advocacia",
  icons: {
    icon: "/logo-melopratesoliveira.png",
  },
};

  const CareersPage = async () => {
  const vagas = (await getVagas()) || [];
  
    return (
      <section className="all-content">
        <main className="content-page">
          <CareersContent vagas={vagas} />
        </main>
      </section>
    );
  }
  
  export default CareersPage;