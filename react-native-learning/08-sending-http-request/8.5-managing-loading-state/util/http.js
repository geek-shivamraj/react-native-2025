import axios from "axios";

const BACKEND_URL = 'https://fir-app-9f3a1-default-rtdb.firebaseio.com';

/**
 *  - To fetch expenses here, we can use "useEffect" hook becoz it allows us to execute some code that
 *      should execute whenever the component re-renders.
 *  - Sending an HTTP request is an asynchronous task i.e., it doesn't complete immediately. That's why post & get returns Promises.
 *  - Promise is an object that will eventually give use access to some other data.
 *  - To work with promises, we can add .then() on the promise object & then pass a func to then() which will be called once the eventual data is there.
 *  - Or alternatively, we can use async await, which is more modern JS feature.
 */

export const storeExpense = async (expenseData) => {
    const response = await axios.post(BACKEND_URL + '/expenses.json', expenseData);
    return response.data.name;
};

export const fetchExpenses = async () => {
    const response = await axios.get(BACKEND_URL + '/expenses.json');

    // we will key-id for the expense from backend (Firebase)
    const expenses = [];

    //console.log(response);
    for (const key in response.data) {
        const expenseObj = {
            id: key,
            amount: response.data[key].amount,
            date: new Date(response.data[key].date),
            description: response.data[key].description,
        };
        expenses.push(expenseObj);
    }
    return expenses;
};


export const updateExpense = (id, expenseData) => {
    return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
};

export const deleteExpense = (id) => {
    return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
};