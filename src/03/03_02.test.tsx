import {CityType} from "../02/02-02";
import {addMoneyToBudget, createMessage, repairedHouse, toFireStaff, toHireStaff} from "./03";

let cityNew: CityType;

beforeEach(() => {
    cityNew = {
        title: "New York",
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    street: {
                        title: "White street"
                    },
                    number: 100
                }
            },
            {
                buildedAt: 2008,
                repaired: false,
                address: {
                    street: {
                        title: "Happy street"
                    },

                    number: 100
                }
            },
            {
                buildedAt: 2020,
                repaired: false,
                address: {
                    street: {
                        title: "Hogwarts street"
                    },
                    number: 200
                }
            }
        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 200000,
                staffCount: 200,
                address: {
                    street: {
                        title: "Central Str"
                    }
                }
            },
            {
                type: "FIRE-STATION",
                budget: 500000,
                staffCount: 1000,
                address: {
                    street: {
                        title: "Souths park str"
                    }
                }
            }
        ],
        citizenNumber: 1000000
    }
})

test("Budget should be changed for HOSPITAL", () => {
    addMoneyToBudget(cityNew.governmentBuildings[0], 100000)

    expect(cityNew.governmentBuildings[0].budget).toBe(300000)
})
test("Budget should be changed for FIRE-STATION", () => {
    addMoneyToBudget(cityNew.governmentBuildings[1], -100000)

    expect(cityNew.governmentBuildings[1].budget).toBe(400000)
})
test("Houses should be repaired", () => {
    //repairedHouse(cityNew.houses[1], true)
    repairedHouse(cityNew.houses[1])

    expect(cityNew.houses[1].repaired).toBeTruthy()
})
test("staff should be increased", () => {
    toFireStaff(cityNew.governmentBuildings[1], 20)
    toFireStaff(cityNew.governmentBuildings[0], 20)

    expect(cityNew.governmentBuildings[1].staffCount).toBe(980)
    expect(cityNew.governmentBuildings[0].staffCount).toBe(180)
})
test("staff should be hire", () => {
    toHireStaff(cityNew.governmentBuildings[0], 20)

    expect(cityNew.governmentBuildings[0].staffCount).toBe(220)
})
test("Greeting message should be correct for city", () => {
    const message = createMessage(cityNew)

    expect(message).toBe("Hi New York citizens")
})