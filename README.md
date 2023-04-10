# Express.js + TypeScript 5 + SWC

* [express](https://expressjs.com/) - or web server
* [mongoose](https://mongoosejs.com/) - mongodb object modeling
* [ts-migrate-mongoose](https://github.com/ilovepixelart/ts-migrate-mongoose) - mongoose migration framework
* [ts-patch-mongoose](https://github.com/ilovepixelart/ts-migrate-mongoose) - mongoose patch history & events
* [typescript 5](https://www.typescriptlang.org/)
* [swc](https://swc.rs/) for typescript transpilation
* eslint-standard
* jest with ts-node that uses swc + in memory mongodb for testing

You can run mongo locally using docker:

```bash
docker pull mongo
docker run -p 27017:27017 --name mongo -d mongo
```
