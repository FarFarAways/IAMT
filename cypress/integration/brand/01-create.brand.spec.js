describe("Create Brand", () => {
   
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
            cy.get(':nth-child(3) > .sc-htpNat').contains("แบรนด์").click()
        });
        it("Check Page Brand", () => {
            cy.get('h1').contains("Brands")
        });
        it("Click Create Brand", () => {
            cy.get('.AddBrand').contains("เพิ่มแบรนด์").click()
        });
        it("Typing Title Name Brand", () => {

            cy.get(':nth-child(1) > .col-8 > .w-100').type('IAMCO')
                .should('have.value', 'IAMCO');
        });
        it("Add Cover Image", () => {

        });
        it("Typing Description Brand", () => {

            cy.get(':nth-child(2) > .col-8 > .w-100').type('Hakuna Matata')
                .should('have.value', 'Hakuna Matata');
        });
        it("Click Create", () => {
            cy.wait(2000);
            cy.get('.form-submit > div').contains("เพิ่ม").click({force:true})
        });
        it("Check Create Brand By Search", () => {
            
        });
    });
