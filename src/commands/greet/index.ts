import {Args, Command, Flags} from '@oclif/core'
import * as inquirer from 'inquirer'
import Utils from '../../helper/utils.js' 

export default class Greet extends Command {
  static override args = {
    name: Args.string()
  }
  
  static override flags = {
    from: Flags.string(),
  }

  public async run(): Promise<void> {
    const {args, flags} = await this.parse(Greet);
    const prompt = inquirer.createPromptModule();
    
    let name = args.name
    if (!name) {
      const answer = await prompt({
        type: 'input',
        name: 'name',
        message: 'What is your name?',
      })     
    name = answer.name
    }
    
    let from = flags.from
    if (!from) {
      const answer = await prompt({
        type: 'input',
        name: 'from',
        message: 'What is your position?',
        default: 'Admin',
      })
      from = answer.from
    }

    const width = await prompt({
      type: 'input',
      name: 'value',
      message: 'What is width?',
      required: true
    })

    const lenght = await prompt({
      type: 'input',
      name: 'value',
      message: 'What is length?',
      required: true
    })

  this.log(`Welcome ${name} to calipso from ${from || 'anynone'}`)
  this.log(`Width: ${width.value} and Length: ${lenght.value}`)
  
  const utils = new Utils(width.value, lenght.value)
  this.log(`Square size: ${utils.getCount()}`)
    
  }
}
