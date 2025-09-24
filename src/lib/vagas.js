import { fetchDatoCMS } from "./dato";

export async function getVagas() {
  const query = `
    query {
      allVagas {
        tituloVaga
        descricaoVaga
        responsabilidades
        qualificacoes
      }
    }
  `;

  const data = await fetchDatoCMS(query);
  return data?.allVagas || [];
}
