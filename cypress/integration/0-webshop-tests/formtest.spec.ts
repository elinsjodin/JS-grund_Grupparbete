describe("Test form inputs and validation", () => {
  it("should test form input fields", () => {
    cy.visit("/pages/checkout.html");
    cy.get("#country-select").select("Sweden");
    cy.get("#first-name").type("Hello, World{enter}");
  });
  it("should test form submit and validation, should return validation error since no fields are filled in", () => {
    cy.visit("/pages/checkout.html");
    cy.get(".btn-confirm").click();
  });
});
