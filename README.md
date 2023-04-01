# Express.js + TypeScript 5 + SWC

* mongoose
* migrations using ts-migrate-mongoose
* typescript 5 strict
* swc for typescript transpilation
* eslint-standard
* jest with ts-node that uses swc + in memory mongodb for testing

You can run mongo locally using docker:

```bash
docker pull mongo
docker run -p 27017:27017 --name mongo -d mongo
```
