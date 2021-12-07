describe("test for adding and subtracting amount of items in cart", () => {
  it("should increment number of items in input field", () => {
    cy.visit("/");

    cy.get("#itemInput").should("have.value", "");

    cy.get("#addbtn").click();

    cy.get("#itemInput").should("have.value", 1);
  });
  it("should decrement number of items in input field", () => {
    cy.visit("/");

    cy.get("#itemInput").should("have.value", 1);

    cy.get("#subBtn").click();

    cy.get("#itemInput").should("have.value", "");
  });
});
