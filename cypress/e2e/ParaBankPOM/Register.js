class Register {

    registerButtonHome = "a[href*='register.htm']";
    FirstName = "input[id='customer.firstName']";
    LastName = "input[id='customer.lastName']";
    Address = "input[id='customer.address.street']";
    City = "input[id='customer.address.city']";
    State = "input[id='customer.address.state']";
    ZipCode = "input[id='customer.address.zipCode']";
    PhoneNumber = "input[id='customer.phoneNumber']";
    SSN = "input[id='customer.ssn']";
    UserName = "input[id='customer.username']";
    Password = "input[id='customer.password']";
    RepeatPassowrd = "input[id='repeatedPassword']";
    registerButton = "input[value='Register']";
    validateRegister = "#rightPanel > p";
    validatessnerror = "#customer\.ssn\.errors";


    ClickRegisterButtonHome() {
        cy.get(this.registerButtonHome).click();
    }

    setFirstName(inputfname) {
        cy.get(this.FirstName).type(inputfname);
    }

    setLastName(inputlname) {
        cy.get(this.LastName).type(inputlname);
    }

    setAddress(inputaddress) {
        cy.get(this.Address).type(inputaddress);
    }

    setCity(inputcity) {
        cy.get(this.City).type(inputcity);
    }

    setState(inputstate) {
        cy.get(this.State).type(inputstate);
    }

    setZipCode(inputzipcode) {
        cy.get(this.ZipCode).type(inputzipcode);
    }

    setPhoneNumber(inputphonenumber) {
        cy.get(this.PhoneNumber).type(inputphonenumber);
    }

    setSSN(inputssn) {
        cy.get(this.SSN).type(inputssn);
    }

    setUserName(inputuname) {
        cy.get(this.UserName).type(inputuname)
    }

    setPassword(inputpass) {
        cy.get(this.Password).type(inputpass);
    }

    setRepeatedPassword(inputrpass) {
        cy.get(this.RepeatPassowrd).type(inputrpass);
    }

    ClickRegisterButton() {
        cy.get(this.registerButton).click();
    }

    ValidateAfterSucessFullRegister() {
        cy.get(this.validateRegister).should('have.text', 'Your account was created successfully. You are now logged in.');
    }

    ValidateSSNErrors() {
        cy.get(this.validateRegister).should('have.text', 'Your account was created successfully. You are now logged in.');
    }

    ValidateEmptyFields() {
        cy.url()
            .should('eq', 'https://parabank.parasoft.com/parabank/register.htm');
    }
}

export default Register;