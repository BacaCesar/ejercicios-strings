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
};
