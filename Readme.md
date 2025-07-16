# Testes Automatizados – Projeto Interno

Este repositório contém scripts de automação de testes desenvolvidos com Playwright e integração com scripts auxiliares em Python e JavaScript.  
Os testes são específicos para o projeto interno da empresa e utilizam locators e fluxos que funcionam exclusivamente nesse ambiente.

## 📁 Estrutura do Projeto

- `actions/`: componentes e ações reutilizáveis para facilitar a manutenção dos testes.
- `e2e/`: testes ponta a ponta que validam fluxos completos do sistema.
- `support/`: scripts auxiliares como requisições de inclusão, rejeição e assinatura de documentos.

## 📄 Descrição dos Arquivos

### `actions/`
| Arquivo           | Descrição                                                        |
|-------------------|----------------------------------------------------------------- |
| `Components.js`   | Componentes do sistema reutilizáveis nos testes.                 |
| `DocumentForm.js` | Manipula formulários de documentos.                              |
| `Dossie.js`       | Ações relacionadas ao envio de documentos assinados para dossiês.|
| `Edit.js`         | Edita informações de documentos.                                 |
| `GoTo.js`         | Navegação entre páginas do sistema.                              |
| `Login.js`        | Realiza login no sistema com credenciais válidas.                |
| `SaveDocument.js` | Salva documentos após preenchimento de dados.                    |
| `Import.js`       | Importação de documentos para o sistema.                         |
| `Signatory.js`    | Gerencia informações de signatários.                             |
| `Signature.js`    | Ações relacionadas à assinatura de documentos.                   |

### `e2e/`
| Arquivo                   | Descrição                                                |
|---------------------------|----------------------------------------------------------|
| `sign-assinatura.spec.js` | Testa os fluxos de assinaturas de documentos.            |
| `sign-editar.spec.js`     | Testa a edição de documentos assinados.                  |
| `sign-inclusao.spec.js`   | Testa a inclusão de documentos para assinatura.          |
| `sign-login.spec.js`      | Testa o login e autenticação no sistema de assinatura.   |

### `support/`
| Arquivo                  | Descrição                                                 |
|--------------------------|-----------------------------------------------------------|
| `inclusionOrderRequest.js` | Requisição de inclusão com ordenação de assinaturas.    |
| `inclusionRequest.js`    | Requisição de inclusão de documentos para assinatura.     |
| `index.js`               | Arquivo de entrada para utilitários ou configurações.     |
| `rejSignRequest1.py`     | Script Python para rejeição de assinatura.                |
| `request_inclusion.py`   | Script Python para inclusão de documentos.                |
| `request_order_sign.py`  | Script Python para ordenação de assinaturas.              |
| `request_rej_sign.py`    | Script Python para rejeição de assinatura.                |
| `toSignRequest1.py`      | Script Python para envio de documentos para assinatura.   |

