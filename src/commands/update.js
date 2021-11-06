const {Command, flags} = require('@oclif/command')

class UpdateCommand extends Command {
  async run() {
    const {flags} = this.parse(UpdateCommand)
    const name = flags.name || 'world'
    this.log(`hello ${name} from ./src/commands/hello.js`)
  }
}

UpdateCommand.description = `Describe the command here
...
Extra documentation goes here
`

UpdateCommand.flags = {
  major: flags.boolean({char: 'mj', description: 'increase major version'}),
  minor: flags.boolean({char: 'mn', description: 'increase minor version'}),
  patch: flags.boolean({char: 'pc', description: 'increase patch version'}),
}

module.exports = UpdateCommand
