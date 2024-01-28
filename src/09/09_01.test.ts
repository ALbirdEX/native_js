function increaseAge(u: UserType) {  //приходит user(ссылка) с ней и работаем меняя user
    u.age++
}

type AddressType = {
    title: string
}

type UserType = {
    name: string
    age: number
    address: AddressType
}

test("big reference type test", () => {

    let user: UserType = {
        name: "Aex",
        age: 36,
        address: {
            title: "Mogilev"
        }
    }

    increaseAge(user)                              //передамём ссылку на user

    expect(user.age).toBe(37)


    const superman = user                             //ссылка на user

    superman.age = 1000                               // работаем меняя user

    expect(user.age).toBe(1000)

})

test("array reference test", () => {

    let users: UserType[] = [
        {name: "Aex", age: 36, address: {title: "Mogilev"}},
        {name: "Dima", age: 40, address: {title: "Kiev"}}
    ]

    let admin = users
    admin.push({name: "Grisha", age: 20, address: {title: "Minsk"}})

    expect(users[2]).toEqual({
        name: "Grisha", age: 20, address: {title: "Minsk"}
    })


})

test("value tpetest", () => {

    let usersCount = 100              //примитив, ссылки работабт только с obj
    let adminsCount = usersCount      //не ссылка а как бы 100

    adminsCount++

    expect(adminsCount).toBe(101)
    expect(usersCount).toBe(100)

})

test("array test", () => {

    const addressAll = {
        title: "Mogilev"
    }

    let user: UserType = {
        name: "Aex",
        age: 36,
        address: addressAll  //ссылка
    }


    //let addr = user.address

    let user2: UserType = {
        name: "Veronika",
        age: 36,
        address: addressAll
    }

    //user2.address.title = "Bali"
    addressAll.title = "Bali"

    expect(user.address.title).toBe("Bali")
    expect(user.address).toBe(user2.address)
})

test("reference rype array test", () => {

    const addressAll = {
        title: "Mogilev"
    }

    let user: UserType = {
        name: "Aex",
        age: 36,
        address: addressAll  //ссылка
    }

    let user2: UserType = {
        name: "Veronika",
        age: 36,
        address: addressAll
    }
    const users = [user, user2, {name: "Sasha", age: 1, address: addressAll}]

    const admins = [user,user2]

    admins[0].name = "Aleksander"           //еняерез ссылк user.name

    expect(user.name).toBe("Aleksander")
    expect(users[0].name).toBe("Aleksander")   //ссылка на user
    expect(admins[0].name).toBe("Aleksander")  //ссылка на user
})

test("sort array test", () => {
    const letters = ["c", "e","a", "d", "z"]

    passportist(letters)

    expect(letters).toEqual(["c", "e","a", "d", "z"])
})

function passportist(leters: any) {            //чистая ф-я
const copy = [...leters].sort();               //делаем копию, работаем с копией
    console.log(copy)
}