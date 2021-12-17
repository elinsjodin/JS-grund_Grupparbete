describe("testing functionality add to cart", () => {
  it("should let user click on 'Add to cart' button and see increased quantity in cart", () => {
    cy.visit("/pages/productpage.html");

    cy.reload();

    cy.get(".product-div").find("img").first().click();

    cy.url().should("eq", "http://localhost:1234/pages/details.html?id=1");

    cy.get("#add-to-cart-btn").click();
  });
});
