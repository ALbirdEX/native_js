import {MamType} from "./07-destructuring";

let props: MamType;
beforeEach(() => {
    props = {
        name: "Alex",
        age: 35,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "React"}],
        address: {
            street: {
                title: "Dimitrova street"
            }
        }
    }
})

test("", () => {


    const {lessons, age} = props
    const {title} = props.address.street

    const a = props.age;
    const l = props.lessons

    expect(age).toBe(35)
    expect(lessons.length).toBe(3)

    expect(a).toBe(35)
    expect(l.length).toBe(3)
    expect(title).toBe("Dimitrova street")
})

test("1", () => {

    const l1 = props.lessons[0]
    const l2 = props.lessons[1]
    const [, ls2, ...restLessons] = props.lessons

    expect(l1.title).toBe("1")
    expect(l2.title).toBe("2")

    expect(ls2.title).toBe("2")
    expect(restLessons.length).toBe(1)
    expect(restLessons[0].title).toBe("3")

    expect(restLessons[0]).toStrictEqual({title: "3", name: "React"})
})