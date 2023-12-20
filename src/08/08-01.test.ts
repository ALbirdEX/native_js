import {usersArray} from "./08_01";

type UsersType = {
    [key: string]: { id: number, nane: string }
}

let users: UsersType = {}

beforeEach(() => {
    users = {
        "1": {id: 1, nane: "Alex"},
        "154654": {id: 154654, nane: "Katia"},
        "12": {id: 12, nane: "Dima"},
        "654651": {id: 654651, nane: "Sergei"}
    }
})

test("should update corresponding user from obj", () => {

    users["12"].nane = "Poul"

    expect(users[12].nane).toBe("Poul");
    expect(users[12]).toEqual({id: 12, nane: "Poul"});
})

test("should delete corresponding user from obj", () => {

    delete users["1"]


    expect(users).toEqual({
        "154654": {id: 154654, nane: "Katia"},
        "12": {id: 12, nane: "Dima"},
        "654651": {id: 654651, nane: "Sergei"}
    });
    expect(users["1"]). toBeUndefined()
})