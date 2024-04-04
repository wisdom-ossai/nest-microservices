1. Generate app using nest cli with `nest new sleepr`
2. Generate common library with `nest g library common`
3. Install database packages with `pnpm i @nestjs/mongoose mongoose`
4. Install nest config package with `pnpm i @nestjs/config`
5. Generate database module in the common library `nest g module database -p common` where the "-p" flag is used to specify the project the module is to be generated into.
6. Remove the `common.module.ts` it won't be needed since our application will be importing the individual modules with options.
7. Generate config module in the common library with `nest g module config -p common`
8.

## Start Mongodb locally as a macOs Service

`brew services start mongodb-community@7.0`

## Stop Mongodb locally as a macOs Service

`brew services stop mongodb-community@7.0`
