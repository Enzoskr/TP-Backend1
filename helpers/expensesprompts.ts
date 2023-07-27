import inquirer from "inquirer"
import { Spent } from "../interfaces/interfaces"

export const newExpensePrompt = async(): Promise<Spent> => {

    return await inquirer.prompt([
        {
            type: 'number',
            text: 'expense',
            desc: 'ingrese cuanto gastaste?',

        },
        {
            type: 'input',
            text: 'type',
            desc: 'ingrese su tipo de gasto',

        },
        {
            type: 'input',
            text: 'category',
            desc: 'ingrese categoria de gasto',

        }
    ])
}