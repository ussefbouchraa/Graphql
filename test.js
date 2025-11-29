const prepare = () => {
    const data = [{
        type: "skill4",
        amount: "xxxxxxx"
    }, {
        type: "skill45",
        amount: "xxxxxxx"
    }]

    const map = new Map()

    for (const row of data) {
        map.set(row.type.replace("skill-", ""), row.amount)
    }
    const arr = [];
    map.forEach((value, key) => {
        arr.push({ name: key, xp: value });
    });


console.log(arr)
}


prepare()