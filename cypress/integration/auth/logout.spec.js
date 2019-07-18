describe("Logout", () => {
   
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
      it("Click Login", () => {
        cy.get('#SignInButt').contains("เข้าสู่ระบบ").click()
      });
      it("Click Logout", () => {
         cy.get('.user-info > .fa').click();
        cy.get('.user-info-wrapper > div > a').contains("logout").click()
      });
   

    
  });
  