import { TeamContent } from "@/components/team";
import { getProfissionais } from "@/lib/profissionais";

export const metadata = {
  title: "Melo Prates e Oliveira - Nosso Time",
  description: "Advocacia",
  icons: {
    icon: "/logo-melopratesoliveira.png",
  },
};

const TeamPage = async () => {
  const profissionais = await getProfissionais();
  return (
    <section className="all-content">
      <main className="content-page">
        <TeamContent profissionais={profissionais} />
      </main>
    </section>
  );
};

export default TeamPage;