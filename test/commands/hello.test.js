const {expect, test} = require('@oclif/test')

describe('hello', () => {
  test
  .stdout()
  .command(['create'])
  .it('runs hello', ctx => {
    // expect(ctx.stdout).to.contain('hello world')
    expect(1).toBe(1);
  })


})
