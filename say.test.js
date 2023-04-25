const myTesting = require('./say')

test ("testing the welcome message", ()=>{
    expect(myTesting("hmad")).toBe("your name starts with h")
})