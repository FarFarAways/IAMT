describe("Create Branch", () => {
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
    it("Click Create Branch", () => {
        cy.get('button').contains('เพิ่มสาขา').click()
    }); 
    // it("Add Cover Image", () => {

    // });
    it("Typing Title Name Branch", () => {
        cy.get(':nth-child(1) > .col-8 > .w-100').type('Branchtest123')
            .should('have.value', 'Branchtest123');
    });
    
    // it("Select Time Start Promotion", () => {

    // });
    // it("Select Time End Promotion", () => {

    // });
    it("Typing Description Branch", () => {
        cy.get(':nth-child(2) > .col-8 > .w-100').type('Hakuna Matataya')
            .should('have.value', 'Hakuna Matataya');
    });
    it("Typing Tel Num", () => {
        cy.get(':nth-child(3) > .col-8 > .w-100').type('088-333-1234')
            .should('have.value', '088-333-1234');
    });
    // it("Add Thumbnail Image", () => {

    // });
    
    it("Submit", () => {
        cy.get('.form-submit > div').contains('เพิ่ม').click()
    });
    // it("Check Create Branch By Search", () => {
            
        // });
});
