describe("Test if you can navigate to menu through homepage", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });

    it("find menu button and navigate to the product page", () => {
        cy.get("div#hamburger-btn").click();
        cy.get("ul#dropdown-menu").children().should("have.length", 4);
        cy.get("ul li").contains("Shop").click();
    });
});