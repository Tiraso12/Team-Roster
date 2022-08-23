const Engineer = require('../lib/Engineer');

test("set github username via constructor", ()=>{
    
    const github = "Tiraso12";
    const e = new Engineer("gonzo", 123, "@gmail.com", github);

    expect(e.github).toBe(github);
})

test("return github username via getGithub function", ()=>{

    const e = new Engineer("gonzo", 123, "@gmail.com", "tiraso12");

    expect(e.getRole()).toBe("Engineer");
})

test("return github username via getGithub function", ()=>{

    const e = new Engineer("gonzo", 123, "@gmail.com", "tiraso12");

    expect(e.getGithub()).toBe("tiraso12");
})