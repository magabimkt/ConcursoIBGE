import type { ComponentType } from "react";
import L_lingua_portuguesa_classes_de_palavras_as_dez_classes_de_palavras from "./lingua-portuguesa/classes-de-palavras/as-dez-classes-de-palavras.mdx";
import L_lingua_portuguesa_coesao_coerencia_coesao_e_coerencia_textual from "./lingua-portuguesa/coesao-coerencia/coesao-e-coerencia-textual.mdx";
import L_lingua_portuguesa_compreensao_interpretacao_compreender_e_interpretar_textos from "./lingua-portuguesa/compreensao-interpretacao/compreender-e-interpretar-textos.mdx";
import L_lingua_portuguesa_concordancia_concordancia_verbal_e_nominal from "./lingua-portuguesa/concordancia/concordancia-verbal-e-nominal.mdx";
import L_lingua_portuguesa_ortografia_acentuacao_ortografia_e_acentuacao_grafica from "./lingua-portuguesa/ortografia-acentuacao/ortografia-e-acentuacao-grafica.mdx";
import L_lingua_portuguesa_pontuacao_sequencia_pontuacao_e_sequencia_logica from "./lingua-portuguesa/pontuacao-sequencia/pontuacao-e-sequencia-logica.mdx";
import L_lingua_portuguesa_pronomes_emprego_dos_pronomes from "./lingua-portuguesa/pronomes/emprego-dos-pronomes.mdx";
import L_lingua_portuguesa_redacao_textos_oficiais_redacao_oficial_e_reescrita from "./lingua-portuguesa/redacao-textos-oficiais/redacao-oficial-e-reescrita.mdx";
import L_lingua_portuguesa_regencia_regencia_nominal_verbal_e_crase from "./lingua-portuguesa/regencia/regencia-nominal-verbal-e-crase.mdx";
import L_lingua_portuguesa_significacao_das_palavras_sinonimos_antonimos_homonimos_e_paronimos from "./lingua-portuguesa/significacao-das-palavras/sinonimos-antonimos-homonimos-e-paronimos.mdx";
import L_lingua_portuguesa_sintaxe_termos_da_oracao from "./lingua-portuguesa/sintaxe/termos-da-oracao.mdx";
import L_lingua_portuguesa_verbos_vozes_verbos_e_vozes_verbais from "./lingua-portuguesa/verbos-vozes/verbos-e-vozes-verbais.mdx";
import L_nocoes_de_administracao_aspectos_gerais_administracao_administracao_e_organizacoes_como_sistemas from "./nocoes-de-administracao/aspectos-gerais-administracao/administracao-e-organizacoes-como-sistemas.mdx";
import L_nocoes_de_administracao_atendimento_ao_publico_nocoes_de_atendimento_ao_publico from "./nocoes-de-administracao/atendimento-ao-publico/nocoes-de-atendimento-ao-publico.mdx";
import L_nocoes_de_administracao_autoridade_delegacao_autoridade_poder_e_delegacao from "./nocoes-de-administracao/autoridade-delegacao/autoridade-poder-e-delegacao.mdx";
import L_nocoes_de_administracao_documentacao_e_arquivo_gestao_de_documentos_e_arquivo from "./nocoes-de-administracao/documentacao-e-arquivo/gestao-de-documentos-e-arquivo.mdx";
import L_nocoes_de_administracao_funcoes_administrativas_o_ciclo_administrativo from "./nocoes-de-administracao/funcoes-administrativas/o-ciclo-administrativo.mdx";
import L_nocoes_de_administracao_grupos_trabalho_em_equipe_grupos_e_trabalho_em_equipe from "./nocoes-de-administracao/grupos-trabalho-em-equipe/grupos-e-trabalho-em-equipe.mdx";
import L_nocoes_de_administracao_motivacao_comunicacao_lideranca_motivacao_lideranca_e_comunicacao from "./nocoes-de-administracao/motivacao-comunicacao-lideranca/motivacao-lideranca-e-comunicacao.mdx";
import L_nocoes_de_administracao_qualidade_em_servicos_qualidade_na_prestacao_de_servicos from "./nocoes-de-administracao/qualidade-em-servicos/qualidade-na-prestacao-de-servicos.mdx";
import L_raciocinio_logico_quantitativo_algebra_basica_equacoes_e_sistemas from "./raciocinio-logico-quantitativo/algebra-basica/equacoes-e-sistemas.mdx";
import L_raciocinio_logico_quantitativo_aritmetica_porcentagem_razao_proporcao_e_regra_de_tres from "./raciocinio-logico-quantitativo/aritmetica/porcentagem-razao-proporcao-e-regra-de-tres.mdx";
import L_raciocinio_logico_quantitativo_diagramas_logicos_diagramas_logicos_e_conjuntos from "./raciocinio-logico-quantitativo/diagramas-logicos/diagramas-logicos-e-conjuntos.mdx";
import L_raciocinio_logico_quantitativo_estruturas_logicas_argumentacao_proposicoes_conectivos_e_negacoes from "./raciocinio-logico-quantitativo/estruturas-logicas-argumentacao/proposicoes-conectivos-e-negacoes.mdx";
import L_raciocinio_logico_quantitativo_geometria_basica_perimetros_areas_e_volumes from "./raciocinio-logico-quantitativo/geometria-basica/perimetros-areas-e-volumes.mdx";

