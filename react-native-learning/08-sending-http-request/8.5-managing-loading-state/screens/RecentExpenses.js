import {useContext, useEffect, useState} from 'react';

import ExpensesOutput from '../components/ExpensesOutput/ExpensesOutput';
import {ExpensesContext} from '../store/expenses-context';
import {getDateMinusDays} from '../util/date';
import {fetchExpenses} from "../util/http";
import LoadingOverlay from "../components/UI/LoadingOverlay";

/**
 *  - At the time of RecentExpenses loading, we see the text "No expense" briefly before the data is loaded.
 *      - This is not the best UI/UX. We would rather show some loading spinner or overlay whilst we're fetching
 *          & then show the results once we're done fetching.
 *      - To achieve this, let's build a new component (LoadingOverlay.js)
 *
 *      - We need to manage a local state here to find out whether we're currently loading data in the component or not.
 */
function RecentExpenses() {
    const expensesCtx = useContext(ExpensesContext);

    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {

        const getExpenses = async () => {
            setIsFetching(true);
            const expenses = await fetchExpenses();
            setIsFetching(false);
            expensesCtx.setExpenses(expenses);
        };

        getExpenses();
    }, []);

    const recentExpenses = expensesCtx.expenses.filter((expense) => {
        const today = new Date();
        const date7DaysAgo = getDateMinusDays(today, 7);

        return expense.date >= date7DaysAgo && expense.date <= today;
    });

    if(isFetching) {
        return <LoadingOverlay/>
    }

    return (
        <ExpensesOutput
            expenses={recentExpenses}
            expensesPeriod="Last 7 Days"
            fallbackText="No expenses registered for the last 7 days."
        />
    );
}

export default RecentExpenses;
