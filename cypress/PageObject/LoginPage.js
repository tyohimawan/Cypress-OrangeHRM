class LoginPage 
{
    selectors = {
        TxtEmail: () => cy.xpath("//input[@name='username']"),
        TxtPassword: () => cy.xpath("//input[@name='password']"),
        BtnLogin: () => cy.xpath("//button[contains(.,'Login')]"),
        LinkedForgotPass: () => cy.xpath(""),
        ErrorMsg: () => cy.xpath("//p[contains(.,'Forgot your password?')]"),
    }

    doLogin(email, password)
    {
        this.selectors.TxtEmail().type(email);
        this.selectors.TxtPassword().type(password);
        this.selectors.BtnLogin().click();
    }

    forgotPass()
    {
        this.selectors.LinkedForgotPass().click();
    }
}

export default LoginPage;