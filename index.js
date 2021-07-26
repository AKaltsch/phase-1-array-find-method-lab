
function superbowlWin(array) {
    const answer = array.find(date => date.result === "W")
    return answer ? answer.year : undefined
}
superbowlWin(record)