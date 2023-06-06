const myURL = new URL('https://example.org');
myURL.pathname = '/a/b/c';
myURL.search = '?d=e';
myURL.hash = '#fgh';

console.log(myURL.href)

// const pathname = '/a/b/c';
// const search = '?d=e';
// const hash = '#fgh';
// const myURL = new URL(`https://example.org${pathname}${search}${hash}`); 

// console.log(myURL.href)