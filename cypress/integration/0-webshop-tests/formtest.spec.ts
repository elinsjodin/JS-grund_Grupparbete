describe("Test form inputs and validation", () => {
  it("should test form input fields", () => {
    cy.visit("/pages/checkout.html");
    cy.get("#country-select").select("Sweden");
    cy.get("#payment-method-select").select("Card");
  });
  it("should test form submit and validation, should return validation error since required fields are selected", () => {
    cy.visit("/pages/checkout.html");
    cy.get(".btn-confirm").click();
  });
});
