import {UserType} from "./10_01";

function makeHairStyle(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}

    //copy.hair = u.hair / power

    return copy
}


test("reference type test", () => {
    let user: UserType = {
        name: "Alex",
        hair: 36,
        address: {title: "M"}
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(36)
    expect(awesomeUser.hair).toBe(18)
    expect(awesomeUser.address).toBe(user.address)
})