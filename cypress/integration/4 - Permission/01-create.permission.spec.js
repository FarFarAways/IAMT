describe("Create Permission", () => {
    
    beforeEach(() => {
        cy.watchApi();
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
        it("Click Permission Menu", () => {
            
            cy.get(':nth-child(7) > .sc-bxivhb').contains("ตำแหน่ง").click()
            
        });
    });