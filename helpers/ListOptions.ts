
import { newExpensePrompt } from "./expensesprompts";
import { getWithFS, saveWithFS } from "./fsMethods";

export const getbills = async() => {

    const currentExpenses = await getWithFS('expences');

    console.log(currentExpenses);

}

export const addbills = async() => {
    const newExpenseData = await newExpensePrompt();

    const currentExpenses = await getWithFS('expences');

    currentExpenses.push(newExpenseData);

    await saveWithFS('expences', currentExpenses);

}