import "reflect-metadata";
import { Application } from './application/index';
// import { Container } from "typedi";
const application = new Application();
// const application = Container.get(Application)
application.start();
process.on('unhandledRejection', console.dir);
