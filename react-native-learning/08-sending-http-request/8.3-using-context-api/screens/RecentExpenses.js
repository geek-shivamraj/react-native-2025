import {useContext, useEffect, useState} from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';
import {fetchExpenses} from "../util/http";

/**
 *   As we saw in last module "fetching" worked, but we had a problem there:
 *      - If we add new expense, it will not show in the Recent Expenses screen & only after app reload we will see.
 *          though it's stored on backend & we will see in the db, but it's not available on Frontend, Why?
 *          - This is happening becoz RecentExpenses component actually wasn't removed i.e., when we add new expense in ManageExpenses,
 *              this RecentExpense component is still in the background, it's not destroyed.
 *          - Becoz we used Stack navigator & there if we push a new screen (e.g., RecentExpense) onto that stack, the old screen (e.g., ManageExpenses)
 *              still runs in the background no matter if we're on iOS or Android.
 *          - i.e., When we close the ManageExpenses screen, we don't recreate RecentExpenses instead it was always there
 *              & hence useEffect doesn't execute again & therefore we don't fetch again.
 *
 *      - Solution:
 *          Way 1: We might be able to find a workaround to listen to changes in the navigator.
 *              - React navigation provides ways of listening to navigator changes.
 *
 *         Way 2 (Better Solution): We keep on using context once we fetched our expenses.
 *              - i.e., we don't have to change all the code in our app becoz we can keep on working with context.
 *              - As additional benefit, we've to send less HTTP request becoz we don't have to fetch new data from backend just becoz we added a new expense becoz
 *                  when we add a new expense we already have all the data we entered on the device so fetching it again from backend is a bit redundant.
 *              - If we keep on using "context", we utilize the data we already have on the device & we just update everything offline in addition to
 *                  sending the data to the backend. This saves us extra request where we fetch the data again we already have.
 *
 *              - For all this reason, we can switch back to context & instead of managing expenses here with state, we can simply add
 *                  a new method to our context
 *              - This context method will allow us to set our expenses so that we don't just add a new expense, but we also set expenses when we initially fetch them
 *                  so that when we get expenses from the backend we can set them to our context & then we work on the fetched & set expenses thereafter in the app.
 *
 */
function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    useEffect(() => {

        const getExpenses = async () => {
            const expenses = await fetchExpenses();
            expensesCtx.setExpenses(expenses);
        };

        getExpenses();
    }, []);

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date >= date7DaysAgo && expense.date <= today;
    });

    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod="Last 7 Days"
            fallbackText="No expenses registered for the last 7 days."
        />
    );
}

export default RecentExpenses;
