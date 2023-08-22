type StreetType = {
    title: string
}
type AddressType = {
    street: StreetType
    number?: number
}
type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
type GovernmentBuildingsType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}
export type CItyType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingsType>
    citizenNumber: number
}
