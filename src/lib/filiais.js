import { fetchDatoCMS } from "./dato";

export async function getFiliais() {
  const query = `
    query {
      allFilials {
        nome
        endereco
        imagem { url }
      }
    }
  `;
  const data = await fetchDatoCMS(query);
  return data?.allFilials || [];
}