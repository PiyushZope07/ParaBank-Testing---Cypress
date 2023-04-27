class Login{

    userName="input[name='username']";
    password="input[name='password']";
    loginButton="input[value*='Log']";

    welcomeUsernamesuccess=".smallText > b";
    registerButtonHome = "a[href*='register.htm']";

    setUserName(inputusername){
        cy.get(this.userName).type(inputusername);
    }

    setPassword(inputpass){
        cy.get(this.password).type(inputpass);
    }

    clickLogin(){
        cy.get(this.loginButton).click();
    }

    validateLoginWithWelcome(){
        cy.get(this.welcomeUsernamesuccess).should('have.text','Welcome');
    }

    validateIncorrectLogin(){
        cy.get(this.registerButtonHome).should('be.visible');
    }
}

export default Login;