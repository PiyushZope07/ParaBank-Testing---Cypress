import ForgotLoginInfo from "../ParaBankPOM/ForgotLoginInfo";

describe('Find Login Information of User', () => {

    beforeEach(() => {
        //Runs once before all test --> Visiting Website 
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })

    it('User is able to Find Login Information By Entering Correct Details', () => {

        //use data from fixture file
        cy.fixture('ForgotLoginInfo.json').then(floginfo => {

            const findlogin = new ForgotLoginInfo();

            //Click on Forgot Login Info Button 
            findlogin.ClickForgotLoginInfoButton()

            //Enter Details for Finding Login Information
            findlogin.setFirstName(floginfo.firstname)
            findlogin.setLastName(floginfo.lastname)
            findlogin.setAddress(floginfo.address)
            findlogin.setCity(floginfo.city)
            findlogin.setState(floginfo.state)
            findlogin.setZipCode(floginfo.zipcode)
            findlogin.setSSN(floginfo.ssn)

            //Click on Find Login Button
            findlogin.ClickFindLoginButton()

            //Validate login deatils searched.
            findlogin.ValidateLoginInfo()
        });
    });


    it(' User is able to Find Login Information without Entering SSN Number', () => {

        //use data from fixture file
        cy.fixture('ForgotLoginInfo.json').then(floginfo => {

            const findlogin = new ForgotLoginInfo();

            //Click on Forgot Login Info Button
            findlogin.ClickForgotLoginInfoButton()

            //Enter Details for Finding Login Information
            findlogin.setFirstName(floginfo.firstname)
            findlogin.setLastName(floginfo.lastname)
            findlogin.setAddress(floginfo.address)
            findlogin.setCity(floginfo.city)
            findlogin.setState(floginfo.state)
            findlogin.setZipCode(floginfo.zipcode)
            findlogin.setSSN(floginfo.emptyssn)

            //Click on Find Login Button
            findlogin.ClickFindLoginButton()

            //Validate login deatils searched.
            findlogin.ValidateLoginInfo()
        });
    });

    it(' User is not able to Find Login Information with Empty Fields', () => {

        //use data from fixture file
        cy.fixture('ForgotLoginInfo.json').then(floginfo => {

            const findlogin = new ForgotLoginInfo();

            //Click on Forgot Login Info Button
            findlogin.ClickForgotLoginInfoButton()

            //Click on Find Login Button
            findlogin.ClickFindLoginButton()

            //If regitser Button is visible on Home Page User is not able to Find Login Information with Empty Field
            findlogin.validateEmptyFindLogin()
        });
    });

});