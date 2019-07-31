const graphQLEndpoint = "https://intern.pxmer.com/graphql"
let LOCAL_STORAGE_MEMORY = {};

export const generate_random_string = string_length => {
  let random_string = '';
  let random_ascii;
  for (let i = 0; i < string_length; i++) {
    random_ascii = Math.floor(Math.random() * 25 + 97);
    random_string += String.fromCharCode(random_ascii);
  }
  return random_string;
};

Cypress.Commands.add('saveLocalStorage', () => {
  Object.keys(localStorage).forEach(key => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key];
  });
});

Cypress.Commands.add('restoreLocalStorage', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
  });
});
Cypress.Commands.add('waitForApi', () => {
  cy.server()
    .route('POST', graphQLEndpoint) 
    .as('graphqlData');
  cy.wait('@graphqlData')
    .its('status')
    .should('be', 200);
});

Cypress.Commands.add('watchApi', () => {
  cy.server()
    .route('POST', graphQLEndpoint)
    .as('graphqlData');
});

Cypress.Commands.add('waitApi', () => {
  cy.wait('@graphqlData')
    .its('status')
    .should('be', 200);
});