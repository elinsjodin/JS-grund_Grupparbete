describe("testing functionality and navigation for menu bar", () => {
  it("should click on 'shop' link in menu nav bar and navigate to productpage", () => {
    cy.visit("http://localhost:1234");
    cy.get("ul#nav-desktop").children().should("have.length", 4);
    cy.get("ul li").contains("Shop").click();
    cy.url().should("eq", "http://localhost:1234/pages/productpage.html");
  });
  it("should click on 'No Label Perfume' link in menu nav bar and navigate back to homepage", () => {
    cy.get(".navbar-logo-desktop").click();
    cy.url().should("eq", "http://localhost:1234/index.html");
  });
});
