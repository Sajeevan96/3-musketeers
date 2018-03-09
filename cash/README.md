# Cash

Cash is a converter tool of currency. You can simultaneously convert into several currencies. 

<p align="center">
  <img src="./cover.jpg" 
       width="650" height="280">
</p>

## Summary

- [How It Works](#how-it-works)
- [Usage](#usage)
    - [Convert to another currency](#convert-to-another-currency)
    - [Commands](#commands)
    - [Examples](#examples)
- [Available Currencies](#available-currencies)


## How It Works

You can find more examples in **[Size Limit: Make the Web lighter]** article.

## Usage

First, install packages:

```sh
$ npm install 
```

### Convert to another currency:

```sh
$ node bin/index.js <amount> <currency>
```

`Initially`, it will convert your amount into the following currencies:

* Euro (EUR)
* Pound Sterling (GBP)
* US Dollar (USD)

For more currencies (Go to the [Available Currencies](#available-currencies) section).

### Commands

```sh
$ node bin/index.js <command>
```

```sh
--save,  -s       Save currencies as default currencies
--help,  -h       Display help message
--version,  -v     Display version number
```  

### Examples:

```sh
 $ node bin/index.js 1 usd

 $ node bin/index.js 1 usd eur pln aud

 $ node bin/index.js --save usd eur pln aud

 $ node bin/index.js --help
```  

## Available Currencies

|ISO  | Name |
|-----|------|
 AUD | Australian Dollar 
RUB|Russian Rouble
EUR|Euro
BGN|Bulgarian Lev
BRL|Real Brazilian
CAD|Canadian Dollar
CHF|Swiss Franc
CNY|Chinese Yuan
CZK|Czech Koruna
DKK|Danish Krone
GBP|Pound Sterling
HKD|Hong Kong Dollar
HRK|Croatian Kuna
HUF|Hungarian Forint
IDR|Indonesian Rupiah
ILS|Israeli Shekel
INR|Indian Rupee
JPY|Japanes Yen
KRW|South Korean Won
MXN|Mexican Peso
MYR|Malaysian Ringgit
NOK|Norwegian Krone
PHP|Philippine Peso
PLN|Polish Zloty
RON|Romanian New Leu
SEK|Swedish Krona
SGD|Singapore Dollar
THB|Thai Baht
TRY|Turkish Lira
USD|US Dollar
ZAR|South African Rand
NZD|New Zealand Dollar