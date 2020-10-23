const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let  chink=[]
    for (let i=0;i<expr.length;i+=10){
        chink.push(expr.slice(i,i+10))
    }
    let newArr=[]

    for(let item of chink){
        let letter=''
        if (item=='**********') newArr.push(' ')

        else{
            for (let i=0;i<item.length;i+=2){
                if (item.slice(i,i+2) =='00') letter+=''
                else if (item.slice(i,i+2) =='10') letter+='.'
                else if (item.slice(i,i+2) =='11') letter+='-'
            }


            newArr.push(letter)

        }

    }
    let result=''
    for (let item of newArr){
        if (item==' ') result+=' '
        else         result+=MORSE_TABLE[item]
    }



    return result
}
module.exports = {
    decode
}