const {Command, flags} = require('@oclif/command')
const {createFile} = require('../commons/check-file.js')

class CreateCommand extends Command {
  async run() {
    const {flags} = this.parse(CreateCommand)

    try {
      createFile(flags.initial)
    } catch (error) {
      this.log(error)
    }
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
