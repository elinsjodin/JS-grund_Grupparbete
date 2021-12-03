describe("teting functionality and navigation for product page", () => {
  it("should let user click on link and then be redirected to specific details page", () => {
    cy.visit("/pages/productpage.html");

    cy.get("#detailsLink").click();

    cy.url().should(
      "eq",
      "http://localhost:1234/pages/pages/details.html?id=1"
    );
  });
  it("should let user click on name of product and then be redirected to specific details page", () => {
    cy.visit("/pages/productpage.html");

    cy.get("#productName").click();

    cy.url().should(
      "eq",
      "http://localhost:1234/pages/pages/details.html?id=1"
    );
  });
});
