/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function(s) {
    let sMap = new Map()
    let maxVowel = 0
    let maxConst = 0
    for(let i=0;i<s.length;i++){
        let ch=s[i]
        if(sMap.has(ch)){
            sMap.set(ch, sMap.get(ch) + 1)
        }else{
            sMap.set(ch, 1)
        }
    }
    for (let [char, freq] of sMap){
        if ("aeiou".includes(char)){
            maxVowel = Math.max(maxVowel, freq)
        }else{
            maxConst = Math.max(maxConst, freq)
        }
    }
    return maxVowel + maxConst
};