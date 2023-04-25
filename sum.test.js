let myTesting = require('./sum')

test ("The sum of 2 numbers" , ()=>{

    expect(myTesting(4,4)).toBe(8)
})

test.only ("The sum of 3 numbers" , ()=>{

    expect(myTesting(3,7,10)).toBe(20)
})

test.skip ("The sum of 4 numbers" , ()=>{

    expect(myTesting(3,7,9,13,567,243)).toBe(842)
})

