class RedirectableLinks {

    aboutuslink = ".leftmenu > :nth-child(2) > a";
    serviceslink = "//ul[@class='leftmenu']//a[normalize-space()='Services']";
    bookstorelink = "a[href*='store-01?wsdl']";
    loanprocessorlink="a[href*='Processor?wsdl']";
    parabankservice="a[href*='ParaBank?wsdl']";
    wadl="a[href*='wadl']";
    swagger="a[href*='index.html']";

    clickAboutUsLink() {
        cy.get(this.aboutuslink).click();
    }

    clickServicesLink() {
        cy.xpath(this.serviceslink).click();
    }

    validateAboutUsLink() {
        cy.title().then(title => {
            if (title.includes("About Us")) {
                cy.log("About Us Link is RedirectAble");
            } else {
                cy.log("About Us Link is Not RedirectAble");
            }
        });
    }

    validateBookStoreLink() {

        cy.get(this.bookstorelink)
            .then((a) => {
                const href = a.prop('href');
                cy.request(href).then((response) => {
                    expect(response.status).to.eq(200);
                });
            });
    }

    validateLoanProcessorLink() {

        cy.get(this.loanprocessorlink)
            .then((a) => {
                const href = a.prop('href');
                cy.request(href).then((response) => {
                    expect(response.status).to.eq(200);
                });
            });
    }

    validateParaBankServiceLink() {

        cy.get(this.parabankservice)
            .then((a) => {
                const href = a.prop('href');
                cy.request(href).then((response) => {
                    expect(response.status).to.eq(200);
                });
            });
    }

    validateWADLLink() {

        cy.get(this.wadl)
            .then((a) => {
                const href = a.prop('href');
                cy.request(href).then((response) => {
                    expect(response.status).to.eq(200);
                });
            });
    }

    validateSwaggerLink() {

        cy.get(this.swagger)
            .then((a) => {
                const href = a.prop('href');
                cy.request(href).then((response) => {
                    expect(response.status).to.eq(200);
                });
            });
    }



}

export default RedirectableLinks;