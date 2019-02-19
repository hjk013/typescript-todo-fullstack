import * as express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/router";
class App {
  public app: express.Application;
  public myRoute: Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.myRoute.routes(this.app);
  }

  private config(): void {
    //support application/json type post data
    this.app.use(bodyParser.json());

    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

export default new App().app;
