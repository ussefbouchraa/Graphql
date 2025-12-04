
const calc = (amount, type = "") => {

    if (!amount) return 0
    amount = Math.round((amount))
    const B = (1000)
    const KB = (B * 1000)
    const MB = (KB * 1000)

    if (amount < B) { return (type == "xp") ? (amount).toFixed() + " B" : (amount).toFixed(2) + " B" }
    if (amount < KB) { return (type == "xp") ? (amount / B).toFixed() + " KB" : (amount / B).toFixed(2) + " KB" }
    if (amount < MB) { return (type == "xp") ? (amount / KB).toFixed() + " MB" : (amount / KB).toFixed(2) + " MB" }
}


export const calcTransaction = (transactions) => {
    const totals = transactions.reduce((acc, t) => {
        const amount = Number(t.amount) || 0;
        if (t.type === "xp") acc.xp += amount;
        if (t.type === "up") acc.auditUp += amount;
        if (t.type === "down") acc.auditDown += amount;
        if (t.type === "level" && amount > acc.level) acc.level = amount 
        return acc;
    }, { xp: 0, auditUp: 0, auditDown: 0, level: 0 });

    return {
        ratioStats: {
            up:    calc(totals.auditUp),
            down:  calc(totals.auditDown),
            ratio: totals.auditDown > 0 ? (totals.auditUp / totals.auditDown) : null
        },
        gradeStats: {
            Xp:     calc(totals.xp, "xp"),
            level:  totals.level
        }
    }

}


export function prepareSkills(data) {    
    const map = new Map()

    for(const obj of data){
        if (!obj?.type) continue;
        if (map.has((obj.type).replace("skill_", "").toUpperCase())) continue;
        map.set((obj.type).replace("skill_", "").toUpperCase(), obj.amount)
    }
return map
}


export function countAudits(res){
    if (!res?.[0]?.audits_aggregate?.aggregate?.count) return {}
    

    const validated = res[0]?.audits_aggregate?.aggregate?.count || 0;
    const failed = res[0]?.failed_audits?.aggregate?.count || 0;
    
    return  {validated , failed }

}
