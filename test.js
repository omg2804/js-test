function solution(D) {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const daySums = {
        'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 
        'Fri': 0, 'Sat': 0, 'Sun': 0
    };
    const dayCounts = {
        'Mon': 0, 'Tue': 0, 'Wed': 0, 'Thu': 0, 
        'Fri': 0, 'Sat': 0, 'Sun': 0
    };
    
   
    for (const [dateStr, value] of Object.entries(D)) {
        const date = new Date(dateStr);
        const dayOfWeek = date.getDay(); 
        const dayName = dayNames[dayOfWeek];
        
        daySums[dayName] += value;
        dayCounts[dayName]++;
    }
    
    
    const result = {};
    for (const day of ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']) {
        if (dayCounts[day] > 0) {
            result[day] = daySums[day];
        }
    }
    
    
    const orderedDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    
    for (let i = 0; i < orderedDays.length; i++) {
        const currentDay = orderedDays[i];
        
        if (dayCounts[currentDay] === 0) {
            
            let prevValue = null, nextValue = null;
            
            
            for (let j = 1; j <= 7; j++) {
                const prevIndex = (i - j + 7) % 7;
                const prevDay = orderedDays[prevIndex];
                if (result[prevDay] !== undefined) {
                    prevValue = result[prevDay];
                    break;
                }
            }
            
            
            for (let j = 1; j <= 7; j++) {
                const nextIndex = (i + j) % 7;
                const nextDay = orderedDays[nextIndex];
                if (result[nextDay] !== undefined) {
                    nextValue = result[nextDay];
                    break;
                }
            }
            
            
            if (prevValue !== null && nextValue !== null) {
                result[currentDay] = Math.round((prevValue + nextValue) / 2);
            }
        }
    }
    
    return result;
}


console.log("Example 1 test:");
const input1 = {'2020-01-01': 4, '2020-01-02': 4, '2020-01-03': 6, '2020-01-04': 8, '2020-01-05': 2, '2020-01-06': -6, '2020-01-07': 2, '2020-01-08': -2};
console.log(solution(input1));

console.log("\nExample 2 test:");
const input2 = {'2020-01-01': 6, '2020-01-04': 12, '2020-01-05': 14, '2020-01-06': 2, '2020-01-07': 4};
console.log(solution(input2));

