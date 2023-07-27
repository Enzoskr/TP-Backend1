import inquirer from "inquirer"
import { Spent } from "../interfaces/interfaces"

export const newExpensePrompt = async(): Promise<Spent> => {

    return await inquirer.prompt([
        {
            type: 'number',
            name: 'Gastos',
            desc: 'ingrese cuanto gastaste?',

        },
        {
            type: 'input',
            name: 'Tipo de gasto',
            desc: 'ingrese su tipo de gasto',

        },
        {
            type: 'input',
            name: 'Categoria de gasto',
            desc: 'ingrese categoria de gasto',

        }
    ])
}