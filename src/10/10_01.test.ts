import {
    addCompany,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse,
    removeBook,
    updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeBook,
    upgradeUserPC,
    UserType,
    UserWithBookType,
    UserWithLaptopType,
    WithCompanyType
} from "./10_01";
import exp from "node:constants";

test("reference type test", () => {
    let user: UserType = {
        name: "Alex",
        hair: 36,
        address: {
            city: "M"
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(36)
    expect(awesomeUser.hair).toBe(18)
    expect(awesomeUser.address).toBe(user.address)
})

test("change address", () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 36,
        address: {
            city: "M",
            house: 12
        },
        pc: {
            title: "Lenovo"
        }
    }

    const mowedUser = moveUser(user, "Kiev")

    expect(user).not.toBe(mowedUser)
    expect(user.address).not.toBe(mowedUser.address)
    expect(mowedUser.address.city).toBe("Kiev")
    expect(user.pc).toBe(mowedUser.pc)
})

test("upgrade PC to MAC", () => {
    let user: UserWithLaptopType = {
        name: "Alex",
        hair: 36,
        address: {
            city: "M",
            house: 12
        },
        pc: {
            title: "Lenovo"
        }
    }

    const upgradePC = upgradeUserPC(user, "MacBook")

    expect(upgradePC.pc.title).not.toBe(user.pc.title)
    expect(upgradePC.address).toBe(user.address)
    expect(upgradePC).not.toBe(user)
    expect(upgradePC.pc.title).toBe("MacBook")
    expect(user.pc.title).toBe("Lenovo")
})

test("upgrade house", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Alex",
        hair: 36,
        address: {
            city: "M",
            house: 12
        },
        pc: {
            title: "Lenovo"
        },
        books: ["JS", "TS", "CSS"]
    }

    const userCopy = moveUserToOtherHouse(user, 99)

    expect(userCopy.books).toBe(user.books)
    expect(userCopy).not.toBe(user)
    expect(userCopy.pc.title).toBe("Lenovo")
    expect(user.books).toStrictEqual(["JS", "TS", "CSS"])
})

test("upgrade book", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Alex",
        hair: 36,
        address: {
            city: "M",
            house: 12
        },
        pc: {
            title: "Lenovo"
        },
        books: ["JS", "TS", "CSS"]
    }

    const userCopy = upgradeBook(user, "React")

    expect(userCopy.books).not.toBe(user.books)
    expect(userCopy).not.toBe(user)
    expect(userCopy.pc.title).toBe("Lenovo")
    expect(userCopy.books).toStrictEqual(["JS", "TS", "CSS", "React"])
    expect(userCopy.books[3]).toBe("React")
})

test("update book", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Alex",
        hair: 36,
        address: {
            city: "M",
            house: 12
        },
        pc: {
            title: "Lenovo"
        },
        books: ["JS", "TS", "CSS"]
    }

    const userCopy = updateBook(user, "JS", "React")

    expect(user).not.toBe(userCopy)
    expect(user.pc).toBe(userCopy.pc)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[0]).toBe("React")
})

test("remove book JS", () => {
    let user: UserWithLaptopType & UserWithBookType = {
        name: "Alex",
        hair: 36,
        address: {
            city: "M",
            house: 12
        },
        pc: {
            title: "Lenovo"
        },
        books: ["JS", "TS", "CSS"]
    }

    const userCopy = removeBook(user, "JS")

    expect(user).not.toBe(userCopy)
    expect(user.pc).toBe(userCopy.pc)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[0]).toBe("TS")
    expect(userCopy.books[1]).toBe("CSS")
})

test("remove jobe", () => {
    let user: UserWithLaptopType & WithCompanyType = {
        name: "Alex",
        hair: 36,
        address: {
            city: "M",
            house: 12
        },
        pc: {
            title: "Lenovo"
        },
        companies: [
            {id: 1, title: "Epam"},
            {id: 2, title: "IT-incubator"},
        ]
    }

    const userCopy = addCompany(user, "Google")

    expect(user).not.toBe(userCopy)
    expect(user.pc).toBe(userCopy.pc)
    expect(userCopy.companies[2].id).toBe(3)
    expect(userCopy.companies[2]).toStrictEqual({id: 3, title: "Google"})
})

test("update company", () => {
    let user: UserWithLaptopType & WithCompanyType = {
        name: "Alex",
        hair: 36,
        address: {
            city: "M",
            house: 12
        },
        pc: {
            title: "Lenovo"
        },
        companies: [
            {id: 1, title: "Епам"},
            {id: 2, title: "IT-incubator"}
        ]
    }

    const userCopy = updateCompanyTitle(user, 1, "Epam") as UserWithLaptopType & WithCompanyType

    expect(user).not.toBe(userCopy)
    expect(user.pc).toBe(userCopy.pc)
    expect(userCopy.companies[0]).toStrictEqual({id: 1, title: "Epam"})
    expect(userCopy.companies[0].title).toStrictEqual("Epam")
    expect(userCopy.companies).not.toBe(user.companies)
})

test("update company2", () => {

    let companies = {
        "Dima": [{ id: 1, title: "Епам" }, { id: 2, title: "IT-incubator" }],
        "Artem": [{ id: 1, title: "IT-incubator" }]
    }

    const copy = updateCompanyTitle2(companies, "Dima", 1, "Epam")

    expect(copy["Dima"]).not.toBe(companies["Dima"])
    expect(copy["Artem"]).toBe(companies["Artem"])
    expect(copy["Dima"][0].title).toBe("Epam")
})