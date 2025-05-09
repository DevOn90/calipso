import {runCommand} from '@oclif/test'
import {expect} from 'chai'

describe('greet', () => {
  it('runs greet cmd', async () => {
    const {stdout} = await runCommand('greet')
    expect(stdout).to.contain('hello world')
  })

  it('runs greet --name oclif', async () => {
    const {stdout} = await runCommand('greet --name oclif')
    expect(stdout).to.contain('hello oclif')
  })
})
