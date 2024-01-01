export const SelectType = () => {
    const productsType = ["Muslo", "Entero", "Pechuga"]
    return (
        <div className="flex gap-2 py-4">
            {productsType.map( pro => (
                <div className="flex-1 text-xl p-2 bg-gray-300 rounded">
                    {pro}
                </div>
            ))}
        </div>
    )
}
