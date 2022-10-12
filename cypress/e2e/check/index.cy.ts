it("퀴즈페이지로 이동", () => {
  cy.visit("http://localhost:3000");
  cy.get("div").click({ multiple: true });
  cy.get("section");
});
it("퀴즈디테일page", () => {
  cy.visit(`http://localhost:3000/quiz/detail/25}`);
  cy.get("button").click();
  cy.get("div");
  cy.get("section");
  cy.get("div");
  cy.get("h3");
  cy.get("pre");
});
export {};
