type LocalCityType = {
    title: string
    countryTitle: string
}
type AddressType = {
    streetTitle: string
    city: LocalCityType
}
type TechType = {
    id: number
    title: string
}
type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechType>
}
//с помощью синтаксиса литерала объекта
export const student: StudentType = {
    id: 1,
    name: "Alex",
    age: 35,
    isActive: true,
    address: {
        streetTitle: "Dimitrova ST.",
        city: {
            title: "Mogilev",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "JS"
        },
        {
            id: 2,
            title: "TS"
        },
        {
            id: 3,
            title: "CSS"
        }
    ]
}

console.log(student.address.city.title)
console.log(student.technologies[2].id)
console.log(student.technologies[2].title)