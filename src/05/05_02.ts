import {GovernmentBuildingsType, HouseType} from "../02/02-02";

export const getStreetTitleGovernmentsBuilding =
    (buildings: Array<GovernmentBuildingsType>) => {
        return buildings.map(build => build.address.street.title)
    }

export const getStreetTitleOfHouse = (houses: Array<HouseType>) => {
    return houses.map(house => house.address.street.title)
}

export const createMessage = (houses: Array<HouseType>) => {
    return houses.map(house => `Hello guys from ${house.address.street.title}`)
}