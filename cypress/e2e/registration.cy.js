describe("Functionality: Search", () => {
  beforeEach(() => { 
    cy.visit("https://www.kawasakibrasil.com/pt-br/minha-kawasaki/login-registrar?returnurl=%2fpt-br%2fminha-kawasaki")
  })
      
      it("TC001.001 - New Registration (Happy Path)", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field in the "Register" box
            cy.get("#RegistrationEmail").type("worktest53@gmail.com")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#RegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)

            //And fill in the "Confirm new password" field
            cy.get("#ConfirmRegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)

            //And select the option "I verify that I am 18 years of age or over..."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)

            //And click on the "Register" button
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)

            //Then access the "Registration Complete" page (Assertion)
            cy.xpath('/html/body/div[1]/div[3]/section/table/tbody/tr/td[1]/h1').should('have.text', "MINHA KAWASAKI")
      })

  
      it("TC001.002 - Registration without credentials", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I don't fill in anything in the "Register" box
            //And I don't select any of the boxes after the "Confirm new password" field
            //And click on the "Register" button
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)

            //Then I don't access the "Registration Complete" page and an error message appears (Assertion)
            cy.get('#validationSummaryReg > .errorMessage > span').should('have.text', "Desculpe, não é possível submeter. Existem campos inválidos no formulário abaixo.")
      })

      
      it("TC001.003 - Registration without email", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I don't fill in the "Email Address" field in the "Register" box

            //And fill in the "Password" field
            cy.get("#RegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)

            //And fill in the "Confirm new password" field
            cy.get("#ConfirmRegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)

            //And select the option "I verify that I am 18 years of age or over..."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)

            //And click on the "Register" button
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)

            //Then I don't access the "Registration Complete" page and an error message appears (Assertion)
            cy.get('#validationSummaryReg > .errorMessage > ul > li').should('have.text', "Um endereço de e-mail válido é necessário.")
      })

      
      it("TC001.004 - Email registration without @", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field in the "Register" box
            cy.get("#RegistrationEmail").type("worktest345gmail.com")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#RegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)

            //And fill in the "Confirm new password" field
            cy.get("#ConfirmRegistrationPassword").type("Testestrabalho345")
            cy.wait(1000)

            //And select the option "I verify that I am 18 years of age or over..."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)

            //And click on the "Register" button
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)

            //Then I don't access the "Registration Complete" page and an error message appears (Assertion)
            cy.get('.validation-summary-errors > ul > li').should('have.text', "Endereço de email inválido, tente novamente.")
      })

      
      it("TC001.005 - Registration without password", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field in the "Register" box
            cy.get("#RegistrationEmail").type("worktest345@gmail.com")
            cy.wait(1000)

            //And I don't fill in the "Password" field 

            //And I don't fill in the "Confirm new password" field

            //And select the option "I verify that I am 18 years of age or over..."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)

            //And click on the "Register" button
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)

            //Then I don't access the "Registration Complete" page and an error message appears (Assertion)
            cy.get('#RegistrationPassword-error').should('have.text', 'O campo "Senha" é obrigatório.\n')
      })

      
      it("TC001.006 - Registration without password confirmation", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field in the "Register" box
            cy.get("#RegistrationEmail").type("worktest345@gmail.com")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#RegistrationPassword").type("Testestrabalho345")
            cy.wait(1000) 

            //And I don't fill in the "Confirm new password" field

            //And select the option "I verify that I am 18 years of age or over..."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)

            //And click on the "Register" button
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)

            //Then I don't access the "Registration Complete" page and an error message appears (Assertion)
            cy.get('#ConfirmRegistrationPassword-error').should('have.text', 'A senha e a senha de confirmação não coincidem. Por favor, tente novamente.')
      })

      
      it("TC001.007 - Registration password with 7 characters", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field in the "Register" box
            cy.get("#RegistrationEmail").type("worktest5@gmail.com")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#RegistrationPassword").type("Testest")
            cy.wait(1000) 

            //And fill in the "Confirm new password" field
            cy.get("#ConfirmRegistrationPassword").type("Testest")
            cy.wait(1000) 

            //And select the option "I verify that I am 18 years of age or over..."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)

            //And click on the "Register" button
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)

            //Then I don't access the "Registration Complete" page and an error message appears (Assertion)
            cy.get('#RegistrationPassword-error').should('have.text', 'A senha deve ter pelo menos 8 caracteres')
      })


      it("TC001.008 - Password registration with numbers only", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field in the "Register" box
            cy.get("#RegistrationEmail").type("kawa23@gmail.com")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#RegistrationPassword").type("12345678")
            cy.wait(1000)               

            //And fill in the "Confirm new password" field
            cy.get("#ConfirmRegistrationPassword").type("12345678")
            cy.wait(1000)

            //And click on the "Show password" button
            cy.get("#showRegPass").click()
            cy.wait(1000)   

            //And select the option "I verify that I am 18 years of age or over..."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)

            //And click on the "Register" button
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)

            //Then I don't access the "Registration Complete" page and an error message appears (Assertion)
            cy.get('#RegistrationPassword-error').should('have.text', 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.')
      })


      it("TC001.009 - Password registration only with Emoji", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field in the "Register" box
            cy.get("#RegistrationEmail").type("kawa22@gmail.com")
            cy.wait(1000)

            //And fill in the "Password" field
            cy.get("#RegistrationPassword").type("🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻")
            cy.wait(1000)

            //And fill in the "Confirm new password" field
            cy.get("#ConfirmRegistrationPassword").type("🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻🤘🏻")
            cy.wait(1000)

            //And click on the "Show password" button
            cy.get("#showRegPass").click()
            cy.wait(1000)   

            //And select the option "I verify that I am 18 years of age or over..."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)

            //And click on the "Register" button
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)

            //Then I don't access the "Registration Complete" page and an error message appears (Assertion)
            cy.get('#RegistrationPassword-error').should('have.text', 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.')
      })


      it("TC001.010 - Password registration only with Special Characters", () => {      
            //Given I am on the "My Kawasaki" page (Assertion)
            cy.get('[role="presentation"] > .headTwo').should('have.text', "MINHA KAWASAKI")
            cy.wait(1000)
            
            //When I fill in the "Email Address" field in the "Register" box
            cy.get("#RegistrationEmail").type("kawa21@gmail.com")
            cy.wait(1000)

            //And fill in the "Password" field 
            cy.get("#RegistrationPassword").type("!!!!!!!!!!")
            cy.wait(1000)

            //And fill in the "Confirm new password" field
            cy.get("#ConfirmRegistrationPassword").type("!!!!!!!!!!")
            cy.wait(1000)

            //And click on the "Show password" button
            cy.get("#showRegPass").click()
            cy.wait(1000)   

            //And select the option "I verify that I am 18 years of age or over..."
            cy.get('#AgreeToTermsAndConditions').click()
            cy.wait(1000)

            //And click on the "Register" button
            cy.get(':nth-child(11) > .blackBtn').click()
            cy.wait(1000)

            //Then I don't access the "Registration Complete" page and an error message appears (Assertion)
            cy.get('#RegistrationPassword-error').should('have.text', 'A senha deve conter pelo menos uma letra maiúscula, um número e um caractere especial.')
       })

})