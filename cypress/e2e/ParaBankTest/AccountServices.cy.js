import AccountServices from "../ParaBankPOM/AccountServices"
import Register from "../ParaBankPOM/Register";
import Login from "../ParaBankPOM/Login";
import AdminPage from "../ParaBankPOM/AdminPage";

describe('Account Services', () => {
    const register = new Register();
    const accser = new AccountServices();
    const login = new Login();
    const admin = new AdminPage();
    beforeEach(() => {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm');
    })

    afterEach(() => {
        cy.get("a[href*='log']").click();
    })
    
    it('Test Whether that User is able to open New Checked Account', () => {

        //use data from fixture file
        cy.fixture('AccountServices.json').then(acc => {

            //Click on Register Button on Home Page
            register.ClickRegisterButtonHome();

            //Enter the Details for registration
            register.setFirstName(acc.firstname);
            register.setLastName(acc.lastname);
            register.setAddress(acc.address);
            register.setCity(acc.city);
            register.setState(acc.state);
            register.setZipCode(acc.zipcode);
            register.setPhoneNumber(acc.phonenumber);
            register.setSSN(acc.ssn);
            register.setUserName(acc.username);
            register.setPassword(acc.password);
            register.setRepeatedPassword(acc.rpassword);

            //Click in Register Button on register Page
            register.ClickRegisterButton();

            //Validate Account is registered Sucessfully or not
            register.ValidateAfterSucessFullRegister();

            //Click on Open Account
            accser.clickOpenAccount();

            //Select Checking Account from Account type Dropdown
            accser.selectCheckingAccountType();

            //Click on Open Account Button
            accser.clickOpenAccountButton();

            //Validate Account Created Sucessfully
            accser.ValidateCheckingAccouuntText();
        });
    });

    it('Test  Whether that User is able to open New Savings Account.', () => {

        //use data from fixture file
        cy.fixture('AccountServices.json').then(acc => {

            //Enter Credentials for Login
            login.setUserName(acc.usernamelog);
            login.setPassword(acc.passwordlog);

            //Click on Login Button
            login.clickLogin();

            //validate sucess Login after Weclome is visible
            login.validateLoginWithWelcome()

            //Click on Open Account
            accser.clickOpenAccount();

            //Select Checking Account from Account type Dropdown
            accser.selectSavingsAccountType();

            //Click on Open Account Button
            accser.clickOpenAccountButton();

            //Validate Account Created Sucessfully
            accser.ValidateCheckingAccouuntText();

        });
    });

    it('Test Whether that User is able to Transfer the Funds From One Account to Another', () => {

        //use data from fixture file
        cy.fixture('AccountServices.json').then(acc => {

            //Enter Credentials for Login
            login.setUserName(acc.usernamelog);
            login.setPassword(acc.passwordlog);

            //Click on Login Button
            login.clickLogin();

            //validate sucess Login after Weclome is visible
            login.validateLoginWithWelcome();

            //Click on Transfer Fund
            accser.clickTransferFund();
            cy.wait(3000)
            //Select Transfer Account
            accser.SelectTransferAccount();

            //Enter Transfer Amount
            accser.TransferAmount(acc.transferamount);

            //Click on Transfer Button
            accser.ClickTransferButton();

            //Validate Transfer Success text
            accser.ValidateTransferText();

        });
    });

    it('Test Whether that User is able to Pay the Bill From One Account to Another', () => {

        //use data from fixture file
        cy.fixture('AccountServices.json').then(acc => {

            //Enter Credentials for Login
            login.setUserName(acc.usernamelog);
            login.setPassword(acc.passwordlog);

            //Click on Login Button
            login.clickLogin();

            //validate sucess Login after Weclome is visible
            login.validateLoginWithWelcome();

            //Click on Bill Pay Link
            accser.clickBillPay();

            //Enter Payee Details
            accser.setPayeeName(acc.payeename);
            accser.setPayeeAddress(acc.payeeaddress);
            accser.setPayeeCity(acc.payeecity);
            accser.setPayeeState(acc.payeestate);
            accser.setPayeeZipCode(acc.payeezipcode);
            accser.setPayeePhoneNumber(acc.payeephone);
            accser.setPayeeAccount(acc.payeeaccount);
            accser.setPayeeVerifyAccount(acc.payeeverifyaccount);
            accser.setPayeeAmmount(acc.payeeamount);

            //Select Account to send Payment
            accser.selectPayeeFromAccount();

            //Click on Send Payment Button
            accser.clickSendPayment();

            //Validate Bill Payment Success text that bill payment is completed.
            accser.ValidateBillPaymentText();
        });
    });

    it('Test Whether that User is able to Find the Trascation by ID', () => {

        //use data from fixture file
        cy.fixture('AccountServices.json').then(acc => {

            //Enter Credentials for Login
            login.setUserName(acc.usernamelog);
            login.setPassword(acc.passwordlog);

            //Click on Login Button
            login.clickLogin();

            //validate sucess Login after Weclome is visible
            login.validateLoginWithWelcome();

            //Click on Find Transcation Link
            accser.ClickFindTransaction();

            //Enter ID of Transcation 
            accser.SetTransactionID(acc.transactionid);

            //Click on Find Transaction  Of ID button
            accser.ClickFindTransactionID();

            //Valdate Results
            accser.ValidateTranscationResults();
        });
    });

    it('Test Whether that User is able to Find the Trascation by Date', () => {

        //use data from fixture file
        cy.fixture('AccountServices.json').then(acc => {

            //Enter Credentials for Login
            login.setUserName(acc.usernamelog);
            login.setPassword(acc.passwordlog);

            //Click on Login Button
            login.clickLogin();

            //validate sucess Login after Weclome is visible
            login.validateLoginWithWelcome();

            //Click on Find Transcation Link
            accser.ClickFindTransaction();

            //Enter Date of Transcation 
            accser.SetTransactionDate(acc.transactiondate);
            
            //Click on Find Transaction  Of Date button
            accser.ClickFindTransactionDate();

            //Valdate Results
            accser.ValidateTranscationResults();
        });

    });

    it('Test Whether that User is able to Find the Trascation by Date Range', () => {

        //use data from fixture file
        cy.fixture('AccountServices.json').then(acc => {

            //Enter Credentials for Login
            login.setUserName(acc.usernamelog);
            login.setPassword(acc.passwordlog);

            //Click on Login Button
            login.clickLogin();

            //validate sucess Login after Weclome is visible
            login.validateLoginWithWelcome();

            //Click on Find Transcation Link
            accser.ClickFindTransaction();

            //Enter Date's of Transcation 
            accser.SetTransactionDateFromRange(acc.fromdaterange);
            accser.SetTransactionDateToRange(acc.todaterange);

            //Click on Find Transaction  Of Date Range button
            accser.ClickFindTransactionDateRange();

            //Valdate Results
            accser.ValidateTranscationResults();
        });

    });

    it('Test Whether that User is able to Find the Trascation by Amount', () => {

        //use data from fixture file
        cy.fixture('AccountServices.json').then(acc => {

            //Enter Credentials for Login
            login.setUserName(acc.usernamelog);
            login.setPassword(acc.passwordlog);

            //Click on Login Button
            login.clickLogin();

            //validate sucess Login after Weclome is visible
            login.validateLoginWithWelcome();

            //Click on Find Transcation Link
            accser.ClickFindTransaction();

            //Enter Date's of Transcation 
            accser.SetTransactionAmount(acc.transactionamount);

            //Click on Find Transaction Of Amount button
            accser.ClickFindTransactionAmount();

            //Valdate Results
            accser.ValidateTranscationResults();
        });

    })

    it('Test Whether that User is able to Update the Contact Information', () => {

        //use data from fixture file
        cy.fixture('AccountServices.json').then(acc => {

            //Enter Credentials for Login
            login.setUserName(acc.usernamelog);
            login.setPassword(acc.passwordlog);

            //Click on Login Button
            login.clickLogin();

            //validate sucess Login after Weclome is visible
            login.validateLoginWithWelcome();

            //Click on Update Contact Info
            accser.ClickUpdateContactInfo();

            //Enter Updated Details
            accser.setUpdateFirstName(acc.updatefname);
            accser.setUpdateLastName(acc.updatelname);
            accser.setUpdateAddress(acc.updateaddress);
            accser.setUpdateCity(acc.updatecity);
            accser.setUpdateState(acc.updatestate);
            accser.setUpdateZipCode(acc.updatezipcode);
            accser.setUpdatePhoneNumber(acc.updatepno);

            //Click on Update Profile Button
            accser.clickUpdateProfileButton();

            //Validate Profile Text
            accser.ValidateProfile();

        });
    });

    it('Test Whether that User is able to Request the Loan', () => {

        //use data from fixture file
        cy.fixture('AccountServices.json').then(acc => {

            //Click on Admin Page link
            admin.clickAdminPageLink();

            //Enter Initial Balanace and Minimum balance for Configuration
            admin.setInitBalance(acc.initbal);
            admin.setMinimumBalance(acc.minbal);

            //Click on Submit Button to submit Admin Settings
            admin.SubmitAdmin();

            //Enter Credentials for Login
            login.setUserName(acc.usernamelog);
            login.setPassword(acc.passwordlog);

            //Click on Login Button
            login.clickLogin();

            //validate sucess Login after Weclome is visible
            login.validateLoginWithWelcome();

            //Click on Request Loan
            accser.ClickRequestLoan();

            //Enter Loan Amount 
            accser.setLoanAmount(acc.loanamt);

            //Enter Down Payment Amount 
            accser.setDownPayment(acc.downpayment);

            //Click on Apply Now
            accser.ClickApplyNow();

            //Validate Request Loan
            accser.ValidateLoan();
        });
    });

});