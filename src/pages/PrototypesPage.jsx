import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Monitor, Tablet, Globe } from 'lucide-react';

const desktopPrototypes = [
  {
    id: 1,
    platform: "Tela de Login (Desktop)",
    icon: <Monitor className="h-12 w-12 text-primary" />,
    description: "Visão geral do login no desktop.",
    altText: "Dashboard principal do NewTech com gráficos de chamados resolvidos vs. pendentes e lista de últimos chamados.",
    imageUrl: "/sitedanewtech/img/teladelogindesktop.png"
  },
  {
    id: 2,
    platform: "Gestão de Técnicos (Desktop)",
    icon: <Monitor className="h-12 w-12 text-primary" />,
    description: "Tela para gerenciar técnicos, suas especialidades e ações.",
    altText: "Tela de gerenciamento de técnicos no NewTech, listando técnicos com opções de editar e excluir.",
    imageUrl: "/sitedanewtech/img/gerenciartecdesktop.png"
  },
  {
    id: 6,
    platform: "Interface Dashboards (Desktop)",
    icon: <Monitor className="h-12 w-12 text-primary" />,
    description: "Visão geral do sistema com gráficos e chamados recentes.",
    altText: "Captura de tela da interface NewTech em um dispositivo tablet, mostrando o dashboard.",
    imageUrl: "/sitedanewtech/img/dashadmin.png"
  }
];

const webPrototypes = [
  {
    id: 4,
    platform: "Tela de Login (Web)",
    icon: <Globe className="h-12 w-12 text-primary" />,
    description: "Interface de login para acesso seguro ao sistema TecSystem.",
    altText: "Tela de login do sistema TecSystem com campos para email, senha e botão de entrar.",
    imageUrl: "/sitedanewtech/img/teladelogindesktop.png"
  },
  {
    id: 5,
    platform: "Suporte ao Colaborador (Web)",
    icon: <Globe className="h-12 w-12 text-primary" />,
    description: "Plataforma web para colaboradores abrirem e visualizarem as atualizações dos seus chamados.",
    altText: "Tela de suporte ao colaborador do NewTech, com opções de novo chamado, categorias e chamados recentes.",
    imageUrl: "/sitedanewtech/img/colaboradortela.png"
  },
  {
  id: 6,
    platform: "Interface dos Técnicos (Web)",
    icon: <Globe className="h-12 w-12 text-primary" />,
    description: "Tela principal do portal dos técnicos, onde eles podem visualizar, tratar e atualizar chamados em aberto.",
    altText: "Tela de principal do portal dos técnicos.",
    imageUrl: "/sitedanewtech/img/tecnicotelaweb.png"
  }
];

const mobilePrototypes = [
  {
    id: 3,
    platform: "Login do Usuário (Mobile) ",
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    description: "Tela simples de login com campos para email e senha para entrar no sistema.",
    altText: "Interface do aplicativo móvel NewTech para usuários, mostrando categorias e chamados recentes.",
    imageUrl: "/sitedanewtech/img/telaloginmobile.png"
  },
  {
    id: 7,
    platform: "Tela Principal Usuário (Mobile)",
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    description: "Visão geral do usuário e chamados recentes.",
    altText: "Interface do aplicativo móvel NewTech para usuários, mostrando categorias e chamados recentes.",
    imageUrl: "/sitedanewtech/img/telaprincmobile.png"
  },
  {
    id: 8,
    platform: "Interface Abrir Chamado (Mobile)",
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    description: "Formulário para abrir novo chamado, com seleção de categoria, campos para título e descrição.",
    altText: "Interface do aplicativo móvel NewTech para usuários, mostrando categorias e chamados recentes.",
    imageUrl: "/sitedanewtech/img/telaabrirmobile.png"
  }
];

const PrototypesPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: 'spring', stiffness: 100, damping: 10 }
    }
  };

  const renderPrototypes = (items) => (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {items.map((proto) => (
        <motion.div key={proto.id} variants={itemVariants}>
          <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden group">
            <CardHeader className="items-center text-center">
              <div className="p-3 bg-primary/10 rounded-full mb-3">
                {proto.icon}
              </div>
              <CardTitle className="text-2xl font-semibold text-primary">{proto.platform}</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-primary">
              <div className="aspect-[16/9] bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-muted">
                {proto.imageUrl ? (
                  <img
                    src={proto.imageUrl}
                    alt={proto.altText}
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <img alt={proto.altText} src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f" />
                )}
              </div>
              <p className="text-primary">{proto.description}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 sm:px-6 lg:px-8 py-12"
    >
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center mb-8"
      >
        <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-primary mb-2">Galeria de Interfaces</motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-primary max-w-3xl mx-auto">
          Uma prévia da experiência do usuário NewTech em diferentes plataformas.
        </motion.p>
      </motion.section>

      {/* Desktop */}
      <section className="mb-10">
        {renderPrototypes(desktopPrototypes)}
      </section>

      {/* Web */}
      <section className="mb-10">
        {renderPrototypes(webPrototypes)}
      </section>

      {/* Mobile */}
      <section className="mb-10">
        {renderPrototypes(mobilePrototypes)}
      </section>
    </motion.div>
  );
};

export default PrototypesPage;
