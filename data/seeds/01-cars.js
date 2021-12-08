// STRETCH
const cars = [
    {
        make: "toyota",
        mileage: 250000,
        model: "prius",
        title: "salvage",
        transmission: "CVT",
        vin: "11111111111111111",
    },
    
    {
        make: "ford",
        mileage: 120000,
        model: "mustang",
        title: "clean",
        transmission: "manual",
        vin: "22222222222222222",
    },

    {
        make: "honda",
        mileage: 220000,
        model: "accord",
        title: "clean",
        transmission: "automatic",
        vin: "33333333333333333",
    },
]

// exports.seed = function(knex) {
//     return knex("cars")
//         .truncate().then(() => {
//             return knex("cars").insert(cars)
//         })     
// }

exports.seed = async function(knex) {
    await knex("cars").truncate();
    await knex("cars").insert(cars);    
}