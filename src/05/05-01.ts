export type ManType = {
    name: string
    age: number
}
const people: ManType[] = [
    {name: "Andres Ivanas", age: 34},
    {name: "Alex Petros", age: 24},
    {name: "Dmitrus Sidoros", age: 18}
]


const dimychTransformator = (man: ManType) => ({
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
})

const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Anres", lastName: "Ivanas"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alex", lastName: "Petros"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitrus", lastName: "Sidoros"
    },
]


const devs2 = [
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

const devs3 = people.map(dimychTransformator)
const devs4 = people.map(man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

const messages = people.map( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)

export const createGreetingMessage = (people: ManType[]) => {
    return  people.map( man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-Incubator`)
}