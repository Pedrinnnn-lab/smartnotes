# SmartNotes API

Projeto prático da disciplina de **Gerência de Configuração**, do Instituto de Computação da Universidade Federal do Amazonas (UFAM).

## Objetivo

Desenvolver uma API para gerenciamento de notas pessoais, permitindo cadastro e autenticação de usuários e operações sobre suas próprias notas. O projeto também serve para praticar versionamento, rastreamento de mudanças, configuração de ambientes, integração contínua e identificação de versões.

> **Estado do projeto:** em desenvolvimento. A descrição abaixo apresenta os requisitos planejados; não significa que todas as funcionalidades estejam implementadas.

## Tecnologias previstas

- Node.js, Express e TypeScript
- Prisma e MySQL
- Joi para validação
- express-session para autenticação por sessão
- bcryptjs para hash de senhas
- Docker e GitHub Actions para configuração e automação

## API prevista

Prefixo: `/v1`.

| Método | Rota | Finalidade |
| --- | --- | --- |
| POST | `/v1/auth/signup` | Cadastrar usuário |
| POST | `/v1/auth/login` | Iniciar sessão |
| POST | `/v1/auth/logout` | Encerrar sessão |
| GET | `/v1/notes` | Listar notas do usuário |
| POST | `/v1/notes` | Criar nota |
| GET | `/v1/notes/:id` | Consultar nota |
| PUT | `/v1/notes/:id` | Atualizar nota |
| DELETE | `/v1/notes/:id` | Excluir nota |

As rotas de notas deverão exigir autenticação e restringir o acesso aos dados do usuário da sessão.

## Itens de configuração

Os principais itens de configuração do SmartNotes são:

| Item | Função |
| --- | --- |
| `src/` | Código-fonte da API |
| `package.json` | Dependências e scripts do projeto |
| `package-lock.json` | Versões resolvidas das dependências |
| `tsconfig.json` | Configuração do compilador TypeScript |
| `prisma/schema.prisma` | Esquema do banco de dados |
| `prisma/migrations/` | Migrações do banco, quando criadas |
| `.env.example` | Modelo das variáveis de ambiente, sem segredos |
| `Dockerfile` | Instruções de construção da imagem da aplicação |
| `compose.yaml` | Definição dos serviços de contêiner |
| `.github/workflows/` | Workflows de integração contínua, quando criados |
| `.gitignore` | Arquivos que não devem ser versionados |
| `README.md` | Documentação do projeto |
| Arquivos de ESLint e Prettier | Configurações de análise e formatação, quando criados |
| Arquivos de testes | Testes automatizados, quando criados |

A existência de um item nesta lista não garante que ele já esteja implementado no repositório.

## Controle de mudanças

As mudanças devem ser desenvolvidas em branches próprias e registradas por commits com mensagens descritivas. Quando aplicável, devem ser revisadas por Pull Requests antes da integração à branch `main`.

Exemplos de nomes de branches:

- `docs/readme`
- `feature/auth`
- `feature/notes`
- `fix/docker-config`
- `ci/typecheck-lint-format`

## Configuração e execução

As instruções definitivas de instalação, configuração de variáveis de ambiente, banco de dados e execução serão documentadas após a validação dos respectivos arquivos e comandos.

**Segurança:** arquivos `.env` com credenciais reais não devem ser enviados ao Git. Utilize `.env.example` apenas como modelo, sem segredos.

## Situação das entregas

A implementação e as verificações serão realizadas gradualmente, de acordo com os conteúdos e atividades da disciplina.
