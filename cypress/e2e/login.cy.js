describe("Functionality: Search", () => {
  beforeEach(() => { 
    cy.visit("https://www.kawasakibrasil.com/pt-br/minha-kawasaki/login-registrar?returnurl=%2fpt-br%2fminha-kawasaki")
  })
      
      it("TC002.001 - Valid login with valid credentials (Happy Path)", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field
            cy.get("#Email").type("worktest852@gmail.com")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#Password").type("Testestrabalho345")
            cy.wait(1000) 
            
            //And click on the "Login" button           
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)

            //Then I can access my account (Assertion)
            cy.get('#dropdownMenuLink').should('have.text', '\n            \n                \n                    \n                \n            \n            worktest852@gmail.com\n        ')
      })

      
      it("TC002.002 - Invalid login without credentials", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I don't fill in anything in the "Email Address" field
            //And I don't fill in the "Password" field

            //And click on the "Login" button           
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)

            //Then I can't access my account (Assertion)
            cy.get('#Email-error').should('have.text', "Um endereço de e-mail válido é necessário.")
      })

      
      it("TC002.003 - Invalid login with empty password", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field
            cy.get("#Email").type("worktest345@gmail.com")
            cy.wait(1000)

            //And I don't fill in the "Password" field 
            
            //And click on the "Login" button           
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)

            //Then I can't access my account (Assertion)
            cy.get('#Password-error').should('have.text', 'O campo "Senha" é obrigatório.\n')         
      })

      
      it("TC002.004 - Invalid login with empty email", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I don't fill in the "Email Address" field
            
            //And fill in the "Password" field
            cy.get("#Password").type("Testestrabalho345")
            cy.wait(1000)
            
            //And click on the "Login" button           
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)

            //Then I can't access my account (Assertion)
            cy.get('#Email-error').should('have.text', 'Um endereço de e-mail válido é necessário.')
      })

      
      it("TC002.005 - Invalid login with invalid email", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field
            cy.get("#Email").type("worktest82@gmail.com")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#Password").type("Testestrabalho345")
            cy.wait(1000)

            //And click on the “Show Password” option
            cy.get("#showPass").click()
            cy.wait(1000)            

            //And click on the "Login" button           
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)

            //Then I can't access my account (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', 'O email ou a senha que você digitou estavam incorretos. Por favor, insira as informações corretas.')            
      })

      
      it("TC002.006 - Invalid login with invalid password (sem Case-sensitive)", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field
            cy.get("#Email").type("worktest345@gmail.com")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#Password").type("testestrabalho345")
            cy.wait(1000)

            //And click on the “Show Password” option
            cy.get("#showPass").click()
            cy.wait(1000)            

            //And click on the "Login" button           
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)

            //Then I can't access my account (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', 'O email ou a senha que você digitou estavam incorretos. Por favor, insira as informações corretas.')
      })

      
      it("TC002.007 - Invalid login with invalid credentials - Numeric", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field
            cy.get("#Email").type("517662485")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#Password").type("testestrabalho345")
            cy.wait(1000)

            //And click on the “Show Password” option
            cy.get("#showPass").click()
            cy.wait(1000)            

            //And click on the "Login" button           
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)

            //Then I can't access my account (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', 'Endereço de email inválido, tente novamente.')
      })

      
      it("TC002.008 - Invalid login with invalid user - Emoji", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field
            cy.get("#Email").type("🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#Password").type("Testestrabalho345")
            cy.wait(1000)

            //And click on the “Show Password” option
            cy.get("#showPass").click()
            cy.wait(1000)            

            //And click on the "Login" button           
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)

            //Then I can't access my account (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', 'Endereço de email inválido, tente novamente.')
      })

      
      it("TC002.009 - Invalid login with invalid user - Special characters", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field
            cy.get("#Email").type("!!!!!!!!")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#Password").type("Testestrabalho345")
            cy.wait(1000)

            //And click on the “Show Password” option
            cy.get("#showPass").click()
            cy.wait(1000)            

            //And click on the "Login" button           
            cy.get('#loginForm > .blackBtn').click()
            cy.wait(1000)

            //Then I can't access my account (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', 'Endereço de email inválido, tente novamente.')
      })

      
      it("TC002.010 - I forgot my password", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //And click on "I forgot my password"           
            cy.get('#loginForm > .headSix').click()
            cy.wait(1000)

            //When I access the "Forgot My Password" page (Assertion)
            cy.get('#forgotPasswordForm > :nth-child(1) > .headThree').should('have.text', 'ESQUECI MINHA SENHA')

            //And fill in the "Email Address" field
            cy.get("#Email").type("worktest345@gmail.com")
            cy.wait(1000)

            //And click on the "Recover" button            
            cy.get('#forgotPasswordForm > .blackBtn').click()
            cy.wait(1000)

            //Then access the email sending confirmation page (Assertion)
            cy.get(':nth-child(2) > .headThree').should('have.text', 'ESQUECEU SUA SENHA? NÃO SE PREOCUPE.')            
       })

      
      it("TC002.011 - I forgot my password (cancel)", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //And click on "I forgot my password"            
            cy.get('#loginForm > .headSix').click()
            cy.wait(2000)

            //When I access the "Forgot My Password" page (Assertion)
            cy.get('#forgotPasswordForm > :nth-child(1) > .headThree').should('have.text', 'ESQUECI MINHA SENHA')
            cy.wait(2000)
            
            //And click on the "Cancel" button            
            cy.get('#forgotPasswordForm > .headSix').click()
            cy.wait(1000)

            //Then return to the Login page (Assertion)
            cy.get('#loginForm > :nth-child(2) > .headThree').should('have.text', 'LOGIN')
      })

      
      it("TC002.012 - Logo", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I click on the Logo            
            cy.xpath('/html/body/nav/div[1]/div/a/div[1]').click()
            cy.wait(1000)

            //Then return to the home page (Assertion)
            cy.get('.active > .container > .carouselText > .hppTable > tbody > tr > .align-middle > .headFour').should('have.text', 'DE TER A SUA KAWASAKI 0KM!')
      })

})