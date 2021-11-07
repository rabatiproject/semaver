const {Command, flags} = require('@oclif/command')
const {updatePart} = require('../commons/check-file')

class UpdateCommand extends Command {
  async run() {
    const {flags} = this.parse(UpdateCommand)
    if (flags.major) {
      this.log('increasing major')
      updatePart(0)
    }
    if (flags.minor) {
      this.log('increasing minor')
      updatePart(1)
    }
    if (flags.patch) {
      this.log('increasing patch')
      updatePart(2)
    }

    if (flags.tag) {
      this.log('tagging in git ')
    }
  }
}

UpdateCommand.description = `Describe the command here
...
Extra documentation goes here
`

UpdateCommand.flags = {
  major: flags.boolean({char: 'x', description: 'increase major version', required: false}),
  minor: flags.boolean({char: 'y', description: 'increase minor version', required: false}),
  patch: flags.boolean({char: 'z', description: 'increase patch version', required: false}),
  tag: flags.boolean({char: 't', description: 'tag version in git', required: false}),
}

module.exports = UpdateCommand
