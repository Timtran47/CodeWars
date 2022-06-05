// How good are you really?







//solution

function betterThanAverage(classPoints, yourPoints) {
    const totalPoints = classPoints.reduce ( (x,y) => x + y , 0)
    let average = totalPoints/classPoints.length
    return yourPoints > average
    }