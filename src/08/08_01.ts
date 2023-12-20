export const userObj = {
    "0": "Alex",
    "1": "Katia",
    "2": "Dima",
    "3": "Sergei"
}


type UsersType = {
    [key: string]: { id: number, nane: string }
}

const   users: UsersType = {
    "1": {id: 1, nane: "Alex"},
    "154654": {id: 154654, nane: "Katia"},
    "12": {id: 12, nane: "Dima"},
    "654651": {id: 654651, nane: "Sergei"}
}

let user = {id: 1, nane: "Alex"}
users[user.id] = user
delete users[user.id]
users[user.id].nane = "Pit"


export const usersArray = [
    {id: 1, nane: "Alex"},
    {id: 154654, nane: "Katia"},
    {id: 12, nane: "Dima"},
    {id: 654651, nane: "Sergei"}
]

