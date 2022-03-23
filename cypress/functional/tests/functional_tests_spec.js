describe("Login screen", () => {
  it("Shound visit the page and assert title and label 'Não tem conta?'", () => {
    cy.visit("/");
    cy.title().should("be.equal", "Calculadora de Graus Dia");
    cy.get('[data-test="label-acompanhe-plantacao"]').should(
      "have.text",
      "Acompanhe sua plantação"
    );
  });
});

describe("User action tests", () => {
  before(() => {
    cy.visit("/");
  });

  it("Login a user", () => {
    cy.get('[placeholder="Email"]').type("yuri@gmail.com");
    cy.get('[placeholder="Senha"]').type("123456");
    cy.get("form > button").click();
  });

  it("Add a culture", () => {
    cy.visit("/dashboard"); // remover isso depois de corrigir erro de login
    cy.get('[data-test="label-dashboard"]').should("contain", "Dashboard");
    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="selecionar-culturas"]').select("Arroz");
    cy.get('[data-test="descricao"]').type("Fazenda Dona Benta");
    cy.get('[data-test="data"]').type("2022-01-01");
    cy.get('[data-test="localizacao"]').type("Florianopolis");
    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="label-descricao-cultura"]').should(
      "contain",
      "Fazenda Dona Benta"
    );
  });

  it("Edite a culture", () => {
    cy.get('[data-test="button-edit"] > svg').click();
    cy.get('[data-test="selecionar-culturas-edit"]').select("Milho");
    cy.get('[data-test="descricao-edit"]').clear();
    cy.get('[data-test="descricao-edit"]').type("Fazenda Seu João");
    cy.get('[data-test="data-edit"]').clear();
    cy.get('[data-test="data-edit"]').type("2022-02-01");
    cy.get('[data-test="localizacao-edit"]').clear();
    cy.get('[data-test="localizacao-edit"]').type("Sao Jose");
    cy.get('[data-test="button-adicionar-cultura-edit"]').click();
    cy.get('[data-test="label-descricao-cultura"]').should(
      "contain",
      "Fazenda Seu João"
    );
  });

  it("Delete a culture", () => {
    cy.get('[data-test="button-delete"] > svg').click();
    cy.get('[data-test="label-descricao-cultura"]').should("not.exist");
  });

  it("Add five cultures", () => {
    cy.visit("/dashboard"); // remover isso depois de corrigir erro de login
    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="selecionar-culturas"]').select("Arroz");
    cy.get('[data-test="descricao"]').type("Fazenda Dona Benta");
    cy.get('[data-test="data"]').type("2022-01-01");
    cy.get('[data-test="localizacao"]').type("Florianopolis");
    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="label-descricao-cultura"]').should(
      "contain",
      "Fazenda Dona Benta"
    );

    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="selecionar-culturas"]').select("Arroz");
    cy.get('[data-test="descricao"]').type("Fazenda Dona Maria");
    cy.get('[data-test="data"]').type("2022-01-01");
    cy.get('[data-test="localizacao"]').type("Florianopolis");
    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="label-descricao-cultura"]').should(
      "contain",
      "Fazenda Dona Maria"
    );

    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="selecionar-culturas"]').select("Arroz");
    cy.get('[data-test="descricao"]').type("Fazenda Dona Joana");
    cy.get('[data-test="data"]').type("2022-01-01");
    cy.get('[data-test="localizacao"]').type("Florianopolis");
    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="label-descricao-cultura"]').should(
      "contain",
      "Fazenda Dona Joana"
    );

    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="selecionar-culturas"]').select("Arroz");
    cy.get('[data-test="descricao"]').type("Fazenda Tio José");
    cy.get('[data-test="data"]').type("2022-01-01");
    cy.get('[data-test="localizacao"]').type("Florianopolis");
    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="label-descricao-cultura"]').should(
      "contain",
      "Fazenda Tio José"
    );

    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="selecionar-culturas"]').select("Arroz");
    cy.get('[data-test="descricao"]').type("Fazenda Seu Juarez");
    cy.get('[data-test="data"]').type("2022-01-01");
    cy.get('[data-test="localizacao"]').type("Florianopolis");
    cy.get('[data-test="button-adicionar-cultura"]').click();
    cy.get('[data-test="label-descricao-cultura"]').should(
      "contain",
      "Fazenda Seu Juarez"
    );
  });

  it("Edit two cultures", () => {
    cy.get(
      ':nth-child(2) > .containerActions > [data-test="button-edit"] > svg'
    ).click();
    cy.get('[data-test="selecionar-culturas-edit"]').select("Milho");
    cy.get('[data-test="descricao-edit"]').clear();
    cy.get('[data-test="descricao-edit"]').type("Fazenda do Tio Zé");
    cy.get('[data-test="data-edit"]').clear();
    cy.get('[data-test="data-edit"]').type("2022-02-01");
    cy.get('[data-test="localizacao-edit"]').clear();
    cy.get('[data-test="localizacao-edit"]').type("Sao Jose");
    cy.get('[data-test="button-adicionar-cultura-edit"]').click();
    cy.get('[data-test="label-descricao-cultura"]').should(
      "contain",
      "Fazenda do Tio Zé"
    );

    cy.get(
      ':nth-child(4) > .containerActions > [data-test="button-edit"] > svg'
    ).click();
    cy.get('[data-test="selecionar-culturas-edit"]').select("Milho");
    cy.get('[data-test="descricao-edit"]').clear();
    cy.get('[data-test="descricao-edit"]').type("Fazenda da Thais");
    cy.get('[data-test="data-edit"]').clear();
    cy.get('[data-test="data-edit"]').type("2022-02-01");
    cy.get('[data-test="localizacao-edit"]').clear();
    cy.get('[data-test="localizacao-edit"]').type("Sao Jose");
    cy.get('[data-test="button-adicionar-cultura-edit"]').click();
    cy.get('[data-test="label-descricao-cultura"]').should(
      "contain",
      "Fazenda da Thais"
    );
  });
});
