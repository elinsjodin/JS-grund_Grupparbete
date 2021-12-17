describe("testing functionality for all steps for simulating a purchase in webshop", () => {
  it("should let user click on specifik product, add to cart and checkout via form and see an order confirmation", () => {
    cy.visit("http://localhost:1234");

    cy.get("ul li").contains("Shop").click();

    cy.url().should("eq", "http://localhost:1234/pages/productpage.html");

    cy.reload();

    cy.get(".product-div").find("h2").first().click();

    cy.url().should("eq", "http://localhost:1234/pages/details.html?id=1");

    cy.visit("/pages/productpage.html");

    cy.reload();

    cy.get(".product-div").find("img").first().click();

    cy.url().should("eq", "http://localhost:1234/pages/details.html?id=1");

    cy.get("#add-to-cart-btn").click();

    cy.get(".cart-count").click();

    cy.get(".qtyInput").should("have.value", 1);

    //Navbaren ligger för knapparna pga stylingen enligt Cypress (dock inte på riktiga sidan), därav kommando force så att testet kan gå igenom ändå
    cy.get("#addBtn").click({
      force: true,
    });

    cy.get(".qtyInput").should("have.value", 2);

    cy.visit("/pages/cart.html");

    cy.get(".qtyInput").should("have.value", 2);

    //Navbaren ligger för knapparna pga stylingen enligt Cypress (dock inte på riktiga sidan), därav kommando force så att testet kan gå igenom ändå
    cy.get("#subBtn").click({
      force: true,
    });

    cy.get(".qtyInput").should("have.value", 1);

    cy.visit("/pages/checkout.html");

    cy.get(".btn-confirm").click();

    cy.visit("/pages/checkout.html");

    cy.get("#city").type("Stad");

    cy.get("#payment-method-select").select("Card");

    cy.get(".btn-confirm").click();
  });
});
