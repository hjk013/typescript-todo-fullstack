import * as mongoose from "mongoose";
const { List, Todo } = require("../ models/models");
import { Request, Response } from "express";

class Controller {
  public get(req: Request, res: Response) {
    //console.log(req.query)
    const { listName } = req.query;
  }
  public post(req: Request, res: Response) {
    const { name, list_name } = req.body;

    new Todo({
      name: name,
      list_name: list_name
    }).save((err: string, newTodo: string) => {
      if (err) {
        console.error(err);
      } else {
        res.status(201).send(newTodo);
      }
    });
  }
}
