let a = {
    name: "it-incubator",
    protocol: "https",
    maxStudentCount: 10,
    isOnline: true,
    student: ["Ivan", "Andrei", "Alex",],
    classroom: {
        teacher: {
            name: "Loli",
            age: 18
        }
    }
}

let b = {...a} //shllow copy
b.classroom.teacher.name = "Zooz"
console.log(a.classroom.teacher.name)
let copy = {...a, student: [...a.student], classroom: {...a.classroom, teacher: {...a.classroom.teacher}}}


let state = {
    name: "it-incubator",
    age: 1,
    school: {
        address: "Minsk",
        director: {
            name: "Dima"
        }
    }
}

let stateCopy = {...state, school: {...state.school, director: {...state.school.director}}}


let s = [{name: "D", xxx: {age: 12}},{name: "D"}]

let t = s.map(el => ({...el, xxx: {...el.xxx}})) //при помощи .map делакем копию ,вместо return ({... возвращаем копию каждого obj})