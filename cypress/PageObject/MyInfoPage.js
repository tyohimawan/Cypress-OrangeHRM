class MyInfoPage
{
    selectors = {
        txtFirstName: () => cy.xpath("//input[@name='firstName']"),
        txtMiddleName: () => cy.xpath("//input[@name='middleName']"),
        txtLastName: () => cy.xpath("//input[@name='lastName']"),
        btnSave: () => cy.xpath("(//button[@type='submit'])[1]"),
        btnContactDetail: () => cy.xpath("//a[contains(.,'Contact Details')]"),
        btnProfileDetail: () => cy.xpath("//a[contains(.,'Personal Details')]"),
        txtStreet1: () => cy.xpath("(//input[@class='oxd-input oxd-input--active'])[2]"),
        txtCity: () => cy.xpath("(//input[@class='oxd-input oxd-input--active'])[4]"),
        txtOtherEmail: () => cy.xpath("(//input[@class='oxd-input oxd-input--active'])[11]")
    }

    UpdatePersonalDetail(firstName, lastName){
        this.selectors.txtFirstName().clear().type(firstName);
        this.selectors.txtMiddleName().clear();
        this.selectors.txtLastName().clear().type(lastName);
        this.selectors.btnSave().click();
    }

    goToContactDetail()
    {
        this.selectors.btnContactDetail().forceClick();
    }

    UpdateContactDetail(street, city, otherEmail){
        this.selectors.txtStreet1().clear().type(street);
        this.selectors.txtCity().clear().type(city);
        this.selectors.btnSave().click();
    }
}

export default MyInfoPage;