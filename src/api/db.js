const products =
    [
        {
            title: "Obra - La esperanza",
            description: "Obra inspirada en La herencia de John Grisham. Stock para entrega inmediata.",
            price: 4500,
            img: "../images/tienda1.png",
            id: 1
        },
        {
            title: "Obra - La inocencia",
            description: "Obra abstracta en tonos grises. Variedad de medidas disponibles.",
            price: 5800,
            img: "../images/tienda2.png",
            id: 2
        },
        {
            title: "Obra - El paseo de los tulipanes",
            description: "Mural no inspirado en tulipanes. Variedad de medidas disponible.",
            price: 8500,
            img: "../images/tienda3.png",
            id: 3
        },
        {
            title: "Obras en Exposicion - La Rural",
            description: "Obras en exposicion. Variedad de medidas disponibles.",
            price: 13500,
            img: "../images/tienda4.png",
            id: 4
        }
    ]

export const getItems = () => {
    return new Promise((resolve) => {
        resolve(products)
    })
}