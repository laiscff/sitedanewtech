import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Users, CheckCircle, ArrowDown, Cpu, Repeat } from "lucide-react";

const custoInicialData = [
  { name: "Desenvolvimento", value: 4000 },
  { name: "Bibliotecas", value: 200 },
  { name: "Domínio e SSL", value: 100 },
];

const custoMensalData = [
  { name: "Hospedagem", valor: 120 },
  { name: "Suporte", valor: 300 },
  { name: "Licenças", valor: 200 },
];

const beneficios = [
  {
    icon: <DollarSign className="h-8 w-8 text-primary" />,
    title: "Redução de Custos",
    description:
      "Economia significativa com ferramentas pagas por usuário ou suporte terceirizado.",
  },
  {
    icon: <Users className="h-8 w-8 text-primary" />,
    title: "Autonomia Tecnológica",
    description: "A empresa pode gerenciar e personalizar o sistema conforme sua rotina.",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-primary" />,
    title: "Retorno em 6-12 meses",
    description:
      "Retorno estimado em até 1 ano, devido à economia com licenças e melhorias operacionais.",
  },
];

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 15 },
  },
};

const arrowAnimation = {
  animate: {
    y: [0, 8, 0],
    transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
  },
};

export default function FinanPage() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-6"
    >
      {/* Título e descrição geral */}
      <motion.section variants={itemVariants} className="max-w-4xl mx-auto mb-4 text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-2">
          Viabilidade Financeira
        </h1>
        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
          Conheça a análise financeira detalhada, os custos previstos, a comparação com as principais soluções do mercado e os benefícios estratégicos que garantem mais produtividade, economia e autonomia tecnológica.
        </p>
      </motion.section>

      {/* Cards de Custos */}
      <motion.section variants={itemVariants} className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto mb-8">
        {/* Custos de Implementação */}
        <Card className="bg-white rounded-lg shadow-md p-4 border border-primary">
          <div className="flex items-center mb-2">
            <Cpu className="text-primary w-6 h-6 mr-2" />
            <h3 className="text-primary text-lg font-semibold">Custos de Implementação</h3>
          </div>
          <table className="w-full text-sm text-muted-foreground">
            <thead>
              <tr className="text-primary font-semibold border-b border-primary/50">
                <th className="text-left pb-1">Item</th>
                <th className="text-left pb-1">Tipo</th>
                <th className="text-right pb-1">Custo Estimado (R$)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="py-1">Desenvolvimento técnico (20h × R$ 200/h)</td>
                <td className="py-1">Setup</td>
                <td className="py-1 text-right">4.000,00</td>
              </tr>
              <tr>
                <td className="py-1">Licenciamento de bibliotecas (PDF, IA, etc.)</td>
                <td className="py-1">Setup (Licença Única)</td>
                <td className="py-1 text-right">200,00</td>
              </tr>
              <tr>
                <td className="py-1">Registro de domínio e certificado SSL (anual)</td>
                <td className="py-1">Setup</td>
                <td className="py-1 text-right">100,00</td>
              </tr>
              <tr className="text-primary font-semibold border-t border-primary/50">
                <td className="pt-2">Subtotal Setup</td>
                <td></td>
                <td className="pt-2 text-right">4.300,00</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs mt-1 text-muted-foreground italic">
            Fonte: Estimativas da equipe de desenvolvimento da NewTech.
          </p>
        </Card>

        {/* Custos Mensais Recorrentes */}
        <Card className="bg-white rounded-lg shadow-md p-4 border border-primary">
          <div className="flex items-center mb-2">
            <Repeat className="text-primary w-6 h-6 mr-2" />
            <h3 className="text-primary text-lg font-semibold">Custos Mensais Recorrentes</h3>
          </div>
          <table className="w-full text-sm text-muted-foreground">
            <thead>
              <tr className="text-primary font-semibold border-b border-primary/50">
                <th className="text-left pb-1">Item</th>
                <th className="text-left pb-1">Tipo</th>
                <th className="text-right pb-1">Custo Estimado (R$)</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr>
                <td className="py-1">Hospedagem em nuvem (básico)</td>
                <td className="py-1">Mensalidade</td>
                <td className="py-1 text-right">120,00</td>
              </tr>
              <tr>
                <td className="py-1">Manutenção técnica e suporte</td>
                <td className="py-1">Mensalidade</td>
                <td className="py-1 text-right">300,00</td>
              </tr>
              <tr>
                <td className="py-1">Licenças mensais de serviços (robôs, CRM, etc.)</td>
                <td className="py-1">Mensalidade</td>
                <td className="py-1 text-right">200,00</td>
              </tr>
              <tr className="text-primary font-semibold border-t border-primary/50">
                <td className="pt-2">Subtotal Mensalidade</td>
                <td></td>
                <td className="pt-2 text-right">620,00</td>
              </tr>
              <tr className="text-primary font-bold text-lg border-t border-primary/50">
                <td className="pt-2">Total inicial (setup + 1º mês):</td>
                <td></td>
                <td className="pt-2 text-right">R$ 4.920,00</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs mt-1 text-muted-foreground italic">
            Fonte: Estimativas da equipe de desenvolvimento da NewTech.
          </p>
        </Card>
      </motion.section>

      {/* Comparativo com Seta Animada */}
      <motion.section
        variants={itemVariants}
        className="max-w-5xl mx-auto border border-primary rounded-lg shadow-lg bg-white p-5 mb-10"
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-primary mb-4 text-center md:text-left">
          Comparativo com Soluções de Mercado
        </h2>
        <div className="grid md:grid-cols-2 gap-4 items-center">
          <div>
            <ul className="list-disc list-inside text-muted-foreground space-y-1 text-base">
              <li>Não há cobrança por usuário adicional</li>
              <li>Foco exclusivo em demandas internas</li>
              <li>Custos significativamente inferiores às principais plataformas</li>
              <li>Sem recursos excedentes que aumentam custos desnecessários</li>
            </ul>
          </div>
          <div className="bg-primary/10 p-4 rounded shadow text-center text-primary font-semibold text-lg leading-tight max-w-[280px] mx-auto">
            <p>
              Até <span className="text-3xl font-extrabold">70% menos</span>
            </p>
            <p className="text-base mt-1">
              em custos mensais comparado a soluções tradicionais do mercado
            </p>
            <motion.div
              className="flex justify-center mt-2"
              {...arrowAnimation}
            >
              <ArrowDown className="w-8 h-8" />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Benefícios */}
      <motion.section
        variants={itemVariants}
        className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 text-center"
      >
        {beneficios.map((item, index) => (
          <Card
            key={index}
            className="text-center shadow-lg hover:shadow-xl transition-shadow h-full border-t-4 border-primary"
          >
            <CardHeader className="flex flex-col items-center justify-center pt-5">
              {item.icon}
              <CardTitle className="mt-3 text-xl">{item.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm px-5 pb-5">
              {item.description}
            </CardContent>
          </Card>
        ))}
      </motion.section>

      {/* Perguntas Frequentes */}
      <motion.section variants={itemVariants} className="max-w-5xl mx-auto mb-12">
        <Card className="border-t-4 border-primary shadow-lg bg-white">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl sm:text-4xl font-bold text-primary mb-5">
              Perguntas Frequentes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-muted-foreground space-y-4 text-base sm:text-lg px-6">
            <dl>
              <dt className="font-semibold text-primary mb-2">
                Como os valores foram calculados?
              </dt>
              <dd>
                Os valores são baseados em estimativas reais de mercado,
                considerando provedores como AWS, Azure e Google Cloud, além do
                custo médio por hora técnica no Brasil.
              </dd>

              <dt className="font-semibold text-primary mb-2 mt-4">
                Há variações possíveis nos custos?
              </dt>
              <dd>
                Sim, os valores são aproximados e podem variar conforme o
                fornecedor e necessidades específicas do projeto.
              </dd>

              <dt className="font-semibold text-primary mb-2 mt-4">
                O sistema é escalável?
              </dt>
              <dd>
                Sim, a arquitetura permite expansão conforme o crescimento da
                empresa, mantendo custos previsíveis.
              </dd>
            </dl>
          </CardContent>
        </Card>
      </motion.section>
    </motion.div>
  );
}
