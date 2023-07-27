import inquirer from 'inquirer';
import { addbills, getbills } from './helpers/ListOptions';

const main = async () => {

    let run =   true;

    while (run) {
        const action = await inquirer.prompt([
            {
                type: 'list',
                name: 'selectAction',
                message: 'selecciona una opcion',
                choices: [
                    {
                        value: 1,
                        name: 'ver gasto'
                    },
                    {
                        value: 2,
                        name: 'ingresar gasto'
                    },
                    {
                        value: 99,
                        name: "SALIR"
                    },
                ]
            }
        ])
        switch (action.selectAction) {
            case 1:
                await getbills();
                break
                case 2:
                    await addbills();
                    break
                    case 99:
                        run = false;
                        break
                        default:
                            run = false;
                            break;
    }
 }
};


main()
