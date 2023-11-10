import LoginPage from "../PageObject/LoginPage";
import DashboardPage from "../PageObject/DashboardPage";
import LeavePage from "../PageObject/LeavePage";
import DataParam from "../fixtures/TestParam.json";

const login = new LoginPage();
const dashboard = new DashboardPage();
const leave = new LeavePage();

describe('Leave Test include Add and Cancel', () => {
    beforeEach(() => {
        cy.viewport(1536, 739);
        cy.visit(DataParam.baseURL);
        login.doLogin(DataParam.username, DataParam.password);
    })

    it('Add Leave', () => {
        dashboard.goToLeavePage();
        cy.get('h6').should('contain', 'Leave');
        leave.SetLeave(DataParam.firstName, DataParam.fromDate, DataParam.toDate);
        dashboard.doLogout();
    })
})