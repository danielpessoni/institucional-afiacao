# Molde de site institucional para afiação

Projeto de estudo e ponto de partida para um site institucional de serviços de afiação. A interface reúne páginas de início, serviços, apresentação do negócio e contato, com navegação responsiva e chamadas para atendimento pelo WhatsApp.

> **Este repositório é apenas um molde.** Não o utilize diretamente para desenvolver ou publicar o projeto de um cliente. Se decidir aproveitar este código em um trabalho real, faça uma cópia do repositório e implemente as alterações somente nessa cópia. Mantenha este projeto como referência, sem dados, conteúdo ou customizações de clientes.

## Origem do projeto

A base de código veio de outro projeto desenvolvido durante a formação **DevQuest - Dev em Dobro**, com acompanhamento dos mentores. A partir dela, o projeto foi refatorado e componentizado, teve funções alteradas e novas funcionalidades adicionadas, além de uma mudança de nicho para serviços de afiação.

## Tecnologias

- **React 19** para a construção da interface com componentes.
- **TypeScript 6** para tipagem estática.
- **Vite 8** para desenvolvimento local e geração do build.
- **Tailwind CSS 4** para estilização e layouts responsivos.
- **React Router 7** para navegação entre páginas.
- **Lucide React** e **React Icons** para ícones.
- **ESLint** com regras para TypeScript, React Hooks e React Refresh.

## Funcionalidades

- Páginas de início, serviços, sobre e contato.
- Cabeçalho com navegação adaptada para telas menores.
- Cards e carrosséis de conteúdo.
- Botões de contato e atalho flutuante para o WhatsApp.
- Seções para apresentar serviços, informações do negócio e formas de contato.

## Começando

É necessário ter o Node.js e o npm instalados.

1. Instale as dependências:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

O Vite exibirá no terminal o endereço local para abrir no navegador.

### Outros comandos

```bash
npm run build    # verifica os tipos e gera a versão de produção em dist/
npm run preview  # serve localmente a versão gerada
npm run lint     # executa o ESLint
```

## Estrutura do projeto

```text
src/
├── assets/       # imagens utilizadas nas páginas
├── components/   # componentes de layout, navegação e interface reutilizável
├── pages/        # páginas Início, Serviços, Sobre e Contato
├── routes/       # configuração das rotas
└── styles/       # estilos globais e tema do Tailwind
```

## Personalização do molde

Ao trabalhar em uma cópia, revise e substitua todo o conteúdo de demonstração antes de publicar, incluindo:

- nome, textos, serviços e preços;
- endereço, horário e telefone;
- número do WhatsApp, definido em `src/components/shared/WhatsAppButton.tsx`;
- links de redes sociais e localização no rodapé;
- imagens, certificações, favicon, cores e demais elementos da identidade visual.

Confira também os links e os dados de contato em todas as páginas e componentes. Os textos, preços, endereço, telefone e perfis sociais atuais são exemplos e não devem ser tratados como informações reais.

## Boas práticas aplicadas

- Separação entre páginas, rotas, layout e componentes reutilizáveis.
- Tipagem de propriedades de componentes e uso de TypeScript.
- Reutilização de elementos de interface, como botões, cards e carrosséis.
- Uso de componentes e rotas para organizar a navegação entre páginas.
- Classes responsivas para adaptar a interface a diferentes tamanhos de tela.
- Textos alternativos em imagens informativas e rótulos acessíveis em controles interativos.
- ESLint configurado para verificar o código TypeScript, o uso de Hooks e a compatibilidade com React Refresh.
