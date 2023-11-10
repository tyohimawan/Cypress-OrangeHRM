class LeavePage 
{
    selectors = {
        btnAssignLeave: () => cy.xpath("//li[contains(.,'Assign Leave')]"),
        btnMyLeave: () => cy.xpath("//a[contains(.,'My Leave')]"),
        txtEmployeeName: () => cy.xpath("//input[@placeholder='Type for hints...']"),
        txtSelectedName: () => cy.xpath("//div[@id='app']/div[@class='oxd-layout']/div[@class='oxd-layout-container']/div[@class='oxd-layout-context']//form[@class='oxd-form']/div[1]/div/div[@class='oxd-grid-item oxd-grid-item--gutters']/div//div[@class='oxd-autocomplete-wrapper']/div/input[@placeholder='Type for hints...']"),
        btnLeaveTypePersonal: () => cy.xpath("//div[@role='option'][contains(.,'CAN - Personal')]"),
        btnFromDate: () => cy.xpath("(//input[@placeholder='yyyy-mm-dd'])[1]"),
        btnToDate: () => cy.xpath("(//input[@placeholder='yyyy-mm-dd'])[2]"),
        btnAssign: () => cy.xpath("//button[contains(.,'Assign')]"),
        btnOk: () => cy.xpath("//button[contains(.,'Ok')]"),
        btnCancel: () => cy.xpath("//button[contains(.,'Cancel')]")
    }

    SetLeave(name, fromDate, toDate)
    {
        this.selectors.btnAssignLeave().click();
        this.selectors.txtEmployeeName().type(name);
        this.selectors.txtSelectedName().click();
        this.selectors.btnLeaveTypePersonal().click();
        this.selectors.btnFromDate().type(fromDate);
        this.selectors.btnToDate().type(toDate);
        this.selectors.btnAssign().click();
    }

    CancelLeave()
    {
        this.selectors.btnMyLeave().click();
        this.selectors.btnCancel().click();
    }

}

export default LeavePage;