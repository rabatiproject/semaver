const {Command, flags} = require('@oclif/command')

class CreateCommand extends Command {

  async run() {


    const {flags} = this.parse(CreateCommand)
    this.log(flags)
  }
}

CreateCommand.description = `Describe the command here
...
Extra documentation goes here
`

CreateCommand.flags = {
  initial: flags.string({char: 'i', description: 'initial version', required: false}),
}

module.exports = CreateCommand
