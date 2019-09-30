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
    var myABC = {};
    myABC['0000001011'] = MORSE_TABLE['.-'];
    myABC['0011101010'] = MORSE_TABLE['-...'];
    myABC['0011101110'] = MORSE_TABLE['-.-.'];
    myABC['0000111010'] = MORSE_TABLE['-..'];
    myABC['0000000010'] = MORSE_TABLE['.'];

    myABC['0010101110'] = MORSE_TABLE['..-.'];
    myABC['0000111110'] = MORSE_TABLE['--.'];
    myABC['0010101010'] = MORSE_TABLE['....'];
    myABC['0000001010'] = MORSE_TABLE['..'];
    myABC['0010111111'] = MORSE_TABLE['.---'];

    myABC['0000111011'] = MORSE_TABLE['-.-'];
    myABC['0010111010'] = MORSE_TABLE['.-..'];
    myABC['0000001111'] = MORSE_TABLE['--'];
    myABC['0000001110'] = MORSE_TABLE['-.'];
    myABC['0000111111'] = MORSE_TABLE['---'];

    myABC['0010111110'] = MORSE_TABLE['.--.'];
    myABC['0011111011'] = MORSE_TABLE['--.-'];
    myABC['0000101110'] = MORSE_TABLE['.-.'];
    myABC['0000101010'] = MORSE_TABLE['...'];
    myABC['0000000011'] = MORSE_TABLE['-'];

    myABC['0000101011'] = MORSE_TABLE['..-'];
    myABC['0010101011'] = MORSE_TABLE['...-'];
    myABC['0000101111'] = MORSE_TABLE['.--'];
    myABC['0011101011'] = MORSE_TABLE['-..-'];
    myABC['0011101111'] = MORSE_TABLE['-.--'];
    myABC['0011111010'] = MORSE_TABLE['--..'];

    myABC['1011111111'] = MORSE_TABLE['.----'];
    myABC['1010111111'] = MORSE_TABLE['..---'];
    myABC['1010101111'] = MORSE_TABLE['...--'];
    myABC['1010101011'] = MORSE_TABLE['....-'];
    myABC['1010101010'] = MORSE_TABLE['.....'];
    myABC['1110101010'] = MORSE_TABLE['-....'];
    myABC['1111101010'] = MORSE_TABLE['--...'];
    myABC['1111111010'] = MORSE_TABLE['---..'];
    myABC['1111111110'] = MORSE_TABLE['----.'];
    myABC['1111111111'] = MORSE_TABLE['-----'];

    myABC['**********'] = ' ';


    var message = '';

    for (let i = 0; i < expr.length; i+=10) {
        var letterCode = expr.substr(i, 10);
        var letter = myABC[letterCode];
        message += letter;
    }

    return message;
}

module.exports = {
    decode
}