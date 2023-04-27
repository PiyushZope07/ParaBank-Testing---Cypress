import Register from "../ParaBankPOM/Register";

describe('Registration Of ParaBank User', () => {

    beforeEach(() => {
        //Runs once before all test --> Visiting Website 
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })


    it('User is able to Register by Entering Correct Details', () => {

        //use data from fixture file
        cy.fixture('Register.json').then(reg => {

            const register = new Register();

            //Click on Register Button on Home Page
            register.ClickRegisterButtonHome()

            //Enter the Details for registration
            register.setFirstName(reg.firstname)
            register.setLastName(reg.lastname)
            register.setAddress(reg.address)
            register.setCity(reg.city)
            register.setState(reg.state)
            register.setZipCode(reg.zipcode)
            register.setPhoneNumber(reg.phonenumber)
            register.setSSN(reg.ssn)
            register.setUserName(reg.username)
            register.setPassword(reg.password)
            register.setRepeatedPassword(reg.rpassword)

            //Click in Register Button on register Page
            register.ClickRegisterButton()

            //Validate Account is registered Sucessfully or not
            register.ValidateAfterSucessFullRegister()
        });
    });

    it('User is able to Register Without Entering SSN Number ', () => {

        //use data from fixture file
        cy.fixture('Register.json').then(reg => {

            const register = new Register();

            //Click on Register Button on Home Page
            register.ClickRegisterButtonHome()

            //Enter the Details for registration
            register.setFirstName(reg.firstname)
            register.setLastName(reg.lastname)
            register.setAddress(reg.address)
            register.setCity(reg.city)
            register.setState(reg.state)
            register.setZipCode(reg.zipcode)
            register.setPhoneNumber(reg.phonenumber)
            register.setUserName(reg.username)
            register.setPassword(reg.password)
            register.setRepeatedPassword(reg.rpassword)

            //Click in Register Button on register Page
            register.ClickRegisterButton()

            //Validate that ssn error is visible
            register.ValidateSSNErrors()
        });
    });

    it('User is not able to Register Using Empty Fields ', () => {

        const register = new Register();

        //Click on Register Button on Home Page
        register.ClickRegisterButtonHome()

        //Click in Register Button on register Page
        register.ClickRegisterButton()

        //Validating that User is on Register Page
        register.ValidateEmptyFields()


    });
});