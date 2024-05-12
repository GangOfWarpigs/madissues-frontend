import {Issue} from "./api/organizations.ts";

export const calculateGradient =  (color1: string, color2: string) => `background: linear-gradient(90deg, ${color1} 0%, ${color2} 100%);`

export function filterBySearchQuery(issues: Issue[], query) {
    return issues.filter((x) => x.title.includes(query));
}

export function orderByPriority(issues: Issue[], key: string){
    return issues.sort((x, y) => (x[key] as string).localeCompare(y[key] as string))
}

export function orderByMultiplePriorities(issues: Issue[], priorities : string[]){
    function recursion(issues: Issue[], index){
        if(priorities.length - 1 < index) return issues
        return orderByPriority(issues, priorities[index])
    }

    return recursion(issues, 0)
}
