const distanceTravelMiles = [267, 345, 234, 190, 299]

const distraveledKm = distanceTravelMiles.map((distance) => {
    return Math.round(distance * 1.6)
})

console.log(distraveledKm)