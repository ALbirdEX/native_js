import React from "react";

export type MamType = {
    name: string
    age: number
    lessons: Array<{ title: string; name?: string }>,
    address: {
        street: {
            title: string
        }
    }
}

type PropsType = {
    title: string
    man: MamType
    food: Array<string>
    car: { model: string }
}

/*export const ManComponent: React.FC<PropsType> = ( { title, man } ) => {*/
/*export const ManComponent: React.FC<PropsType> = (props) => {*/
export const ManComponent: React.FC<PropsType> = ({title, man, ...props}) => {

    /* const {title} = props
     const {name} = props.man*/

    /*   const {title, man} = props        man.name*/

    /*const {title, man: {name}} = props*/

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>
            {man.name}
        </div>
        <div>
            {props.car.model}
        </div>
    </div>
}