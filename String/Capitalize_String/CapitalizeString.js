const capitalize = s => [...s].map((s, i, arr) => (arr[i-1] === ' ' || i === 0) ? arr[i].toUpperCase() : arr[i]).join('');

console.log(capitalize('a long trip') === 'A Long Trip');