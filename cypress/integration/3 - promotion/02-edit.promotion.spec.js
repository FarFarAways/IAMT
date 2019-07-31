import { generate_random_string } from '../../support/commands.js';
describe("Edit Promotion", () => {
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
    it("Click Brand", () => {
        
        cy.get('.sc-ifAKCX > :nth-child(2) > :nth-child(1)').click()
    });
    it("Check Page Promotions", () => {
        cy.get('h2').contains("Promotions")
    });
    // it("Search Brand", () => {
       
    // });
    it("Click Edit Promotion", () => {
        cy.get('.hiddenLink').click()
    });
    it("Edit Description", () => {
        var random_string = generate_random_string(4);
        cy.get(':nth-child(2) > .col-8 > .w-100').clear().type(random_string)
    });
    it("Click Submit", () => {
        cy.get('.form-submit > div').contains("แก้ไข").click()
    });
    // it("Check Edit Brand By Search", () => {
        
    // });
});
