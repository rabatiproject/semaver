semaver
=======



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/semaver.svg)](https://npmjs.org/package/semaver)
[![Downloads/week](https://img.shields.io/npm/dw/semaver.svg)](https://npmjs.org/package/semaver)
[![License](https://img.shields.io/npm/l/semaver.svg)](https://github.com/denizgursoy/semaver/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g semaver
$ semaver COMMAND
running command...
$ semaver (-v|--version|version)
semaver/0.0.0 darwin-x64 node-v16.2.0
$ semaver --help [COMMAND]
USAGE
  $ semaver COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`semaver create`](#semaver-create)
* [`semaver help [COMMAND]`](#semaver-help-command)
* [`semaver update`](#semaver-update)

## `semaver create`

Describe the command here

```
USAGE
  $ semaver create

OPTIONS
  -i, --initial=initial  initial version

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/create.js](https://github.com/denizgursoy/semaver/blob/v0.0.0/src/commands/create.js)_

## `semaver help [COMMAND]`

display help for semaver

```
USAGE
  $ semaver help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `semaver update`

Describe the command here

```
USAGE
  $ semaver update

OPTIONS
  -t, --tag    tag version in git
  -x, --major  increase major version
  -y, --minor  increase minor version
  -z, --patch  increase patch version

DESCRIPTION
  ...
  Extra documentation goes here
```

_See code: [src/commands/update.js](https://github.com/denizgursoy/semaver/blob/v0.0.0/src/commands/update.js)_
<!-- commandsstop -->
