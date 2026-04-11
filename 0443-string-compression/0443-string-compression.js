/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let write = 0
    let read =0

    while (read<chars.length){
        let ch = chars[read]
        let count = 0

        while(read < chars.length && chars[read] === ch){
            read++
            count++
        }
        chars[write] = ch
        write++
        if(count>1){
            let countStr = String(count)
            for(let i =0; i<countStr.length;i++){
                chars[write] = countStr[i]
                write++
            }
        }
    }
    return write
};