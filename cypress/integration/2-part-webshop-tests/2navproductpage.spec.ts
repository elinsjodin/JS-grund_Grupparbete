describe("teting functionality and navigation for product page", () => {
  it("should let user click on product image and be redirected to specific details page", () => {
    cy.visit("/pages/productpage.html");

    cy.reload();

    cy.get(".product-div").find("img").first().click();

    cy.url().should("eq", "http://localhost:1234/pages/details.html?id=1");
  });
  it("should let user click on name of product and be redirected to specific details page, and also add to cart functionality", () => {
    cy.visit("/pages/productpage.html");

    cy.reload();

    cy.get(".product-div").find("h2").first().click();

    cy.url().should("eq", "http://localhost:1234/pages/details.html?id=1");

    cy.get("#add-to-cart-btn").click();
  });
});
