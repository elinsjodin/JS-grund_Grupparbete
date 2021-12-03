describe("teting functionality and navigation for product page", () => {
  it("should let user click on link and then be redirected to specific details page", () => {
    cy.visit("/pages/productpage.html");

    cy.get("#detailslink").click();

    cy.url().should("eq", "http://localhost:1234/pages/pages/details.html");
  });
});
