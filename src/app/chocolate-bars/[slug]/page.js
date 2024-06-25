import { findChocolateBar } from "@/utilities/array"

export default function DynamicRoute({params}) {

    const chocolate = findChocolateBar(params.slug)
    
    return (
        <div>
            {console.log(chocolate.name)}
            <h2>Name: {chocolate.name}</h2>
            <p>ID: {chocolate.id}</p>
            <p>History: {chocolate.history}</p>
        </div>
    )
}