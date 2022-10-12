it("퀴즈페이지로 이동", () => {
  cy.visit("http://localhost:3000");
  cy.get("div").click({ multiple: true });
  cy.get("section");
});
export {};
