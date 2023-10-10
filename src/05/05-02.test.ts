import {CityType} from "../02/02-02";
import {createMessage, getStreetTitleGovernmentsBuilding, getStreetTitleOfHouse} from "./05_02";

let city: CityType;

beforeEach(() => {
    city = {
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


test("list of streets titles of governments building", () => {
    let streetsNames = getStreetTitleGovernmentsBuilding(city.governmentBuildings)

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Central Str")
    expect(streetsNames[1]).toBe("Souths park str")
})

test("list of streets titles", () => {
    let streets = getStreetTitleOfHouse(city.houses)

    expect(streets.length).toBe(3);
    expect(streets[0]).toBe("White street")
    expect(streets[1]).toBe("Happy street")
    expect(streets[2]).toBe("Hogwarts street")
})

test("create greeting message for streets", () => {
    let message = createMessage(city.houses)

    expect(message.length).toBe(3)
    expect(message[0]).toBe("Hello guys from White street")
    expect(message[1]).toBe("Hello guys from Happy street")
    expect(message[2]).toBe("Hello guys from Hogwarts street")
})

