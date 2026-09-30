# Relikta -- Plataforma de Acervo e Compra/Venda para Colecionadores

> Plataforma web voltada para colecionadores, permitindo organizar,
> exibir, comprar, vender e trocar itens de coleções.

## 1. Sobre o projeto

O **Relikta** é uma plataforma web desenvolvida para permitir que
colecionadores organizem, exibam, comprem, vendam e troquem itens de
suas coleções.

O sistema busca reunir uma comunidade de usuários interessados em
diversos tipos de colecionáveis, facilitando a interação e as
negociações.

## 2. Objetivo do sistema

Criar uma plataforma segura e intuitiva que permita aos usuários:

-   Gerenciar suas coleções;
-   Encontrar itens desejados;
-   Realizar negociações com outros colecionadores.

## 3. Equipe

-   André Luiz
-   Beatriz Dantas
-   Diego Antony
-   Rodrigo Pessoa

## 4. Stakeholders

-   Colecionadores;
-   Compradores;
-   Vendedores;
-   Administradores do sistema.

## 5. Escopo do sistema

### Funcionalidades incluídas

-   Cadastro e login de usuários;
-   Criação de perfil de colecionador;
-   Cadastro e gerenciamento de coleções;
-   Pesquisa de itens e usuários;
-   Classificação de raridade;
-   Criação de anúncios para venda.

### Funcionalidades excluídas

-   Entrega própria dos produtos;
-   Sistema bancário próprio;
-   Leilões em tempo real;
-   Videoconferências entre usuários;
-   Loja física.

## 6. Usuários e perfis

### Colecionador

Usuário responsável por cadastrar e exibir sua coleção.

**Permissões:**

1.  Criar e editar coleções;
2.  Adicionar itens;
3.  Pesquisar itens;
4.  Criar anúncios de itens para venda.

### Administrador

Usuário responsável pelo gerenciamento e moderação da plataforma.

**Permissões:**

1.  Gerenciar usuários;
2.  Remover anúncios inadequados;
3.  Moderar conteúdos;
4.  Gerenciar categorias do sistema.

## 7. Requisitos Funcionais (RF)

### RF01 --- Cadastro de usuários

**Descrição:** O sistema deve permitir o cadastro e login de usuários.

**Prioridade:** Alta

### RF02 --- Criar perfil de colecionador

**Descrição:** O usuário poderá criar e personalizar seu perfil.

**Prioridade:** Alta

### RF03 --- Cadastrar itens

**Descrição:** O usuário poderá adicionar itens à sua coleção.

**Prioridade:** Alta

### RF04 --- Classificar raridade

**Descrição:** O sistema deve classificar os itens por raridade.

**Prioridade:** Média

### RF05 --- Pesquisar itens

**Descrição:** O usuário poderá pesquisar itens e coleções.

**Prioridade:** Alta

### RF06 --- Criar anúncios

**Descrição:** O usuário poderá publicar itens para venda.

**Prioridade:** Alta

## 8. Requisitos Não Funcionais (RNF)

### RNF01 --- Segurança

**Descrição:** As senhas deverão ser criptografadas e os dados
protegidos.

**Prioridade:** Alta

### RNF02 --- Desempenho

**Descrição:** As páginas deverão carregar em até 3 segundos.

**Prioridade:** Alta

### RNF03 --- Responsividade

**Descrição:** O sistema deverá funcionar em celulares, tablets e
computadores.

**Prioridade:** Alta

### RNF04 --- Disponibilidade

**Descrição:** O sistema deverá permanecer disponível 24 horas por dia.

**Prioridade:** Média

### RNF05 --- Usabilidade

**Descrição:** A interface deverá ser intuitiva e de fácil utilização.

**Prioridade:** Alta

### RNF06 --- Escalabilidade

**Descrição:** O sistema deverá suportar o aumento de usuários sem perda
significativa de desempenho.

**Prioridade:** Média

## 9. Regras de negócio

-   **RN01:** Apenas usuários cadastrados poderão anunciar itens.
-   **RN02:** Todo anúncio deverá possuir, no mínimo, foto, nome e descrição do item.
-   **RN03:** O sistema de raridade classificará os itens como Comum,
    Incomum, Raro, Épico ou Lendário.
-   **RN04:** O vendedor será responsável pela veracidade das
    informações dos anúncios.
-   **RN05:** O administrador poderá remover anúncios que violem as
    regras da plataforma.

## 10 . Como executar:
```npm run```

------------------------------------------------------------------------

**Relikta** --- Plataforma de Acervo para Colecionadores.
