describe("Functionality: Locate a Dealership", () => {
  beforeEach(() => { 
    cy.visit("https://www.kawasakibrasil.com/pt-br/")
  })
   
    it("TC003.001 - Find by Valid Name", () => {      
        //Given that I am on the Home page (Assertion of the site's Home page)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")

        //And click on the “Find a Dealership” link
        cy.get(':nth-child(2) > .nav-link > div.d-none').click()
        
        //And opens the dealer search page (Assertion)
        cy.get('[role="presentation"] > .headTwo').should('have.text', "LOCALIZADOR DE CONCESSIONÁRIAS")       

        //And in the search bar type the Name "Marello Motos - Santos"
        //When I click on the magnifying glass to perform the Search
        cy.get('input#dealerListFilterInput').type('Marello Motos - Santos{enter}')

        //Then the Dealership found will appear below with Name, Address, Contact details and Website (Assertion)
        cy.get('[data-index="18"] > a > .headFive').should('have.text', "Marello Motos - Santos")
    })

    
    it("TC003.002 - Locate by valid zip code", () => {      
        //Given that I am on the Home page (Assertion of the site's Home page)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")

        //And click on the “Find a Dealership” link
        cy.get(':nth-child(2) > .nav-link > div.d-none').click()
        
        //And opens the dealer search page (Assertion)
        cy.get('[role="presentation"] > .headTwo').should('have.text', "LOCALIZADOR DE CONCESSIONÁRIAS")       

        //And in the search bar type the zip code "11015-003"
        //When I click on the magnifying glass to perform the Search
        cy.get('input#dealerListFilterInput').type('11015-003{enter}')

        //Then the Dealership found will appear below with Name, Address, Contact details and Website (Assertion)
        cy.get('[data-index="18"] > a > .headFive').should('have.text', "Marello Motos - Santos")      
    })

    
    it("TC003.003 - Find by Invalid Name", () => {      
        //Given that I am on the Home page (Assertion of the site's Home page)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")

        //And click on the “Find a Dealership” link
        cy.get(':nth-child(2) > .nav-link > div.d-none').click()
        
        //And opens the dealer search page (Assertion)
        cy.get('[role="presentation"] > .headTwo').should('have.text', "LOCALIZADOR DE CONCESSIONÁRIAS")       

        //And in the search bar type the Name "Marcello Motos"
        //When I click on the magnifying glass to perform the Search
        cy.get('input#dealerListFilterInput').type('Marcello Motos{enter}')

        //Then an error message appears below (Assertion)
        cy.get('#dealerListFilterErr').should('have.text', "Não foi possível localizar nenhuma Concessionária")      
    })

    
    it("TC003.004	- Find by invalid zip code", () => {      
        //Given that I am on the Home page (Assertion of the site's Home page)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")

        //And click on the “Find a Dealership” link
        cy.get(':nth-child(2) > .nav-link > div.d-none').click()
        
        //And opens the dealer search page (Assertion)
        cy.get('[role="presentation"] > .headTwo').should('have.text', "LOCALIZADOR DE CONCESSIONÁRIAS")       

        //And in the search bar type the zip code "11015-013"
        //When I click on the magnifying glass to perform the Search
        cy.get('input#dealerListFilterInput').type('11015-013{enter}')

        //Then an error message appears below (Assertion)
        cy.get('#dealerListFilterErr').should('have.text', "Não foi possível localizar nenhuma Concessionária")      
    })
        
})