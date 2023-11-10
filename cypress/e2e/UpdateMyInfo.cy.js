import LoginPage from "../PageObject/LoginPage";
import DashboardPage from "../PageObject/DashboardPage";
import MyInfoPage from "../PageObject/MyInfoPage";
import DataParam from "../fixtures/TestParam.json";

const login = new LoginPage();
const dashboard = new DashboardPage();
const info = new MyInfoPage();

describe('Update My Info', () => {
    beforeEach(() => {
        cy.visit(DataParam.baseURL)
        login.doLogin(DataParam.username, DataParam.password);
        dashboard.goToMyInfoPage();
    })

    it('Update Personal Detail', () =>{
        cy.get('h6').should('contain', 'Personal Detail');
        info.UpdatePersonalDetail(DataParam.firstName, DataParam.lastName);
        dashboard.doLogout();
    })

    it('Update Contact Detail', () => {
        info.goToContactDetail();
        cy.get('h6').should('contain', 'Contact Detail');
        info.UpdateContactDetail(DataParam.street, DataParam.city, DataParam.otherEmail);
        dashboard.doLogout();
    })
})