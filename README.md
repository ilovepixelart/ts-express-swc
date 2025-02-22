# Express.js + Mongoose + TypeScript 5 + tsx

* [express 5](https://expressjs.com/) - fast, unopinionated, minimalist web framework for node
* [mongoose](https://mongoosejs.com/) - mongodb object modeling
* [ts-migrate-mongoose](https://github.com/ilovepixelart/ts-migrate-mongoose) - mongoose migration framework
* [ts-patch-mongoose](https://github.com/ilovepixelart/ts-migrate-mongoose) - mongoose patch history & events
* [ts-cache-mongoose](https://github.com/ilovepixelart/ts-cache-mongoose) - mongoose cache (in-memory, redis)
* [typescript 5](https://www.typescriptlang.org/)
* [tsx](https://https://tsx.is/) - for typescript transpilation
* [biome](https://biomejs.dev/) - one toolchain for your web project
* [vitest](https://vitest.dev/) - vitest with mongodb-memory-server for testing

Commands:

```bash
npm i

npm run dev # developer mode

npm run build # build using tsx
npm run start # production mode

npm run biome # lint & format check
npm run biome:fix # lint & format auto fix

npm run test # to run all tests
npm run test:open # to run coverage & open istanbul in the browser
```

You can run it using docker:

```bash
docker compose build
docker compose up
```
