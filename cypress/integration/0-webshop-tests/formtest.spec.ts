describe("Test for form inputs and validation", () => {
  it("should test form input fields", () => {
    cy.visit("/pages/checkout.html");
    cy.get("#country-select").select("Sweden");
    cy.get("#first-name").type("Hello, World{enter}");
    cy.get("#last-name").type("Hello, World{enter}");
    cy.get("#adress").type("Hello, World{enter}");
    cy.get("#postal-code").type("Hello, World{enter}");
    cy.get("#city").type("Hello, World{enter}");
    cy.get("#email").type("npl@email.com{enter}");
    cy.get("#phone").type("xxx-xxxxxxx{enter}");
    cy.get("#discount-code").type("Hello, World{enter}");
    cy.get("#payment-method-select").select("Card");
    cy.get(".btn-confirm").click();
  });
  it("should test form submit and validation, should return validation error since no fields are filled in", () => {
    cy.visit("/pages/checkout.html");
    cy.get(".btn-confirm").click();
  });
});
