# X-hash [![NPM Module](https://img.shields.io/badge/npm%20package-0.2.3-red)](https://github.com/alexagep/hashpass)

---

x-hash is a Javascript package that allows you to securely hash passwords with an optional salt and round value and use compare function to compare hashPassword and rawPassword

## Installation

To install module simply run the following command in your console:
`npm install x-hash`

## Usage

To use x-hash, first import it into your project:

```
const x-hash = require("x-hash");
```

or:

```
const { hashPass, compare } = require("x-hash");
```

### Examples

- you can see how we hash passwords using x-hash package like below:

  ```
  const hashedPass = hashPass('password')
  ```

  ```
  const hashedPass = hashPass('password', { salt : 20, rounds : 15 })
  ```

  ```
  const hashedPass = hashPass('password', { salt : 10 })
  ```

- if you want to compare passwords, here you are:

  ```
  const isEqualPass = compare('password', hashedPass)
  ```

## 🤝 Contribution

I will be grateful for any help you can provide to make this package better
