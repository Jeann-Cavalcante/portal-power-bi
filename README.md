# Sobre o projeto

O objetivo principal do portal é fornecer dashboards feitos em Power BI para os usuários, de uma forma segura e personalizada. Usando o Next.js, foi possível criar uma aplicação de página única (SPA) que torna a navegação mais rápida e agradável para o usuário, sem precisar recarregar a página a cada clique.

O Prisma foi utilizado para fazer a conexão com o banco de dados PostgreSQL e permitir a persistência dos dados de usuário e login do NextAuth.js. Essa integração também permitiu o uso de um modelo de dados consistente e eficiente, que pode ser facilmente atualizado conforme necessário.

Já o NextAuth.js foi usado para lidar com a autenticação e autorização do usuário. Ele fornece uma solução completa e fácil de usar para implementar autenticação em várias plataformas, incluindo o próprio Next.js, APIs RESTful e APIs GraphQL.

Para criar os formulários de entrada de dados, foi utilizado o React Hook Forms, que é uma biblioteca para gerenciar formulários em React de uma forma mais fácil e eficiente. Com ele, é possível simplificar a validação dos dados de entrada e gerenciar melhor os erros de validação.

Para garantir que os dados inseridos no portal estejam sempre corretos e seguros, foi utilizado o Zod, que é uma biblioteca de validação de esquema de dados. Ele permite que se defina um esquema para os dados de entrada e, em seguida, valide-os automaticamente, garantindo que estejam corretos e consistentes antes de serem salvos no banco de dados.

Por fim, o Tailwind CSS foi usado para criar o design e o layout do portal. Ele é uma biblioteca de estilos altamente personalizável que permite criar um design consistente e moderno para a aplicação, sem precisar escrever CSS personalizado.

No geral, o portal web que eu desenvolvi é uma solução completa e personalizada que permite que os usuários acessem dashboards de Power BI de forma segura e eficiente. Ele foi projetado para ser fácil de usar, personalizável e escalável, e é capaz de lidar com grandes quantidades de dados de forma rápida e eficiente.


## Layout

<div style=" display: flex; flex-direction: column; gap: 20px">
  <img src="https://raw.githubusercontent.com/Jeann-Cavalcante/portal-power-bi/main/src/assets/prints/powerbi.gif" >
  <img src="https://raw.githubusercontent.com/Jeann-Cavalcante/portal-power-bi/main/src/assets/prints/login.png"  >
  <img src="https://raw.githubusercontent.com/Jeann-Cavalcante/portal-power-bi/main/src/assets/prints/inicio.png" >
  <img src="https://raw.githubusercontent.com/Jeann-Cavalcante/portal-power-bi/main/src/assets/prints/dash.png">
  <img src="https://raw.githubusercontent.com/Jeann-Cavalcante/portal-power-bi/main/src/assets/prints/bi.png">
 </div>

# Tecnologias utilizadas

## Front-End
- NextJs / NextAuth.js / Chakra ui / Tailwind / React Hook Form

## Backend
- Prisma / Postgres / NextJs api / Zod

# Como executar o projeto

## Front end web
Pré-requisitos: npm / yarn

```bash
# clonar repositório
git clone https://github.com/Jeann-Cavalcante/portal-power-bi.git

# instalar dependências
npm i install

# executar o projeto
npm run dev
```

# Autor

Jean cavalcante

https://www.linkedin.com/in/jean-cavalcante-296245149/

# Link do Projeto

https://portal-power-bi.vercel.app/
