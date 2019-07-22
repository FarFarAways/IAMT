describe("Edit Brand", () => {
    beforeEach(() => {
        cy.restoreLocalStorage();
      });
      afterEach(() => {
        cy.saveLocalStorage();
      });
    it("Go to login page", () => {
        cy.visit(
            "https://intern.pxmer.com/login"
        );
    });
    it("Typing Username", () => {
        // cy.get('.user-info > .fa').click();
        // cy.get('.user-info-wrapper > div > a').click()
        cy.get('[type="text"]').type('user1')
            .should('have.value', 'user1');
    });
    it("Typing Password", () => {
        cy.get('[type="password"]').type('1234')
            .should('have.value', '1234');
    });
    it("Login", () => {
        cy.get('#SignInButt').contains("เข้าสู่ระบบ").click()
    });
    it("Click Brand Menu", () => {
        cy.get(':nth-child(3) > .sc-bxivhb').contains("แบรนด์").click()
    });
    it("Check Page Brand", () => {
        cy.get('h1').contains("Brands")
    });
    // it("Search Brand", () => {
        
    // });
    it("Click edit Brand", () => {
        cy.get(':nth-child(1) > .card-body > .row > .sc-kAzzGY > .editbrand > .hiddenLink').contains("Edit").click()
    });
    it("Edit Description", () => {
        cy.get(':nth-child(2) > .col-8 > .w-100').clear().type('user123')
    });
    it("Click Submit", () => {
        cy.get('.form-submit > div').contains("แก้ไข").click()
    });
    // it("Check Edit Brand By Search", () => {
        
    // });
});
