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
  ' ': ' ',
};

function decode(expr) {
    let str = '';
    for (let i = 0; i < expr.length; i += 10) {
        let spell = expr.substr(i, 10);
        let index = spell.indexOf('1');
        spell = spell.slice(index).replace(/11/g, '-').replace(/10/g, '.').replace(/\*/g, ' ');
    if (MORSE_TABLE[spell]) {
        str += MORSE_TABLE[spell];
    }
  }
    return str;
}

module.exports = {
  decode
}
