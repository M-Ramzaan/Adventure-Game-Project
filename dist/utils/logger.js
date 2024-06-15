import chalk from "chalk";
class logger {
    info(message) {
        console.log(chalk.blueBright(`[INFO] ${message}`));
    }
    warning(message) {
        console.log(chalk.blueBright(`[WARNING] ${message}`));
    }
    error(message) {
        console.log(chalk.blueBright(`[ERROR] ${message}`));
    }
}
export default new logger();
