# Express.js + TypeScript 5 + SWC

* [express](https://expressjs.com/) - fast, unopinionated, minimalist web framework for node
* [mongoose](https://mongoosejs.com/) - mongodb object modeling
* [ts-migrate-mongoose](https://github.com/ilovepixelart/ts-migrate-mongoose) - mongoose migration framework
* [ts-patch-mongoose](https://github.com/ilovepixelart/ts-migrate-mongoose) - mongoose patch history & events
* [ts-cache-mongoose](https://github.com/ilovepixelart/ts-cache-mongoose) - mongoose cache (in-memory, redis)
* [typescript 5](https://www.typescriptlang.org/)
* [swc](https://swc.rs/) - for typescript transpilation
* [biome](https://biomejs.dev/) - one toolchain for your web project
* jest that uses swc + in memory mongodb for testing

You can run it using docker:

```bash
docker compose build
docker compose up
```
