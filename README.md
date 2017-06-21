# Running

This project uses package.json scripts to run builds. `start` will
take the .xlsx file in `Festival Passport 2017.xlsx` and convert the
dates to something more regular, then dump as `festival-passport.csv`
which can be imported to Airtable.

```
yarn
yarn start
```
