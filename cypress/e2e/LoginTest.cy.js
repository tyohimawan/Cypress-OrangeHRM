import LoginPage from "../PageObject/LoginPage";
import DashboardPage from "../PageObject/DashboardPage";
import DataParam from "../fixtures/TestParam.json";

const login = new LoginPage();
const dashboard = new DashboardPage();

describe('Login in Orange HRM', () => {

    beforeEach(() => {
        cy.visit(DataParam.baseURL);
    })

    it('Login dan Logout', () =>{
        login.doLogin(DataParam.username, DataParam.password);
        dashboard.doLogout();
    })
})