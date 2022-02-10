describe("test1", () => {
  it("Opens website", () => {
    cy.visit("http://localhost:3002");
  });
});

describe("test2", () => {
  it("Gets value for hindi", () => {
    cy.get("select").first().select("Hindi").should("have.value", "hindi");
  });
});
