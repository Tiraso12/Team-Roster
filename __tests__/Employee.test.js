const Employee = require("../lib/Employee");

test("create the employee object", ()=>{
  const e = new Employee();

  expect(typeof(e)).toBe("object");
});

test("sets the name of the constructor", ()=>{
  const name = 'gonzalo';
  const e = new Employee(name);

  expect(e.name).toBe(name);
});

test("sets the id of the constructor", ()=>{
  const valor = 1;
  const e = new Employee("gonzo", valor);

  expect(e.id).toBe(valor);
});

test("sets the email of the constructor", ()=>{
  const valor = "gonzo@gmail.com";
  const e = new Employee("gonzo",1, valor);

  expect(e.email).toBe(valor);
});

test("get the name with getName function", ()=>{
  const name = "gonzo";
  const e = new Employee(name);
  
  expect(e.getName()).toBe(name);
})

test("get the ID with getId function", ()=>{
  const valor = 1;
  const e = new Employee("gonzo",valor);
  
  expect(e.getId()).toBe(valor);
})

test("get the Email with getEmail function", ()=>{
  const valor = "gonzo@gmail.com";
  const e = new Employee("gonzo",1, valor);
  
  expect(e.getEmail()).toBe(valor);
})

test("get the Roke with getRole function", ()=>{
  const e = new Employee("gonzo",1, "gmail");
  
  expect(e.getRole()).toBe("Employee");
})