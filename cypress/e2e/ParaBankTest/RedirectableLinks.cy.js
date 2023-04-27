import RedirectableLinks from "../ParaBankPOM/RedirectableLinks";

describe('Redirectable Links', () => {

    beforeEach(() => {
        //Runs once before all test --> Visiting Website 
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })

    
    it('Test that "www.parasoft.com" link is Redirectable or not available in About US Page', () => {

        const red = new RedirectableLinks();

        //Click on About Us Link
        red.clickAboutUsLink()

        //Validate title of page means if  title includes about us text then we can log that link is redirectale
        red.validateAboutUsLink()

    });

    it('Test that "BookStore" links href link is working or not', () => {

        const red = new RedirectableLinks();

        //Click on Services Link of Home Page
        red.clickServicesLink()

        //check whether BooKStore link is working or not
        red.validateBookStoreLink()

    });

    it('Test that "LoanProcessorService" href link is working or not', () => {

        const red = new RedirectableLinks();

        //Click on Services Link of Home Page
        red.clickServicesLink()

        //check whether Loan Processor link is working or not
        red.validateLoanProcessorLink()

    });

    
    it('Test that "ParaBankService" href link is working or not', () => {

        const red = new RedirectableLinks();

        //Click on Services Link of Home Page
        red.clickServicesLink()

        //check whether ParaBankService link is working or not
        red.validateParaBankServiceLink()

    });

    it('Test that "WADL" href link is working or not', () => {

        const red = new RedirectableLinks();

        //Click on Services Link of Home Page
        red.clickServicesLink()

        //check whether WADL link is working or not
        red.validateWADLLink()

    });

    it('Test that "SWAGGER" href link is working or not', () => {

        const red = new RedirectableLinks();

        //Click on Services Link of Home Page
        red.clickServicesLink()

        //check whether SWAGGER link is working or not
        red.validateSwaggerLink()

    });

    
});