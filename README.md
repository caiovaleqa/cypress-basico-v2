# Testes Automatizados com cypress

Testes automatizados utilizando o cypress

## Pre-requirements

It is required to have Node.js and npm installed to run this project.

> I used versions `v16.13.2` and `8.3.2` of Node.js and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

> **Note:** Before running the tests, make a copy of the `cypress.env.example.json` file as `cypress.env.json`, which in the real world, you would update with valid credentials.
>
> The `cypress.env.json` file is included on [`.gitignore`](./.gitignore) and you're safe that confidential info won't be versioned.

É possível rodar os testes simulando versão desktop ou mobile viewport

### Desktop

Executar `npm test` para rodar os testes em headless mode no desktop viewport.

Executar `npm run cy:open` para rodar o Cypress em interactive mode no desktop viewport.

### Mobile

Executar `npm run test:mobile` para rodar os testes em headless mode no mobile viewport.

Executar `npm run cy:open` para rodar o Cypress em interactive mode no mobile viewport.

## Support this project

If you want to support this project, leave a ⭐.

___

This project was created with 💚 by [Walmyr](https://walmyr.dev).
