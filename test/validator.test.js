const {isInvalidEmail, isEmptyPayload} = require('../validator')

test('valid email',function(){
    const testPayload = {
        name:"test name",
        email: "test.email@example.com",
        interets: "testing"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(false)
})

test('invalid email',function(){
    const testPayload = {
        name:"test name",
        email: "test.email",
        interets: "testing"
    }
    const result = isInvalidEmail(testPayload)
    expect(result).toBe(true)
})

test('empty payload',function(){
    const testPayload = {}
    const result = isEmptyPayload(testPayload)
    expect(result).toBe(true)
})

test('non-empty payload',function(){
    const testPayload = {
        name:"test name",
        email: "test.email@example.com",
        interets: "testing"
    }
    const result = isEmptyPayload(testPayload)
    expect(result).toBe(false)
})