/**
 * Registro explícito das aulas em MDX.
 * A publicação estática precisa saber de antemão quais arquivos existem.
 * Toda aula nova precisa de: (1) o arquivo .mdx em src/content,
 * (2) uma linha aqui e (3) o cadastro da aula em src/config/edital.ts.
 * Padrão da chave: "disciplina-slug/modulo-slug/aula-slug"
 */
export const lessonContentRegistry: Record<string, ComponentType> = {
  "lingua-portuguesa/classes-de-palavras/as-dez-classes-de-palavras": L_lingua_portuguesa_classes_de_palavras_as_dez_classes_de_palavras,
  "lingua-portuguesa/coesao-coerencia/coesao-e-coerencia-textual": L_lingua_portuguesa_coesao_coerencia_coesao_e_coerencia_textual,
  "lingua-portuguesa/compreensao-interpretacao/compreender-e-interpretar-textos": L_lingua_portuguesa_compreensao_interpretacao_compreender_e_interpretar_textos,
  "lingua-portuguesa/concordancia/concordancia-verbal-e-nominal": L_lingua_portuguesa_concordancia_concordancia_verbal_e_nominal,
  "lingua-portuguesa/ortografia-acentuacao/ortografia-e-acentuacao-grafica": L_lingua_portuguesa_ortografia_acentuacao_ortografia_e_acentuacao_grafica,
  "lingua-portuguesa/pontuacao-sequencia/pontuacao-e-sequencia-logica": L_lingua_portuguesa_pontuacao_sequencia_pontuacao_e_sequencia_logica,
  "lingua-portuguesa/pronomes/emprego-dos-pronomes": L_lingua_portuguesa_pronomes_emprego_dos_pronomes,
  "lingua-portuguesa/redacao-textos-oficiais/redacao-oficial-e-reescrita": L_lingua_portuguesa_redacao_textos_oficiais_redacao_oficial_e_reescrita,
  "lingua-portuguesa/regencia/regencia-nominal-verbal-e-crase": L_lingua_portuguesa_regencia_regencia_nominal_verbal_e_crase,
  "lingua-portuguesa/significacao-das-palavras/sinonimos-antonimos-homonimos-e-paronimos": L_lingua_portuguesa_significacao_das_palavras_sinonimos_antonimos_homonimos_e_paronimos,
  "lingua-portuguesa/sintaxe/termos-da-oracao": L_lingua_portuguesa_sintaxe_termos_da_oracao,
  "lingua-portuguesa/verbos-vozes/verbos-e-vozes-verbais": L_lingua_portuguesa_verbos_vozes_verbos_e_vozes_verbais,
  "nocoes-de-administracao/aspectos-gerais-administracao/administracao-e-organizacoes-como-sistemas": L_nocoes_de_administracao_aspectos_gerais_administracao_administracao_e_organizacoes_como_sistemas,
  "nocoes-de-administracao/atendimento-ao-publico/nocoes-de-atendimento-ao-publico": L_nocoes_de_administracao_atendimento_ao_publico_nocoes_de_atendimento_ao_publico,
  "nocoes-de-administracao/autoridade-delegacao/autoridade-poder-e-delegacao": L_nocoes_de_administracao_autoridade_delegacao_autoridade_poder_e_delegacao,
  "nocoes-de-administracao/documentacao-e-arquivo/gestao-de-documentos-e-arquivo": L_nocoes_de_administracao_documentacao_e_arquivo_gestao_de_documentos_e_arquivo,
  "nocoes-de-administracao/funcoes-administrativas/o-ciclo-administrativo": L_nocoes_de_administracao_funcoes_administrativas_o_ciclo_administrativo,
  "nocoes-de-administracao/grupos-trabalho-em-equipe/grupos-e-trabalho-em-equipe": L_nocoes_de_administracao_grupos_trabalho_em_equipe_grupos_e_trabalho_em_equipe,
  "nocoes-de-administracao/motivacao-comunicacao-lideranca/motivacao-lideranca-e-comunicacao": L_nocoes_de_administracao_motivacao_comunicacao_lideranca_motivacao_lideranca_e_comunicacao,
  "nocoes-de-administracao/qualidade-em-servicos/qualidade-na-prestacao-de-servicos": L_nocoes_de_administracao_qualidade_em_servicos_qualidade_na_prestacao_de_servicos,
  "raciocinio-logico-quantitativo/algebra-basica/equacoes-e-sistemas": L_raciocinio_logico_quantitativo_algebra_basica_equacoes_e_sistemas,
  "raciocinio-logico-quantitativo/aritmetica/porcentagem-razao-proporcao-e-regra-de-tres": L_raciocinio_logico_quantitativo_aritmetica_porcentagem_razao_proporcao_e_regra_de_tres,
  "raciocinio-logico-quantitativo/diagramas-logicos/diagramas-logicos-e-conjuntos": L_raciocinio_logico_quantitativo_diagramas_logicos_diagramas_logicos_e_conjuntos,
  "raciocinio-logico-quantitativo/estruturas-logicas-argumentacao/proposicoes-conectivos-e-negacoes": L_raciocinio_logico_quantitativo_estruturas_logicas_argumentacao_proposicoes_conectivos_e_negacoes,
  "raciocinio-logico-quantitativo/geometria-basica/perimetros-areas-e-volumes": L_raciocinio_logico_quantitativo_geometria_basica_perimetros_areas_e_volumes,
};
