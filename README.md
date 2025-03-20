# 🍍 Lista de Frutas
Esse projeto consciste em uma lista de cadastro de frutas desenvolvida com REACT e .NET.

## **Estrutura do Projeto**  
> A seguir é apresentado a organização da estrutura utilizada no projeto, mostrando a disposição dos principais scripts e arquivos:  

### Backend
Para o backend foi desenvolvido uma API ASP.NET que faz o intermedio entre banco de dados e o frontend, a API foi separada em três partes principais, o Model que possui a estrutura da tabela do banco de dados, o Controller que realiza as execuções e códigos, e o ApplicationDbContext que conecta com o banco de dados.

<pre>
├── Back-End
    ├── .vs
    │   ├── FruitList
    |   │── Controllers/
    |   │   └── FruitController.cs      # Controlador que define as rotas da API
    |   │── Models/
    |   │   └── Fruit.cs                 # Modelo de dados
    |   │── Data/
    |   │   └── ApplicationDbContext.cs  # Contexto do banco de dados
    |   │── Program.cs                   # Configuração principal da API
    |   └── appsettings.json             # Configurações gerais (inclui a Connection String)
</pre>


### Frontend
Para o frontend foi utilizado Vite para a criação do projeto.

<pre>
├── Front-End
    ├── fruit-app
    │   frontend/
    │   │── src/
    │   │   ├── App.css              # Arquivo de estilos
    │   │   ├── App.jsx              # Componente principal, arquivo para chamadas à API
    │   │   ├── assets
    │   │   │   └── react.svg
    │   │   ├── index.css
    │   │   └── main.jsx
    │   └── vite.config.js           # Configuração do Vite
    └── package-lock.json            # Dependências do projeto

</pre>
---


# **🔹 Passo a Passo para Rodar o Projeto**

## **1️⃣ Pré-requisitos**
Antes de começar, a pessoa precisa ter instalado no sistema:  
✅ **.NET SDK** → [Download .NET](https://dotnet.microsoft.com/en-us/download)  
✅ **Node.js + npm** → [Download Node.js](https://nodejs.org/)  
✅ **Git** (para clonar o projeto) → [Download Git](https://git-scm.com/downloads)  

---

## **2️⃣ Clonar o Repositório**
Abra o Git Bash e execute:  
```sh
git clone https://github.com/TH3USS/FruitList.git
```

---

## **3️⃣ Configurar Banco de Dados**
- Baixe e instale o **SQL Server Express**.

---

## **4️⃣ Rodar o Backend**
### 📌No CMD vá para a pasta Back-End e estando nela execute:  
```sh
dotnet restore
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run
```
Isso fará a reconstrução do projeto, criará o banco de dados no SQL Server local e rodará o backend.

---

## **5️⃣ Rodar o Frontend**
Agora ainda no CMD, navegue até a pasta fruit-app dentro da pasta Front-End, e estando lá dentro execute os comandos:  
```sh
npm install
npm run dev
```
Isso instalará as dependencias e iniciará o frontend.

---

Se **tudo estiver rodando, e o front estiver aparecendo sem erros**, seu projeto foi configurado com sucesso! 🚀🎉

---

# **🔥 Resumo das Comandos**
```sh
# Clonar o projeto
git clone https://github.com/TH3USS/FruitList.git

# Rodar Backend
dotnet restore
dotnet ef migrations add InitialCreate
dotnet ef database update
dotnet run

# Rodar Frontend
npm install
npm run dev
```

---

# **📌 Tecnologias e Ferramentas Utilizadas**  

## **1️⃣ Frontend - React.js**  
O frontend foi desenvolvido utilizando **React.js**, uma biblioteca JavaScript para criação de interfaces modernas e dinâmicas.  

### 🔹 **Principais Tecnologias no Frontend**  
✅ **React.js** → Biblioteca para criação de interfaces reativas.  
✅ **Vite** → Ferramenta para um ambiente de desenvolvimento rápido.  
✅ **CSS** → Estilização da aplicação.  
✅ **Fetch API / Axios** → Comunicação com o backend via API REST.  

---

## **2️⃣ Backend - .NET 8 (C#)**  
Para o backend foi desenvolvido uma API que faz a comunicação entre o banco de dados e a interface gráfica utilizando **ASP.NET Core 8**, um framework robusto para criação de APIs performáticas e seguras.  

### 🔹 **Principais Tecnologias no Backend**  
✅ **ASP.NET Core 8** → Framework para construção de APIs.  
✅ **Entity Framework Core** → ORM para manipulação do banco de dados.  
✅ **Swagger (Swashbuckle)** → Documentação interativa da API.  

---

## **3️⃣ Banco de Dados - SQL Server**  
O projeto utiliza **SQL Server**, um banco de dados relacional da Microsoft.  

### 🔹 **Ferramentas e Recursos Usados**  
✅ **SQL Server Express** → Versão gratuita do banco.  
✅ **SQL Server Management Studio (SSMS)** → Ferramenta para gerenciar o banco.  
✅ **Entity Framework Core (Migrations)** → Criação e gerenciamento do banco.  

---

## **5️⃣ Ferramentas Auxiliares**  
Além das tecnologias principais, foram utilizadas algumas ferramentas para otimizar o desenvolvimento:  

✅ **Git & GitHub** → Controle de versão e colaboração.  
✅ **Visual Studio Code** → IDE para desenvolvimento do frontend.  
✅ **Visual Studio** → IDE para desenvolvimento do backend.  

---


# **🚀 Conclusão**  
O projeto utiliza **tecnologias modernas e eficientes**, garantindo **alta performance, escalabilidade e facilidade de manutenção**. Com a integração de **React no frontend, .NET no backend e SQL Server como banco de dados**, a aplicação entrega uma experiência fluida e confiável para os usuários.  
