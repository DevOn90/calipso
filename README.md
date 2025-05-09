calipso
=================

A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/calipso.svg)](https://npmjs.org/package/calipso)
[![Downloads/week](https://img.shields.io/npm/dw/calipso.svg)](https://npmjs.org/package/calipso)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g calipso
$ calipso COMMAND
running command...
$ calipso (--version)
calipso/0.0.0 linux-arm64 node-v20.19.1
$ calipso --help [COMMAND]
USAGE
  $ calipso COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`calipso hello PERSON`](#calipso-hello-person)
* [`calipso hello world`](#calipso-hello-world)
* [`calipso help [COMMAND]`](#calipso-help-command)
* [`calipso plugins`](#calipso-plugins)
* [`calipso plugins add PLUGIN`](#calipso-plugins-add-plugin)
* [`calipso plugins:inspect PLUGIN...`](#calipso-pluginsinspect-plugin)
* [`calipso plugins install PLUGIN`](#calipso-plugins-install-plugin)
* [`calipso plugins link PATH`](#calipso-plugins-link-path)
* [`calipso plugins remove [PLUGIN]`](#calipso-plugins-remove-plugin)
* [`calipso plugins reset`](#calipso-plugins-reset)
* [`calipso plugins uninstall [PLUGIN]`](#calipso-plugins-uninstall-plugin)
* [`calipso plugins unlink [PLUGIN]`](#calipso-plugins-unlink-plugin)
* [`calipso plugins update`](#calipso-plugins-update)

## `calipso hello PERSON`

Say hello

```
USAGE
  $ calipso hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ calipso hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/Desktop/calipso/blob/v0.0.0/src/commands/hello/index.ts)_

## `calipso hello world`

Say hello world

```
USAGE
  $ calipso hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ calipso hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/Desktop/calipso/blob/v0.0.0/src/commands/hello/world.ts)_

## `calipso help [COMMAND]`

Display help for calipso.

```
USAGE
  $ calipso help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for calipso.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.28/src/commands/help.ts)_

## `calipso plugins`

List installed plugins.

```
USAGE
  $ calipso plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ calipso plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.37/src/commands/plugins/index.ts)_

## `calipso plugins add PLUGIN`

Installs a plugin into calipso.

```
USAGE
  $ calipso plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into calipso.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CALIPSO_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CALIPSO_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ calipso plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ calipso plugins add myplugin

  Install a plugin from a github url.

    $ calipso plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ calipso plugins add someuser/someplugin
```

## `calipso plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ calipso plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ calipso plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.37/src/commands/plugins/inspect.ts)_

## `calipso plugins install PLUGIN`

Installs a plugin into calipso.

```
USAGE
  $ calipso plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into calipso.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the CALIPSO_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the CALIPSO_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ calipso plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ calipso plugins install myplugin

  Install a plugin from a github url.

    $ calipso plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ calipso plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.37/src/commands/plugins/install.ts)_

## `calipso plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ calipso plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ calipso plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.37/src/commands/plugins/link.ts)_

## `calipso plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ calipso plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ calipso plugins unlink
  $ calipso plugins remove

EXAMPLES
  $ calipso plugins remove myplugin
```

## `calipso plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ calipso plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.37/src/commands/plugins/reset.ts)_

## `calipso plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ calipso plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ calipso plugins unlink
  $ calipso plugins remove

EXAMPLES
  $ calipso plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.37/src/commands/plugins/uninstall.ts)_

## `calipso plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ calipso plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ calipso plugins unlink
  $ calipso plugins remove

EXAMPLES
  $ calipso plugins unlink myplugin
```

## `calipso plugins update`

Update installed plugins.

```
USAGE
  $ calipso plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.37/src/commands/plugins/update.ts)_
<!-- commandsstop -->
