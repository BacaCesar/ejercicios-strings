// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

const name = 'Victor';
const age = 12;

console.log(`${name} tiene ${age + 1} años.`);

const palabra = word => {
  if (word.length > 5) {
    console.log(word.toUpperCase());
  } else {
    console.log(word.toLowerCase());
  }
};
palabra('CESAR');

const palabra2 = word => {
  word.length > 5
    ? console.log(word.toUpperCase())
    : console.log(word.toLowerCase());
};
palabra2('Cesar');

const getConjugation = verb => {
  if (verb.endsWith('ar')) {
    return `verbo ${verb} es de la primera conjugación`;
  }
  if (verb.endsWith('er')) {
    return `verbo ${verb} es de la segunda conjugación`;
  }
  if (verb.endsWith('ir')) {
    return `verbo ${verb} es de la tercera conjugación`;
  }
};

const twoVerbs = (verb1, verb2) => {
  const firstVerb = getConjugation(verb1);
  const secondVerb = getConjugation(verb2);
  console.log(`El ${firstVerb} y ${secondVerb}.`);
};

twoVerbs('coser', 'dormir');

const extractTwoRandomLetters = word => {
  const randomNumberA = Math.floor(Math.random() * word.length);
  const randomLetterA = word.charAt(randomNumberA);
  const randomNumberB = Math.random(Math.random() * word.length);
  const randomLetterB = word.charAt(randomNumberB);
  return randomLetterA + randomLetterB;
};
const generateWord = (wordA, wordB, wordC) => {
  const first = extractTwoRandomLetters(wordA);
  const second = extractTwoRandomLetters(wordB);
  const third = extractTwoRandomLetters(wordC);
  console.log(first + second + third);
};

generateWord('Hola', 'Adios', 'Chao');

/**
 @param {string} email 
 */
const extractNameAndDomain = email => {
  const atPosition = email.indexOf('@');
  const extractName = email.substring(0, atPosition);
  const extractDomain = email.substring(atPosition + 1);
  console.log(`El usuario es ${extractName} y el dominio es ${extractDomain}`);
};
extractNameAndDomain('cesarbaca@gmail.com');

//Crea una función que reciba una palabra e imprime por consola una letra aleatoria de esa palabra.

const randomLetter = word => {
  const extractRandomNumber = Math.floor(Math.random() * word.length);
  const extractRandomLetter = word.charAt(extractRandomNumber);
  console.log(extractRandomLetter);
};
randomLetter('aleatorio');

//- Crea una función que reciba una palabra de 5 letras y la devuelva intercalando mayúsculas y minúsculas, por ejemplo adios, sería aDiOs

const upperCaseAndLowerCase = word => {
  const firstLetter = word.charAt(0).toUpperCase();
  const secondLetter = word.charAt(1).toLowerCase();
  const thirdLetter = word.charAt(2).toUpperCase();
  const fourthLetter = word.charAt(3).toLowerCase();
  const fivethLetter = word.charAt(4).toUpperCase();
  console.log(
    firstLetter + secondLetter + thirdLetter + fourthLetter + fivethLetter
  );
};
upperCaseAndLowerCase('cesar');

//- Crea una función que reciba un nombre y un apellido, y devuelva un nombre de usuario compuesto por la primera letra del nombre, el apellido completo, y un número aleatorio del 1 al 100. Por ejemplo, "Juan Perez" podría convertirse en "JPerez87".
