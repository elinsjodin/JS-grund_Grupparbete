describe("test for adding and subtracting amount of items in cart", () => {
  it("should increment/decrement number of items in input field", () => {
    cy.visit("/pages/productpage.html");

    cy.reload();

    cy.get(".product-div").find("h2").first().click();

    cy.url().should("eq", "http://localhost:1234/pages/details.html?id=1");

    cy.get("#add-to-cart-btn").click();

    cy.get(".cart-count").click();

    cy.get(".qtyInput").should("have.value", 1);

    cy.get("#addBtn").click({
      force: true,
    });

    cy.get(".qtyInput").should("have.value", 2);

    cy.visit("/pages/cart.html");

    cy.get(".qtyInput").should("have.value", 2);

    cy.get("#subBtn").click({
      force: true,
    });

    cy.get(".qtyInput").should("have.value", 1);
  });
});
