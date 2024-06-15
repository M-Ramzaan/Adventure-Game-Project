import chalk from "chalk";

class logger {
  info(message: string): void {
    console.log(chalk.blueBright(`[INFO] ${message}`));
  }

  warning(message: string): void {
    console.log(chalk.blueBright(`[WARNING] ${message}`));
  }

  error(message: string): void {
    console.log(chalk.blueBright(`[ERROR] ${message}`));
  }
}

export default new logger();
