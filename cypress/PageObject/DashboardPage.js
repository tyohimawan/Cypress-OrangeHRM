class DashboardPage
{
    selectors = {
        btnMyInfo: () => cy.xpath("//span[contains(.,'My Info')]"),
        btnLeave: () => cy.xpath("//span[contains(.,'Leave')]"),
        btnProfile: () => cy.xpath("//p[@class='oxd-userdropdown-name']"),
        btnLogout: () => cy.xpath("//a[contains(.,'Logout')]"),
    }

    goToMyInfoPage()
    {
        this.selectors.btnMyInfo().click();
    }

    goToLeavePage()
    {
        this.selectors.btnLeave().click();
    }
    
    doLogout()
    {
        this.selectors.btnProfile().click();
        this.selectors.btnLogout().click();
    }
}

export default DashboardPage;