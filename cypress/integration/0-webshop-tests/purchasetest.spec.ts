describe("Test to see if navigating a full purchase is doable", () => {

    it("find menu and navigate to product page", () =>{
        cy.visit("/");

        cy.get("div#hamburger-btn").click();
        cy.get("ul#dropdown-menu").children().should("have.length", 4);
        cy.get("ul li").contains("Shop").click();
        cy.url().should("eq", "http://localhost:1234/pages/productpage.html");
    });

    it("from productpage navigate to detailspage", () => {
        cy.visit("http://localhost:1234/pages/productpage.html");

        cy.get("p#detailsLink").first().click();

        cy.url().should("eq", "http://localhost:1234/pages/details.html?id=1");
    });

    it("from details find button to add item to cart and navigate to cart", () => {
        cy.visit("http://localhost:1234/pages/details.html?id=1");

        cy.get("button#add-to-cart-btn").click();
        cy.get("button.cart-button").children(".item-counter").should("have.text", "1");
        cy.get("button.cart-button").click();

        cy.url().should("eq", "http://localhost:1234/pages/cart.html");

        cy.get("ul li").should("have.length", 1);

        cy.get("button#checkout-button").click();
    });
});