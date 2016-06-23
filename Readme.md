# Prime Factors of Positive Integer Number


## Definition

The prime factorisation of a positive integer is a list of the integer's prime factors, together with their multiplicities.

to shorten prime number factorisations, factors are often expressed in powers (multiplicities).

example:

```
360 = 2 x 2 x 2 x 3 x 3 x 5 = 2^3 x 3^2 x 5
```
For a prime factor `p` of `n`, the multiplicity of `p` is the largest exponent `a` for which `p^a` divides n exactly.

## Problem to solve (Part 1)

Write a program that returns the list of prime factors for all positive integers from 1 to 100.

Example:

```
1 -> []
5 -> [5]
8 -> [2, 2, 2]
9 -> [3, 3]
```

### If time allows:

Discuss the performance of the implementation.

## Problem to solve (Part 2)

sWrite a program that returns the list of prime factors and their multiplicities for all positive integers from 1 to 1000.
Example:

```
1 -> []
5 -> [ [5,1] ]
8 -> [ [2,3] ]
9 -> [ [3,2] ]
360 -> [ [2,3], [3,2] , [5,1] ] 
```

## Running the kata

```
$ git clone https://github.com/rija/primefactors-nodejs-lsia-codingdojo
$ cd primefactors-nodejs-lsia-codingdojo
$ npm install
$ npm test
```
