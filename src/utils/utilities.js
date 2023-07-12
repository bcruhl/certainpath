export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
};

//Native implementation of lodash _get function
export function _get(object, path, defval = null) {
  if (typeof path === 'string') path = path.split('.');
  return path.reduce((xs, x) => (xs && xs[x] ? xs[x] : defval), object);
}

//Ignore case when comparing values
const normalizeSortToken = (token) => {
  if (typeof token === 'string') {
    return token.toLowerCase();
  }
  return token;
};

//Sorting function
const compareTokens = (a, b) => {
  if (normalizeSortToken(a) > normalizeSortToken(b)) return 1;
  if (normalizeSortToken(a) < normalizeSortToken(b)) return -1;

  return 0;
};

/**
* Passing an array (might have to clone before use), this allows:
* - single sort ([].sortBy('displayName'))
* - reverse sort order ([].sortBy('-displayName'))
* - object.property sort ([].sortBy('author.displayName')) (uses lodash _get rules)
* - secondary + sorts ([].sortBy('author.displayName', 'created', 'liked'))
* - secondary + mixed sort order ([].sortBy('author.displayName', '-created', 'liked'))
*/
export const sortBy = (...args) => (a, b) => {
  let comparison = 0;
  for (let i = 0; i < args.length; i++) {
    if (comparison !== 0) {
      break;
    } else {
      if (args[i].charAt(0) === '-') {
        comparison = compareTokens(_get(b, args[i].substring(1)), _get(a, args[i].substring(1)));
      } else {
        comparison = compareTokens(_get(a, args[i]), _get(b, args[i]));
      }
    }
  }

  return comparison;
};