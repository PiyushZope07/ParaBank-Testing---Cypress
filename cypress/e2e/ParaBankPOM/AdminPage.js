class AdminPage {

    adminpage = "//a[contains(text(),'Admin')]";

    initizalizebutton = "//button[contains(text(),'Initialize')]";
    validateinitialize = "#rightPanel > p > b";

    cleanbutton = "//button[contains(text(),'Clean')]";
    validateclean = "#rightPanel > p > b";

    shutDownJms = "//input[@value='Shutdown']";
    startUpJms = "//input[@value='Startup']"
    validateStartUpsel = "//td[contains(text(),'Running')]";
    validateShutDownsel = "//td[contains(text(),'Stopped')]";


    soapcheckbox = "#accessMode1";
    restxmlcheckbox = "#accessMode2";
    restjsoncheckbox = "#accessMode3";
    jdbccheckbox = "#accessMode4";
    initbal = "#initialBalance";
    minbal = "#minimumBalance";
    LoanProviderDropdownlist = "#loanProvider";
    LoanPrcessorDropdownlist = "#loanProcessor"
    adminsubmit = "#adminForm > .button";
    settingsuccess="#rightPanel > p > b";

    clickAdminPageLink() {
        cy.xpath(this.adminpage).click();
    }

    clickInitializeButton() {
        cy.xpath(this.initizalizebutton).click();
    }

    validateIntializeButton() {
        cy.get(this.validateinitialize).invoke('text').then((text) => {
            expect(text).to.be.equal('Database Initialized');
        })
    }

    clickCleanButton() {
        cy.xpath(this.cleanbutton).click();
    }

    validateCleanButton() {
        cy.get(this.validateclean).invoke('text').then((text) => {
            expect(text).to.be.equal('Database Cleaned');
        })
    }

    JMS() {
        if (cy.contains('Startup')) {
            cy.xpath(this.startUpJms).click();
            cy.xpath(this.validateStartUpsel).invoke('text').then((text) => {
                expect(text).to.be.equal('Running');
            })
        }
        if (cy.contains('Shutdown')) {
            cy.xpath(this.shutDownJms).click();
            cy.xpath(this.validateShutDownsel).invoke('text').then((text) => {
                expect(text).to.be.equal('Stopped');
            })
        }
    }

    SoapAccessCheckBox() {
        cy.get(this.soapcheckbox).check();
        cy.get(this.soapcheckbox).should('be.checked');
    }

    RestXmlCheckBox() {
        cy.get(this.restxmlcheckbox).check();
        cy.get(this.restxmlcheckbox).should('be.checked');
    }

    RestJsonCheckBox() {
        cy.get(this.restjsoncheckbox).check();
        cy.get(this.restjsoncheckbox).should('be.checked');
    }

    JdbcCheckBox() {
        cy.get(this.jdbccheckbox).check();
        cy.get(this.jdbccheckbox).should('be.checked');
    }

    setInitBalance(initbalance) {
        cy.get(this.initbal).clear();
        cy.get(this.initbal).type(initbalance);
    }

    setMinimumBalance(minbalance) {
        cy.get(this.minbal).clear();
        cy.get(this.minbal).type(minbalance);
    }

    LoanProviderDropdown() {
        cy.get(this.LoanProviderDropdownlist).select('JMS');
    }

    LoanProcessorDropdown() {
        cy.get(this.LoanPrcessorDropdownlist).select('Available Funds');
    }

    SubmitAdmin() {
        cy.get(this.adminsubmit).click();;
    }

    ValidatingSettingSuccess(){
        cy.get(this.settingsuccess).invoke('text').then((text)=>{
            expect(text).to.be.equal('Settings saved successfully.');
        })
    }

}

export default AdminPage;