const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("sets the office number via constructor", ()=>{

    const valor = 2;
    const m = new Manager("gonzo", 3, "gmail", valor)

    expect(m.officeNumber).toBe(valor);
})