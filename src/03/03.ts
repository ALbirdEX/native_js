import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02-02";

export const sum = (a: number, b: number) => {
    return a + b
}

//const res = sum(sum(1, 2), sum(2, 3))

export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}

export function studentIsActive(s: StudentType, isActive: boolean) {
    s.isActive = isActive
}

/*
export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
  return student.address.city.title === cityName
}
*/

export function doesStudentLiveIn(student: StudentType, cityName: string) {
    return student.address.city.title === cityName
}

export const addMoneyToBudget = (building: GovernmentBuildingsType, budget: number) => {
    building.budget += budget
}

/*export function repairedHouse(house: HouseType, repaired: boolean) {
    house.repaired = repaired
}*/

export function repairedHouse(house: HouseType) {
    house.repaired = true
}

export const toFireStaff = (staff: GovernmentBuildingsType, increased: number) => {
    staff.staffCount -= increased
}

export function toHireStaff(staff: GovernmentBuildingsType, hire: number) {
    staff.staffCount += hire
}

export const createMessage = (city: CityType) => {
  return `Hi ${city.title} citizens`
}

/*
export const createMessage = (city: CityType) => {
  return "Hi" +city.title+ "citizens"
}
*/
