describe('Eats App', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    })

    const nameInput = () => cy.get(`input[id='name-input']`);
    const orderButton = () => cy.get("button[id='order-button']");

    it('Can I type my name in?', () => {
        nameInput()
            .should('have.value', '')
            .type('Bret')
            .should('have.value', 'Bret')

    })
    it('Can I have all the toppings?', () => {
        cy.get(`[type='checkbox']`).check()
    })
    it('Order button can submit my order?', () => {
        orderButton().should('be.disabled')
        nameInput().type('Bret')
        cy.get(`[type='radio']`).check()
        cy.get('select').select('small')
        orderButton().should('not.be.disabled')
        orderButton().click()
    })
})