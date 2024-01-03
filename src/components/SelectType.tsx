export const SelectType = () => {
    const productsType = [
        {
            name:"Muslo",
            img:"muslo-pierna.png"
        },
        {
            name:"Entero",
            img:"entero.png"
        },
        {
            name:"Pechuga",
            img: "pechuga.png"
        }
    ]
    return (
        <div className="flex gap-2 py-4">
            {productsType.map( pro => (
                <div className="flex-1 flex justify-center items-center h-[85px] text-xl p-2 bg-gray-100 rounded hover:bg-gray-300">
                    <img className="h-full" src={pro.img} alt={pro.name}/>
                    {/* <p>{pro.name}</p> */}
                </div>
            ))}
        </div>
    )
}
