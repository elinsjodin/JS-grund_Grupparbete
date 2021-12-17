describe("Test form inputs and validation", () => {
  it("should test form submit validation, should return validation error since not all required fields were selected", () => {
    cy.visit("/pages/checkout.html");
    cy.get(".btn-confirm").click();
  });
  it("should test form input fields and that purchase went through upon submit", () => {
    cy.visit("/pages/checkout.html");
    cy.get("#city").type("Stad");
    cy.get("#payment-method-select").select("Card");
    cy.get(".btn-confirm").click();
  });
});
