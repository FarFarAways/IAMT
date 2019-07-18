describe("Login", () => {
    context("login with valid user", () => {
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
    });

    context("login with invalid user", () => {
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
          cy.get('[type="password"]').type('12345')
          .should('have.value', '12345');
        });
        it("Login", () => {
          cy.get('#SignInButt').contains("เข้าสู่ระบบ").click()
        });
      });
  });
  