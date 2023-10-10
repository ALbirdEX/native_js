import {createGreetingMessage, ManType} from "./05-01";

let people: ManType[] = []

beforeEach(() => {
    people = [
        {name: "Andres Ivanas", age: 34},
        {name: "Alex Petros", age: 24},
        {name: "Dmitrus Sidoros", age: 18}
    ]
})

test("should get array of greeting messages", () => {
    const messages = createGreetingMessage(people)

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Andres. Welcome to IT-Incubator")
    expect(messages[1]).toBe("Hello Alex. Welcome to IT-Incubator")
    expect(messages[2]).toBe("Hello Dmitrus. Welcome to IT-Incubator")
})