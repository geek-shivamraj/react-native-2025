import {useContext, useEffect, useState} from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';
import {fetchExpenses} from "../util/http";

/**
 *  - To fetch expenses here, we can use "useEffect" hook becoz it allows us to execute some code that
 *      should execute whenever the component re-renders.
 *  - Sending an HTTP request is an asynchronous task i.e., it doesn't complete immediately. That's why post & get returns Promises.
 *  - Promise is an object that will eventually give use access to some other data.
 *  - To work with promises, we can add .then() on the promise object & then pass a func to then() which will be called once the eventual data is there.
 *  - Or alternatively, we can use async await, which is more modern JS feature.
 *
 *  - It's not encouraged by React team to turn useEffect func into an async func rather define async func inside the useEffect hook.
 *
 *  - We can test & we will see "fetching" will work, but we've a problem here:
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
 *              - For all this reason, we can switch back to context in next module.
 *
 */
function RecentExpenses() {
    //const expensesCtx = useContext(ExpensesContext);

    const [fetchedExpenses, setFetchedExpenses] = useState([]);

    useEffect(() => {

        const getExpenses = async () => {
            const expenses = await fetchExpenses();
            setFetchedExpenses(expenses);
        };

        getExpenses();
    }, []);

    const recentExpenses = fetchedExpenses.filter((expense) => {
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
