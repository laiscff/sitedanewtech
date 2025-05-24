import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Smartphone, Monitor, Tablet } from 'lucide-react';

const prototypesData = [
  {
    id: 1,
    platform: "Diagrama ER",
    icon: <Monitor className="h-12 w-12 text-primary" />,
    description: "Demonstra a estrutura lógica e as relações entre as entidades do banco de dados utilizado no sistema. Cada tabela reflete um aspecto específico da gestão dos chamados técnicos.",
    altText: "Cada tabela reflete um aspecto específico da gestão dos chamados técnicos.",
    imageUrl: "/sitedanewtech/img/aaaa.png"
  },
  {
    id: 2,
    platform: "Diagrama de Classes",
    icon: <Monitor className="h-12 w-12 text-primary" />,
    description: "Apresenta a estrutura das entidades principais que compõem o sistema. Define claramente seus atributos e métodos, além dos relacionamentos existentes.",
    altText: "Define claramente seus atributos e métodos, além dos relacionamentos existentes.",
    imageUrl: "/sitedanewtech/img/dg-classes3.png"
  },
  {
    id: 3,
    platform: "Diagrama de Casos de Uso",
    icon: <Smartphone className="h-12 w-12 text-primary" />,
    description: "Apresenta as principais funcionalidades e interações do sistema. Os usuários são classificados em três perfis: Usuário (colaborador), Técnico e Administrador.",
    altText: "Os usuários são classificados em três perfis: Usuário (colaborador), Técnico e Administrador.",
    imageUrl: "/sitedanewtech/img/dg-usos2.png"
  },
  {
    id: 4,
    platform: "Diagrama de Implantação",
    icon: <Monitor className="h-12 w-12 text-primary" />,
    description: "Detalhando a arquitetura tecnológica e a comunicação entre os componentes principais. Ilustra como o sistema será implantado fisicamente.",
    altText: "Detalhando a arquitetura tecnológica e a comunicação entre os componentes principais.",
    imageUrl: "/sitedanewtech/img/implantt.png"
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
        className="text-center mb-16"
      >
        <motion.h1 variants={itemVariants} className="text-5xl font-extrabold text-primary mb-4">Diagramas do Sistema NewTech</motion.h1>
        <motion.p variants={itemVariants} className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Explore as representações visuais que ilustram a estrutura, os processos e as funcionalidades do nosso sistema de gestão de chamados com IA.
        </motion.p>
      </motion.section>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-8 max-w-3xl mx-auto"
      >
        {prototypesData.map((proto) => (
          <motion.div key={proto.id} variants={itemVariants}>
            <Card className="h-full shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out overflow-hidden group">
              <CardHeader className="items-center text-center">
                <div className="p-3 bg-primary/10 rounded-full mb-3">
                  {proto.icon}
                </div>
                <CardTitle className="text-2xl font-semibold text-foreground">{proto.platform}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="aspect-[16/9] bg-secondary rounded-lg mb-4 flex items-center justify-center overflow-hidden border border-muted">
                  {proto.imageUrl ? (
                    <img
                      src={proto.imageUrl}
                      alt={proto.altText}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <img  alt={proto.altText} src="https://images.unsplash.com/photo-1600132806370-bf17e65e942f" />
                  )}
                </div>
                <p className="text-muted-foreground">{proto.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default PrototypesPage;