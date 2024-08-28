describe("Functionality: Motorcycles Menu", () => {
  beforeEach(() => { 
    cy.visit("https://www.kawasakibrasil.com/pt-br/")
  })
   
    it("TC005.001 - 'Urban/Track' Sub-Menu - Ninja Model", () => {      
        //Given that I am on the Home page (Assertion of the site's Home page)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
        cy.wait(1000)
        
        //And I click on the "Motorcycles" Menu
        //When I click on the magnifying glass to perform the Search
        cy.xpath('//*[@id="cat-1"]').click()
        cy.wait(1000)

        //And I click on the "NINJA" option in the "Urban/Track" Sub-Menu
        cy.xpath('//*[@id="nav-tab-1"]').click()
        cy.wait(1000)
        
        //Then a page opens with seven motorcycle models (Assertion)
        cy.xpath('//*[@id="nav-tab-content-1"]/div/div[1]/div[1]/h6').should('have.text', "SUPERSPORT")
        cy.wait(1000)
    })

    
    it("TC005.002 - 'Urban/Adventure' Sub-Menu - Model Z", () => {      
        //Given that I am on the Home page (Assertion of the site's Home page)
        cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
        cy.wait(1000)
        
        //And I click on the "Motorcycles" Menu
        //When I click on the magnifying glass to perform the Search
        cy.xpath('//*[@id="cat-1"]').click()
        cy.wait(1000)

        //And I click on the "Z" option in the "Urban/Adventure" Sub-Menu
        cy.xpath('//*[@id="nav-tab-16"]').click()
        cy.wait(1000)
        
        //Then a page opens with seven motorcycle models (Assertion)
        cy.xpath('//*[@id="nav-tab-content-16"]/div/div[1]/div[1]/h6').should('have.text', "SUPERNAKED")
        cy.wait(1000)
    })


    it("TC005.003	- 'Urban/Adventure' Sub-Menu - Versys Model", () => {      
          //Given that I am on the Home page (Assertion of the site's Home page)
          cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
          cy.wait(1000)
          
          //And I click on the "Motorcycles" Menu
          //When I click on the magnifying glass to perform the Search
          cy.xpath('//*[@id="cat-1"]').click()
          cy.wait(1000)
  
          //And I click on the "VERSYS" option in the "Urban/Adventure" Sub-Menu
          cy.xpath('//*[@id="nav-tab-4"]').click()
          cy.wait(1000)
          
          //Then a page opens with three motorcycle models (Assertion)
          cy.xpath('//*[@id="nav-tab-content-4"]/div/div/div[1]/h6').should('have.text', "ADVENTURE/TOURING")
          cy.wait(1000)
    })


    it("TC005.004 - 'Urban/Adventure' Sub-Menu - Vulcan Model", () => {      
          //Given that I am on the Home page (Assertion of the site's Home page)
          cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
          cy.wait(1000)
          
          //And I click on the "Motorcycles" Menu
          //When I click on the magnifying glass to perform the Search
          cy.xpath('//*[@id="cat-1"]').click()
          cy.wait(1000)

          //And I click on the "VULCAN" option in the "Urban/Adventure" Sub-Menu
          cy.xpath('//*[@id="nav-tab-14"]').click()
          cy.wait(1000)
          
          //Then open a page with a motorcycle model (Assertion)
          cy.xpath('//*[@id="nav-tab-content-14"]/div/div/div[1]/h6').should('have.text', "SPORT CRUISER")
          cy.wait(1000)
    })


    it("TC005.005	- 'Urban' Sub-Menu - Eliminator Model", () => {      
          //Given that I am on the Home page (Assertion of the site's Home page)
          cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
          cy.wait(1000)
          
          //And I click on the "Motorcycles" Menu
          //When I click on the magnifying glass to perform the Search
          cy.xpath('//*[@id="cat-1"]').click()
          cy.wait(1000)

          //And click on the "ELIMINATOR" option in the "Urban" Sub-Menu
          cy.xpath('//*[@id="nav-tab-1002"]').click()
          cy.wait(1000)
          
          //Then open a page with a motorcycle model (Assertion)
          cy.xpath('//*[@id="nav-tab-content-1002"]/div/div/div[1]/h6').should('have.text', "Street Cruiser")
          cy.wait(1000)
    })


    it("TC005.006	- 'Enduro/Off-Road' Sub-Menu - Model KLX", () => {      
          //Given that I am on the Home page (Assertion of the site's Home page)
          cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
          cy.wait(1000)
          
          //And I click on the "Motorcycles" Menu
          //When I click on the magnifying glass to perform the Search
          cy.xpath('//*[@id="cat-1"]').click()
          cy.wait(1000)

          //And I click on the "KLX" option in the "Enduro/Off-Road" Sub-Menu
          cy.xpath('//*[@id="nav-tab-22"]').click()
          cy.wait(1000)
          
          //Then a page opens with two motorcycle models (Assertion)
          cy.xpath('//*[@id="nav-tab-content-22"]/div/div/div[1]/h6').should('have.text', "OFF-ROAD")
          cy.wait(1000)
    })


    it("TC005.007	- 'Competition' Sub-Menu - KLX Model", () => {      
          //Given that I am on the Home page (Assertion of the site's Home page)
          cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
          cy.wait(1000)
          
          //And I click on the "Motorcycles" Menu
          //When I click on the magnifying glass to perform the Search
          cy.xpath('//*[@id="cat-1"]').click()
          cy.wait(1000)

          //And I click on the "KX" option in the "Competition" Sub-Menu
          cy.xpath('//*[@id="nav-tab-23"]').click()
          cy.wait(1000)
          
          //Then a page opens with five motorcycle models (Assertion)
          cy.xpath('//*[@id="nav-tab-content-23"]/div/div[1]/div[1]/h6').should('have.text', "YOUTH MX")
          cy.wait(1000)
    })
        
})