const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');

test('sets the school via constructor', ()=>{

    const school = "UCF";
    const i = new Intern("gonzo",1,"@gmail", school);

    expect(i.school).toBe(school);
})

test('gets the role via getRole() function', ()=>{

    const i = new Intern("gonzo",1,"@gmail", "UCF");

    expect(i.getRole()).toBe("Intern");
})

test('gets the school via getSchool() function', ()=>{

    const i = new Intern("gonzo",1,"@gmail", "UCF");

    expect(i.getSchool()).toBe("UCF");
})