import {CityType, GovernmentBuildingsType} from "../02/02-02";

export const demolishHousesOnTheStreet = (city: CityType, title: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== title)
   /* city.houses = city.houses.filter(house => !(house.address.street.title === title))*/
}
// clean function
export function getBuildingWithStaffCountGreaterThen(buildings: Array<GovernmentBuildingsType>, number: number) {
   return  buildings.filter(build => build.staffCount > number)
}