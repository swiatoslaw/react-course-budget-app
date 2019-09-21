import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => {
    return (
        <div className="content-container">
            <div className="list-header">
                <div className="show_for_mobile">Expenses</div>
                <div className="show_for_desktop">Expense</div>
                <div className="show_for_desktop">Amount</div>
            </div>
            <div className="list-body">
                {
                    props.expenses.length === 0 ? (
                        <div className="list-item list-item--message">
                            <span>No expenses</span>
                        </div>
                    ) : (
                        props.expenses.map(expense => {
                            return <ExpenseListItem key={expense.id} {...expense}/>
                        })
                    )
                }
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
};

// export default ExpenseList;
export default connect(mapStateToProps)(ExpenseList);