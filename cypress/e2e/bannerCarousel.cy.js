describe("Functionality: Motorcycles Menu", () => {
        beforeEach(() => { 
        cy.visit("https://www.kawasakibrasil.com/pt-br/")
        })
        
        it("TC006.001 - 'Play' button", () => {    
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click the "Play" button below the Carousel Banner
                cy.get('#playButton').click()
                cy.wait(1000)

                //Then Banner passes the images automatically (Assertion)
                cy.get('.active > .container').should('be.visible')
                cy.wait(1000)
        })

        
        it("TC006.002 - 'Pause' button", () => {  
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //And click on the "Play" button below the Carousel Banner
                //And Banner automatically passes the images
                cy.get('#playButton').click()
                cy.wait(3000)

                //When I click the "Pause" button
                cy.get('#pauseButton').click()
                cy.wait(1000)

                //Then the images stop playing automatically (Assertion)
                cy.get('.active > .container').should('be.visible')
                cy.wait(1000) 
        })

        
        it("TC006.003 - Right Side Button", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Right Side button of the Carousel Banner
                cy.get('.carousel-control-next').click()
                cy.wait(1000)

                //And I click 9 more times
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)
                cy.get('.carousel-control-next').click()
                cy.wait(1000)

                //Then the images change with each click
                cy.get('.active > .container').should('be.visible')
                cy.wait(1000) 
        })

        
        it("TC006.004 - Left Side Button", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Left Side button of the Carousel Banner
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)

                //And I click 9 more times
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)
                cy.get('.carousel-control-prev').click()
                cy.wait(1000)

                //Then the images change with each click
                cy.get('.active > .container').should('be.visible')
                cy.wait(1000) 
        })

        
        it("TC006.005 - Banner Button 1", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on Photo button 1 below the Banner
                cy.xpath('//*[@id="carouselbtn0"]').click({ force: true }) 
                cy.wait(1000)
                
                //Then a message appears in the banner photo
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[1]/div/div/table/tbody/tr/td/h3').should('have.text', "DE TER A SUA KAWASAKI 0KM!")
                cy.wait(1000)
        })

        
        it("TC006.006 - Banner Button 2", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on Photo button 2 below the Banner
                cy.xpath('//*[@id="carouselbtn1"]').click({ force: true }) 
                cy.wait(1000)
                
                //Then a message appears in the banner photo
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[2]/div/div/table/tbody/tr/td/h2').should('have.text', "Mais potência nas pistas e no seu dia a dia")
                cy.wait(1000)
                
        })

        
        it("TC006.007 - Banner Button 3", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on Photo button 3 below the Banner
                cy.xpath('//*[@id="carouselbtn2"]').click({ force: true }) 
                cy.wait(1000)
                
                //Then a message appears in the banner photo
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[3]/div/div/table/tbody/tr/td/h2').should('have.text', "Estilo e Atitude com mais performance")
                cy.wait(1000)
        })

        
        it("TC006.008 - Banner Button 4", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on Photo button 4 below the Banner
                cy.xpath('//*[@id="carouselbtn3"]').click({ force: true }) 
                cy.wait(1000)
                
                //Then a message appears in the banner photo
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[4]/div/div/table/tbody/tr/td/h2').should('have.text', "OBSESSÃO POR SUPER ESPORTIVIDADE")
                cy.wait(1000)
        })


        it("TC006.009 - Banner Button 5", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on Photo button 5 below the Banner
                cy.xpath('//*[@id="carouselbtn4"]').click({ force: true }) 
                cy.wait(1000)
                
                //Then a message appears in the banner photo
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[5]/div/div/table/tbody/tr/td/h2').should('have.text', "ELIMINATOR 500")
                cy.wait(1000)
        })


        it("TC006.010 - Banner Button 6", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on Photo button 6 below the Banner
                cy.xpath('//*[@id="carouselbtn5"]').click({ force: true }) 
                cy.wait(1000)
                
                //Then a message appears in the banner photo
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[6]/div/div/table/tbody/tr/td/h2').should('have.text', "ELIMINATOR 500 SE")
                cy.wait(1000)
        })


        it("TC006.011 - Banner Button 7", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on Photo button 7 below the Banner
                cy.xpath('//*[@id="carouselbtn6"]').click({ force: true }) 
                cy.wait(1000)
                
                //Then a message appears in the banner photo
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[7]/div/div/table/tbody/tr/td/h3').should('have.text', "A MOTO QUE CONSTRÓI CAMPEÕES")
                cy.wait(1000)
        })


        it("TC006.012 - Banner Button 8", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on Photo button 8 below the Banner
                cy.xpath('//*[@id="carouselbtn7"]').click({ force: true }) 
                cy.wait(1000)
                
                //Then a message appears in the banner photo
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[8]/div/div/table/tbody/tr/td/h2').should('have.text', "DESPERTE SUA SUPER ESPORTIVIDADE")
                cy.wait(1000)
        })


        it("TC006.013 - Banner Button 9", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on Photo button 9 below the Banner
                cy.xpath('//*[@id="carouselbtn8"]').click({ force: true }) 
                cy.wait(1000)
                
                //Then a message appears in the banner photo
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[9]/div/div/table/tbody/tr/td/h2').should('have.text', "50 anos dominando na terra")
                cy.wait(1000)
        })


        it("TC006.014 - Banner Button 10", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on Photo button 10 below the Banner
                cy.xpath('//*[@id="carouselbtn9"]').click({ force: true }) 
                cy.wait(1000)
                
                //Then a message appears in the banner photo
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[10]/div/div/table/tbody/tr/td/h2').should('have.text', "A MOTOCICLETA QUE CONSTRÓI CAMPEÕES ")
                cy.wait(1000)
        })

        
        it("TC006.015 - 'Confira!' button from banner 1", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Banner button
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[1]/div/div/table/tbody/tr/td/a').click({ force: true }) 
                cy.wait(1000)
                
                //Then access the page with 03 motorcycle options
                cy.xpath('/html/body/div[1]/section/div/table/tbody/tr/td[1]/h1').should('have.text', "CONDIÇÕES ESPECIAIS")
                cy.wait(1000)
        })


        it("TC006.016 - 'Confira!' button from banner 2", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Banner button
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[2]/div/div/table/tbody/tr/td/a').click({ force: true }) 
                cy.wait(1000)
                
                //Then access the "Ninja 500" page
                cy.xpath('//*[@id="top"]/div[2]/div[1]/div/div[1]/ul/li[1]/a').should('have.text', "NINJA 500")
                cy.wait(1000)
        })


        it("TC006.017 - 'Confira!' button from banner 3", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Banner button
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[3]/div/div/table/tbody/tr/td/a').click({ force: true }) 
                cy.wait(1000)
                
                //Then access the "Z500" page
                cy.xpath('/html/body/div[1]/div[2]/div[1]/div/div[1]/h2').should('have.text', "Z500")
                cy.wait(1000)
        })

        
        it("TC006.018 - 'Conheça a motocicleta!' button from banner 4", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Banner button
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[4]/div/div/table/tbody/tr/td/a').click({ force: true }) 
                cy.wait(1000)
                
                //Then access the "NINJA ZX-6R" page
                cy.xpath('//*[@id="top"]/div[2]/div[1]/div/div[1]/ul/li[1]/a').should('have.text', "NINJA ZX-6R")
                cy.wait(1000)
        })


        it("TC006.019 - 'Conheça a motocicleta' button from banner 5", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Banner button
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[5]/div/div/table/tbody/tr/td/a').click({ force: true }) 
                cy.wait(1000)
                
                //Then access the "ELIMINATOR 500" page
                cy.xpath('//*[@id="top"]/div[2]/div[1]/div/div[1]/ul/li[1]/a').should('have.text', "ELIMINATOR 500")
                cy.wait(1000)
        })


        it("TC006.020 - 'Conheça a motocicleta' button from banner 6", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Banner button
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[6]/div/div/table/tbody/tr/td/a').click({ force: true }) 
                cy.wait(1000)
                
                //Then access the "ELIMINATOR 500 SE" page
                cy.xpath('//*[@id="models"]/div/div[2]/div[3]/div[1]/div/div[2]').should('have.text', "ELIMINATOR 500 SE")
                cy.wait(1000)
        })


        it("TC006.021 - 'Conheça o modelo' button from banner 7", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Banner button
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[7]/div/div/table/tbody/tr/td/a').click({ force: true }) 
                cy.wait(1000)
                
                //Then access the page "2025 KX112"
                cy.xpath('/html/body/div[1]/div[2]/div[1]/div/div[1]/h2').should('have.text', "KX112")
                cy.wait(1000)
        })


        it("TC006.022 - 'Conheça' button from banner 8", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Banner button
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[8]/div/div/table/tbody/tr/td/a').click({ force: true }) 
                cy.wait(1000)
                
                //Then access the "2024 NINJA ZX-4R" page
                cy.xpath('/html/body/div[1]/div[2]/div[1]/div/div[1]/h2').should('have.text', "NINJA ZX-4R")
                cy.wait(1000)
        })


        it("TC006.023 - 'Conheça' button from banner 9", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Banner button
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[9]/div/div/table/tbody/tr/td/a').click({ force: true }) 
                cy.wait(1000)
                
                //Then access the page "2024 KX450 50TH ANNIVERSARY EDITION"
                cy.xpath('//*[@id="models"]/div/div[1]/div[3]/div[1]/div/div[2]').should('have.text', "2024 KX450 50TH ANNIVERSARY EDITION")
                cy.wait(1000)
        })


        it("TC006.024 - 'Conheça' button from banner 10", () => {      
                //Given that I am on the Home page
                cy.title().should('eq', "Motocicletas | Kawasaki Motores do Brasil")
                cy.wait(1000)

                //When I click on the Banner button
                cy.xpath('//*[@id="carouselExampleCaptions"]/div[1]/div[10]/div/div/table/tbody/tr/td/a').click({ force: true }) 
                cy.wait(1000)
                
                //Then access the "NEW 2024" page
                cy.xpath('//*[@id="models"]/div/div[2]/div[3]/div[1]/div/div[2]').should('have.text', "KX450")
                cy.wait(1000)
        })

})