import proxy from 'promise-pkg/thennable'; // stuck here
console.log({ proxy }) // never goes here

import promise from 'promise-pkg' // throws here
console.log({ promise })

export const value = 'value'
