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
    it("Click Brand", () => {
        cy.wait(2000)
        cy.get('.sc-ifAKCX > :nth-child(2) > :nth-child(1)').click()
    });
    it("Check Page Promotions", () => {
        cy.get('h1').contains("Promotions")
    });
    // it("Search Brand", () => {
       
    // });
    it("Click Edit Promotion", () => {
        cy.get(':nth-child(1) > .card-body > .row > .sc-eNQAEJ > .hiddenLink').click()
    });
    it("Click Delete", () => {
        cy.get('.form-delete > div').contains('Delete').click()
    });
    it(" Click Submit", () => {
       
        cy.get('.sc-VigVT > :nth-child(1)').contains('ยืนยัน').click()
    });
    // it("Check Edit Brand By Search", () => {
        
    // });
});
