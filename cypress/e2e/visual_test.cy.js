describe('Visual test - Product Card', () => {
  it('loads product card and captures snapshot', () => {
    // ✅ Update this to the actual port that `serve` shows in the terminal (e.g., 3000)
    cy.visit('http://localhost:3000');
    
    // wait for elements to load (optional)
    cy.wait(1000);

    // Take Percy snapshot
    cy.percySnapshot('Product Card UI');
  });
});
