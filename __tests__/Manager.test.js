const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

test("sets the office number via constructor", ()=>{

    const valor = 2;
    const m = new Manager("gonzo", 3, "gmail", valor)

    expect(m.officeNumber).toBe(valor);
})

test("return role  via getRole function", ()=>{

    const e = new Manager("gonzo", 123, "@gmail.com",1);

    expect(e.getRole()).toBe("Manager");
})

test("return officeNumber  via getOfficeNumber function", ()=>{
    const valor = 1;
    const e = new Manager("gonzo", 123, "@gmail.com",valor);

    expect(e.officeNumber).toBe(valor);
})