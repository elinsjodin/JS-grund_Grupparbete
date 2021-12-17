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

//   cy.get(".navbar-logo-desktop").click()
//   cy.url().should("eq", "http://localhost:1234/pages/index.html");

//   describe("testing functionality and navigation for menu bar", () => {
//     beforeEach(() => {
//       cy.visit("http://localhost:1234");
//     });

//     it("should click on 'shop' link in menu and navigate to productpage", () => {
//       cy.get("div#hamburger-btn").click();
//       cy.get("ul#dropdown-menu").children().should("have.length", 4);
//       cy.get("ul li").contains("Shop").click();
//       cy.url().should("eq", "http://localhost:1234/pages/productpage.html");
//     });

//     it("should find menu button and navigate back to homepage", () => {
//       cy.get("div#hamburger-btn").click();
//       cy.get("ul#dropdown-menu").children().should("have.length", 4);
//       cy.get("ul li").contains("Home").click();
//       cy.url().should("eq", "http://localhost:1234/index.html");
//     });

//     it("find menu button and navigate to the aboutpage", () => {
//       cy.get("div#hamburger-btn").click();
//       cy.get("ul#dropdown-menu").children().should("have.length", 4);
//       cy.get("ul li").contains("About").click();
//     });

//     it("find menu button and navigate to the accountpage", () => {
//       cy.get("div#hamburger-btn").click();
//       cy.get("ul#dropdown-menu").children().should("have.length", 4);
//       cy.get("ul li").contains("Account").click();
//     });
