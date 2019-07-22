import { generate_random_string } from '../../support/commands.js';
describe("Create Promotion", () => {
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
    it("Click Create Promotion", () => {
        cy.get('.red').contains('เพิ่มโปรโมชั่น').click()
    }); 
    // it("Add Cover Image", () => {

    // });
    it("Typing Title Name Promotion", () => {
        var random_string = generate_random_string(4);
        cy.get(':nth-child(1) > .col-8 > .w-100').type(random_string)
           
    });
    // it("Select Time Start Promotion", () => {

    // });
    // it("Select Time End Promotion", () => {

    // });
    it("Typing Description Promotion", () => {
        var random_string = generate_random_string(4);
        cy.get(':nth-child(2) > .col-8 > .w-100').type(random_string)
            
    });
    // it("Add Thumbnail Image", () => {

    // });
    it("Add Promotion", () => {
      
        cy.get('.sc-cvbbAY').click({force : true})
        cy.get(':nth-child(1) > input').click()
    });
    it("Submit", () => {
        cy.get('.form-submit > div').contains('เพิ่ม').click()
    });
    // it("Check Create Promotion By Search", () => {
            
        // });
});
