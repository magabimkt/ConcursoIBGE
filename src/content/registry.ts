import type { ComponentType } from "react";
import OCicloAdministrativo from "./nocoes-de-administracao/funcoes-administrativas/o-ciclo-administrativo.mdx";
import MotivacaoLiderancaComunicacao from "./nocoes-de-administracao/motivacao-comunicacao-lideranca/motivacao-lideranca-e-comunicacao.mdx";
import GestaoDocumentosArquivo from "./nocoes-de-administracao/documentacao-e-arquivo/gestao-de-documentos-e-arquivo.mdx";
import ConcordanciaVerbalNominal from "./lingua-portuguesa/concordancia/concordancia-verbal-e-nominal.mdx";
import ProposicoesConectivosNegacoes from "./raciocinio-logico-quantitativo/estruturas-logicas-argumentacao/proposicoes-conectivos-e-negacoes.mdx";

/**
 * Registro explícito das aulas em MDX.
 *
 * A publicação estática precisa saber de antemão quais arquivos existem.
 * Toda aula nova precisa de: (1) o arquivo .mdx em src/content,
 * (2) uma linha de import aqui e (3) o cadastro da aula em src/config/edital.ts.
 *
 * Padrão da chave: "disciplina-slug/modulo-slug/aula-slug"
 */
export const lessonContentRegistry: Record<string, ComponentType> = {
  "nocoes-de-administracao/funcoes-administrativas/o-ciclo-administrativo": OCicloAdministrativo,
  "nocoes-de-administracao/motivacao-comunicacao-lideranca/motivacao-lideranca-e-comunicacao": MotivacaoLiderancaComunicacao,
  "nocoes-de-administracao/documentacao-e-arquivo/gestao-de-documentos-e-arquivo": GestaoDocumentosArquivo,
  "lingua-portuguesa/concordancia/concordancia-verbal-e-nominal": ConcordanciaVerbalNominal,
  "raciocinio-logico-quantitativo/estruturas-logicas-argumentacao/proposicoes-conectivos-e-negacoes": ProposicoesConectivosNegacoes,
};
