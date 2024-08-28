describe("Functionality: Search", () => {
  beforeEach(() => { 
    cy.visit("https://www.kawasakibrasil.com/pt-br/")
  })
   
    it("TC004.001 - Search by valid name", () => {      
        //Given that I am on the Home page (Assertion of the site's Home page)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
        
        //And type the name "Ninja" in the search bar.
        //When I click on the magnifying glass to perform the Search
        cy.get('#searchboxheader').type('Ninja{enter}')
        
        //Then there are several links to Motos Ninja below.(Assertion)
        cy.get('#resultsInfo > .headFour').should('have.text', "Resultados da Busca")
    })

    
    it("TC004.002 - Search for Invalid Name", () => {      
        //Given that I am on the Home page (Assertion of the site's Home page)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
        
        //And type the name "Ninjja" in the search bar.
        //When I click on the magnifying glass to perform the Search
        cy.get('#searchboxheader').type('Ninjja{enter}')
        
        //Then an error message appears (Assertion)
        cy.get('.col-sm-12 > .headTwo').should('have.text', "Nenhum resultado encontrado") 
    })
        
})