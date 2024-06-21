const { inquireMenu, leerInput, pausa } = require("./helpers/inquirer");


require('colors');

const main = async () => {
    let opt = 2;
   

    do {
        opt = await inquireMenu();

        switch (opt) {
            case 1:
                  console.log('111111111')
                break;
            case 2:
                console.log('22222222')
                break;
            case 0:
                console.log("Saliendo...");
                break;
        }

    } while (opt !== 0);
}

main();
