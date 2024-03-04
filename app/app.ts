import 'reflect-metadata';
import { Servidor } from './server';
import { dataBaseInit } from './database';

async function main() {
  const app = new Servidor();
  await app.listen();
  await dataBaseInit();
}

main();
