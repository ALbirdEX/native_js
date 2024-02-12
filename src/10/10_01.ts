import exp from "node:constants";

export type UserType = {
    name: string
    hair: number
    address: {
        city: string
        house?: number
    }
}

export type PcType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    pc: PcType
}

export type UserWithBookType = UserType & {
    books: string[]
}

export type CompanyType = {
    id: number,
    title: string
};
export type WithCompanyType = {
    companies: Array<CompanyType>
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}

    //copy.hair = u.hair / power

    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {

    //const copy2 = {...u, address: {...u.address, city: city}}

    return {...u, address: {...u.address, city: city}}
}

export function upgradeUserPC(u: UserWithLaptopType, title: string) {
    return {...u, pc: {...u.pc, title: title}}
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBookType, house: number) {
    return {...u, address: {...u.address, house: house}}
}

export function upgradeBook(u: UserWithLaptopType & UserWithBookType, book: string) {
    return {...u, books: [...u.books, book]}
}

export function updateBook(u: UserWithLaptopType & UserWithBookType,
                           book: string,
                           newBook: string) {
    return {...u, books: u.books.map(b => b === book ? newBook : b)}

    /* const copy = {
         ...u,
         books: u.books.map(b => {
             if (b === book) {
                 return newBook
             } else {
                 return b
             }
         })
     }
     return copy*/
}

export function removeBook(u: UserWithLaptopType & UserWithBookType, removeBook: string) {
    return {...u, books: u.books.filter(b => b !== removeBook)}
}

export function addCompany(u: UserWithLaptopType & WithCompanyType, title: string) {
    return {...u, companies: [...u.companies, {id: 3, title: title}]}
}

export function updateCompanyTitle(u: WithCompanyType,
                                   companyId: number,
                                   companyNewTitle: string) {
    return {
        ...u, companies: u.companies.map(c => c.id === companyId
            ? {...c, title: companyNewTitle}
            : c)

        /*
            const copy: WithCompanyType = {
                ...u,
                companies: u.companies.map(c => {
                    if (c.id === companyId) {
                        return {...c, title: companyNewTitle}
                    } else {
                        return c
                    }
                })
            }


            return copy
        */
    }
}

export const updateCompanyTitle2 = (companies: { [key: string]: Array<CompanyType> },
                                    userName: string,
                                    companyId: number,
                                    newTitle: string) => {

    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId
        ? {...c, title: newTitle}
        : c)

    return companyCopy
}