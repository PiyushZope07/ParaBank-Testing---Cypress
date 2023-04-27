class ForgotLoginInfo {

    forgotLoginInfoButtonHome = "//a[contains(text(),'Forgot')]";
    firstName = "input[name*='first']";
    lastName = "input[name*='last']";
    address = "input[name*='address.street']";
    city = "input[name*='address.city']";
    state = "input[name*='address.state']"
    zipCode = "input[name*='address.zip']";
    ssn = "input[name*='ssn']";
    findloginbutton = "input[value*='Find']";

    validateText = "#rightPanel > :nth-child(2)";

    registerButtonHome = "a[href*='register.htm']";

    ClickForgotLoginInfoButton() {
        cy.xpath(this.forgotLoginInfoButtonHome).click();
    }

    setFirstName(fFirstName) {
        cy.get(this.firstName).type(fFirstName);
    }

    setLastName(fLastName) {
        cy.get(this.lastName).type(fLastName);
    }

    setAddress(fAddress) {
        cy.get(this.address).type(fAddress);
    }

    setCity(fCity) {
        cy.get(this.city).type(fCity);
    }

    setState(fstate) {
        cy.get(this.state).type(fstate);
    }

    setZipCode(fzipCode) {
        cy.get(this.zipCode).type(fzipCode);
    }

    setSSN(fssn) {
        cy.get(this.ssn).type(fssn);
    }

    ClickFindLoginButton() {
        cy.get(this.findloginbutton).click();
    }

    ValidateLoginInfo() {
        cy.get(this.validateText).should('contain.text', 'Your login information was located successfully. You are now logged in.');
    }


    validateEmptyFindLogin(){
        cy.get(this.registerButtonHome).should('be.visible');
    }
}

export default ForgotLoginInfo