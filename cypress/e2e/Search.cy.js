/*
describe('Chapt 3 - Search with ID of cy', () => {
    it('Case 1 - Search', () => {
        cy.visit('https://automationexercise.com/products')
        cy.get('#search_product').type('Polo')
        cy.get('#submit_search > .fa').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.product-information > h2').contains('Polo')
    })
})
*/
before(()=>{
    cy.log('This is before test')
})
after(()=>{
    cy.log('this an after text')
})

beforeEach(()=>{
    cy.visit('https://automationexercise.com/products')

})
describe('Chapt 4 - Search with class, ID, name and placeholder', () => {
    it('case 1', ()=>{
        cy.get('#search_product').type('ID, ') //busqueda por ID
        cy.get('.form-control.input-lg').type('clase ') //busqueda por clase
        cy.get('[name="search"]').type('nombre') //busqueda por nombre
        cy.get('[placeholder="Search Product"]').clear().type('place holder, limpiado') //con limpiado
    })
})

describe('check boxes', ()=> {
    it('case 1 - ', ()=> {

    })
}) 