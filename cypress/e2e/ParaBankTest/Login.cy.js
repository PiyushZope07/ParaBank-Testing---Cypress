import Login from "../ParaBankPOM/Login";

describe('Login Of ParaBank User', () => {

    beforeEach(() => {
        //Runs once before all test --> Visiting Website 
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })


    it(' User is able to Login with Correct Credentials', () => {

        //use data from fixture file
        cy.fixture('Login.json').then(log => {

            const login = new Login();

            //Enter Credentials for Login
            login.setUserName(log.username)
            login.setPassword(log.password)

            //Click on Login Button
            login.clickLogin()

            //validate sucess Login after Weclome is visible
            login.validateLoginWithWelcome()
        });
    });

    it(' User is able to Login with Incorrect Credentials', () => {

        //use data from fixture file
        cy.fixture('Login.json').then(log => {

            const login = new Login();

            //Enter Credentials for Login
            login.setUserName("abc")
            login.setPassword("abc")

            //Click on Login Button
            login.clickLogin()

            //validate user is home page because credentials are incorrect
            login.validateLoginWithWelcome()
        });
    });

    it('User is not able to Login with Empty Fields.', () => {

        //use data from fixture file
        cy.fixture('Login.json').then(log => {

            const login = new Login();

            //Click on Login Button
            login.clickLogin()

            //validate user is home page because input fields are empty
            login.validateIncorrectLogin()
        });
    });

});