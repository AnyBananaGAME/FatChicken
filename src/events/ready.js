const chalk = require('chalk')
const config = require('../../resources/configs/config.json')

module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    await console.log(chalk.gray('[') + chalk.green('+') + chalk.gray(']') +  chalk.white(` ${client.user.tag} is now Online`))
}
}