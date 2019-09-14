import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import EditExpensePage from "../components/EditExpensePage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import Header from "../components/Header";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
// import Portfolio from "../components/Portfolio";
// import Contact from "../components/Contact";
// import Home from "../components/Home";

const AppRouter = () =>
    <BrowserRouter>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit/:id" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>

                {/*<Route path="/" component={Home} exact={true}/>*/}
                {/*<Route path="/portfolio/" component={Portfolio} exact={true}/>*/}
                {/*<Route path="/portfolio/:id" component={Portfolio}/>*/}
                {/*<Route path="/contact" component={Contact}/>*/}

                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>;

export default AppRouter;