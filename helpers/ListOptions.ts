import { newExpensePrompt } from "./expensesprompts";
import { getWithFS, saveWithFS } from "./fsMethods";

export const getbills = async() => {

    const currentExpenses = await getWithFS('expenses');

    console.log(currentExpenses);

}

export const addbills = async() => {
    const newExpenseData = await newExpensePrompt();

    const currentExpenses = await getWithFS('expenses');

    currentExpenses.push(newExpenseData);

    await saveWithFS('expenses', currentExpenses);

}