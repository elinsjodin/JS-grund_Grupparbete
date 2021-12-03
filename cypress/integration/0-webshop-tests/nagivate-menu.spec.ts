describe("Test if you can navigate to menu through homepage", () => {
    beforeEach(() => {
        cy.visit("http://localhost:1234");
    });

    it("find menu button and navigate to the productpage", () => {
        cy.get("div#hamburger-btn").click();
        cy.get("ul#dropdown-menu").children().should("have.length", 4);
        cy.get("ul li").contains("Shop").click();
        cy.url().should("eq", "http://localhost:1234/pages/productpage.html");
    });

    it("find menu button and navigate to the homepage", () => {
        cy.get("div#hamburger-btn").click();
        cy.get("ul#dropdown-menu").children().should("have.length", 4);
        cy.get("ul li").contains("Home").click();
        cy.url().should("eq", "http://localhost:1234/index.html");
    });

    it("find menu button and navigate to the aboutpage", () => {
        cy.get("div#hamburger-btn").click();
        cy.get("ul#dropdown-menu").children().should("have.length", 4);
        cy.get("ul li").contains("About").click();
    });

    it("find menu button and navigate to the accountpage", () => {
        cy.get("div#hamburger-btn").click();
        cy.get("ul#dropdown-menu").children().should("have.length", 4);
        cy.get("ul li").contains("Account").click();
    });
});