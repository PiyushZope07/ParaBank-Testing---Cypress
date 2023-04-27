class AccountServices {

    // Account Opening
    open_account = "a[href*='open']";
    account_type = "#type";
    open_account_button = "input[value*='Account']";
    checking_account_text = "//p[contains(text(),'Congratulations, your account is now open.')]";

    //Fund Transfer
    transfer_fund = "a[href*='transfer']";
    transfer_amount = "#amount";
    transfer_from_account = "#fromAccountId";
    transfer_to_account = "#toAccountId";
    transfer_button = "input[value='Transfer']";
    transfer_success = ".ng-scope > :nth-child(2)";

    //Bill Pay
    click_bill_pay = "a[href*='bill']";
    payee_name = "input[name='payee.name']";
    payee_address = "input[name='payee.address.street']";
    payee_city = "input[name='payee.address.city']";
    payee_state = "input[name='payee.address.state']";
    payee_zip_code = "input[name='payee.address.zipCode']";
    payee_phone = "input[name='payee.phoneNumber']";
    payee_account_number = "input[name='payee.accountNumber']";
    payeea_verify_accountnumber = "input[name='verifyAccount']";
    payee_ammount = ":nth-child(11) > [width='20%'] > .input";
    payee_select_from_account = "select[name='fromAccountId']";
    send_payment_button = "input[value='Send Payment']";
    bill_pay_success = "[ng-show='showResult'] > .title";

    //Find Transactions
    click_find_transcation = "a[href*='findtrans']";

    transaction_id = "input[id='criteria.transactionId']";
    transaction_date = "input[id='criteria.onDate']";
    transaction_from_date_range = "input[id='criteria.fromDate']";
    transaction_to_date_range = "input[id='criteria.toDate']";
    transaction_amount = "input[id='criteria.amount']";

    find_transaction_id_button = ":nth-child(5) > .button";
    find_transaction_date_button = ":nth-child(9) > .button";
    find_transaction_date_range_button = ":nth-child(13) > .button";
    find_transaction_amount_button = ":nth-child(17) > .button";

    find_transcation_data = ":nth-child(2) > .ng-binding";

    //Update Profile
    click_update_contact_info = "a[href*='profile']";

    update_first_name = "input[id='customer.firstName']";
    update_last_name = "input[id='customer.lastName']";
    update_address = "input[id='customer.address.street']";
    update_city = "input[id='customer.address.city']";
    update_state = "input[id='customer.address.state']";
    update_zipcode = "input[id='customer.address.zipCode']";
    update_phone_no = "input[id='customer.phoneNumber']";
    update_profile_button = "input[value*='Update']";

    validate_profile = ".ng-scope > p";

    //Request Loan
    click_request_loan = "a[href*='request']";
    loan_amount="#amount";
    down_payment="#downPayment";
    click_apply_now="input[value='Apply Now']";
    validate_loan="[ng-if='showResult'] > div.ng-scope > :nth-child(1)";



    // Functions defined for Opening Account Scenario
    clickOpenAccount() {
        cy.get(this.open_account).click();
    }


    selectCheckingAccountType() {
        cy.get(this.account_type).select('CHECKING');
        cy.wait(3000);
    }

    selectSavingsAccountType() {
        cy.get(this.account_type).select('SAVINGS');
        cy.wait(3000);
    }

    clickOpenAccountButton() {
        cy.get(this.open_account_button).click();
    }

    ValidateCheckingAccouuntText() {
        cy.xpath(this.checking_account_text).invoke('text').then((text) => {
            expect(text).to.be.equals('Congratulations, your account is now open.');
        })
    }

    // Functions defined for Fund Transfer Scenario
    clickTransferFund() {

        cy.get(this.transfer_fund).click();

    }

    TransferAmount(transferam) {
        cy.get(this.transfer_amount).type(transferam);
    }

    SelectTransferAccount() {
        cy.get(this.transfer_from_account).select(0);
        cy.get(this.transfer_to_account).select(0);
    }

    ClickTransferButton() {
        cy.get(this.transfer_button).click();
    }

    ValidateTransferText() {
        cy.wait(2500);
        cy.get(this.transfer_success).invoke('text').then((text) => {
            expect(text).to.contains('transferred from account')
        })
    }

    // Functions defined for Bill Pay Scenario
    clickBillPay() {
        cy.get(this.click_bill_pay).click();
    }
    setPayeeName(payeename) {
        cy.get(this.payee_name).type(payeename);
    }

    setPayeeAddress(payeeadd) {
        cy.get(this.payee_address).type(payeeadd);
    }

    setPayeeCity(payeecity) {
        cy.get(this.payee_city).type(payeecity);
    }

    setPayeeState(payeestate) {
        cy.get(this.payee_state).type(payeestate);
    }

    setPayeeZipCode(payeezpc) {
        cy.get(this.payee_zip_code).type(payeezpc);
    }

    setPayeePhoneNumber(payeepno) {
        cy.get(this.payee_phone).type(payeepno);
    }

    setPayeeAccount(payeeacc) {
        cy.get(this.payee_account_number).type(payeeacc);
    }

    setPayeeVerifyAccount(payeeverifyacc) {
        cy.get(this.payeea_verify_accountnumber).type(payeeverifyacc);
    }

    setPayeeAmmount(payeeamm) {
        cy.get(this.payee_ammount).type(payeeamm);
    }

    selectPayeeFromAccount() {
        cy.get(this.payee_select_from_account).select(1);
    }

    clickSendPayment() {
        cy.get(this.send_payment_button).click();
    }

    ValidateBillPaymentText() {
        cy.wait(2500);
        cy.get(this.bill_pay_success).invoke('text').then((text) => {
            expect(text).to.contains('Bill Payment Complete');
        })
    }

    // Functions defined for Find transaction Scenario
    ClickFindTransaction() {
        cy.get(this.click_find_transcation).click();
    }

    SetTransactionID(transid) {
        cy.get(this.transaction_id).type(transid);
    }

    ClickFindTransactionID() {
        cy.get(this.find_transaction_id_button).click();
    }

    ValidateTranscationResults() {
        cy.get(this.find_transcation_data).invoke('text').then((text) => {
            cy.log(text);
            expect(text).to.be.contains('Funds Transfer');
        })
    }

    SetTransactionDate(transdate) {
        cy.get(this.transaction_date).type(transdate);
    }

    ClickFindTransactionDate() {
        cy.get(this.find_transaction_date_button).click();
    }

    SetTransactionDateFromRange(transfromdate) {
        cy.get(this.transaction_from_date_range).type(transfromdate);
    }

    SetTransactionDateToRange(transtodate) {
        cy.get(this.transaction_to_date_range).type(transtodate);
    }

    ClickFindTransactionDateRange() {
        cy.get(this.find_transaction_date_range_button).click();
    }

    SetTransactionAmount(transamm) {
        cy.get(this.transaction_amount).type(transamm);
    }

    ClickFindTransactionAmount() {
        cy.get(this.find_transaction_amount_button).click();
    }

    // Functions defined for Update Contact Info Scenario
    ClickUpdateContactInfo() {
        cy.get(this.click_update_contact_info).click();
    }

    setUpdateFirstName(fname) {
        cy.get(this.update_first_name).type(fname);
    }

    setUpdateLastName(lname) {
        cy.get(this.update_last_name).type(lname);
    }

    setUpdateLastName(lname) {
        cy.get(this.update_last_name).type(lname);
    }

    setUpdateAddress(addr) {
        cy.get(this.update_address).type(addr);
    }

    setUpdateCity(city) {
        cy.get(this.update_city).type(city);
    }

    setUpdateState(state) {
        cy.get(this.update_state).type(state);
    }

    setUpdateZipCode(zpc) {
        cy.get(this.update_zipcode).type(zpc);
    }

    setUpdatePhoneNumber(updatepno) {
        cy.get(this.update_phone_no).type(updatepno);
    }

    clickUpdateProfileButton() {
        cy.get(this.update_profile_button).click();
    }

    ValidateProfile() {
        cy.get(this.validate_profile).invoke('text').then((text) => {
            expect(text).to.contains('Your updated address and phone number have been added to the system.');
        })
    }

    // Functions defined for Loan Request Scenario
    ClickRequestLoan() {
        cy.get(this.click_request_loan).click();
    }

    setLoanAmount(lamm) {
        cy.get(this.loan_amount).type(lamm);
    }

    setDownPayment(dp) {
        cy.get(this.down_payment).type(dp);
    }
    
    ClickApplyNow(){
        cy.get(this.click_apply_now).click();
    }

    ValidateLoan() {
        cy.get(this.validate_loan).invoke('text').then((text) => {
            expect(text).to.contains('Congratulations, your loan has been approved.');
        })
    }
}

export default AccountServices;