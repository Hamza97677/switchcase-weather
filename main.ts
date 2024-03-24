import inquirer from "inquirer";

async function main() {
    let continueProgram = true;

    while (continueProgram) {
        let weather = await inquirer.prompt([{
            message: "Enter weather:",
            type: "input",
            name: "userweather"
        }]);

        switch (weather.userweather.toLowerCase()) {
            case "cold":
                console.log("Please be safe, it's so cold outside.");
                break;
            case "sunny":
                console.log("Wear sunglasses, it's a sunny day!");
                break;
            case "rainy":
                console.log("Rain expected, please stay safe at home.");
                break;
            default:
                console.log("Please select a correct weather type.");
                break;
        }

        const { continueChoice } = await inquirer.prompt([{
            message: "Do you want to continue? (yes/no)",
            type: "input",
            name: "continueChoice"
        }]);

        continueProgram = continueChoice.toLowerCase() === "yes";
    }

    console.log("Thankyou for using wather app");
}

main();
