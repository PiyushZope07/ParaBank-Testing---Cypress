import AdminPage from "../ParaBankPOM/AdminPage";

describe('Admin Page', () => {
    const admin = new AdminPage();
    beforeEach(() => {
        //Runs once before all test --> Visiting Website 
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    })

    it('Test Whether Database has been initialized or not', () => {

        //Click on Admin Page link
        admin.clickAdminPageLink();

        //Click on Initialize Button
        admin.clickInitializeButton();

        //Validate Database Initialize Text Result is matching with current 
        admin.validateIntializeButton();
    });

    it('Test Whether Database has been Cleaned or not', () => {

        //Click on Admin Page link
        admin.clickAdminPageLink();

        //Click on Clean Button
        admin.clickCleanButton();

        //Validate Database Clean Text Result is matching with current 
        admin.validateCleanButton();
    });

    it('Verify whether JMS Service is Running or not', () => {

        //Click on Admin Page link
        admin.clickAdminPageLink();

        // Clicking on JMS Start and Shut Button if it is visible then we are vaidating that
        admin.JMS();

    });

    it('Test Whether Data Access Mode Checkbox is working or not', () => {

        //Click on Admin Page link
        admin.clickAdminPageLink();

        //Selecting a soap radiobutton ad validating whether it is checked or not
        admin.SoapAccessCheckBox();

        //Selecting a rest xml radiobutton ad validating whether it is checked or not
        admin.RestXmlCheckBox();

        //Selecting a rest json radiobutton ad validating whether it is checked or not
        admin.RestJsonCheckBox();

        //Selecting a jdbc radiobutton ad validating whether it is checked or not
        admin.JdbcCheckBox();
    });

    it('Test Whether settings are saving sucessfully or not in Admin Page', () => {

        //use data from fixture file
        cy.fixture('Admin.json').then(log => {

            //Click on Admin Page link
            admin.clickAdminPageLink();

            //Click on Initialize Button
            admin.clickInitializeButton();

            //Selecting a rest json radiobutton ad validating whether it is checked or not
            admin.RestJsonCheckBox();

            //Enter Initial Balanace and Minimum balance for Configuration
            admin.setInitBalance(log.initbal);
            admin.setMinimumBalance(log.minbal);

            //Select JMS from LoanProvider Dropdown
            admin.LoanProviderDropdown();

            //Select Available Funds  from LoanProcessor Dropdown
            admin.LoanProcessorDropdown();

            //Click on Submit Button to submit Admin Settings
            admin.SubmitAdmin();

            //Validating Settings Saved Sucessfully
            admin.ValidatingSettingSuccess();
        })


    });


});