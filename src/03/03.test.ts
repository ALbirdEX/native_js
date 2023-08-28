import {StudentType} from "../02/02";
import {addSkill, doesStudentLiveIn, studentIsActive} from "./03";

let student: StudentType
beforeEach(() => {
    student = {
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
})

test("new tech skill should added to student", () => {
    expect(student.technologies.length).toBe(3)

    addSkill(student, "Angular")

    expect(student.technologies.length).toBe(4)
    expect(student.technologies[3].title).toBe("Angular")
    expect(student.technologies[3].id).toBeDefined()
})

test("student should be made active", () => {
    expect(student.isActive).toBe(true)

   studentIsActive(student, false)

   expect(student.isActive).toBe(false)
})

test("dose student live in city?", () => {

    let res1 = doesStudentLiveIn(student, "Moscow")
    let res2 = doesStudentLiveIn(student, "Mogilev")

    expect(res1).toBe(false)
    expect(res2).toBe(true)
})