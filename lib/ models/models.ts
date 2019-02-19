import * as mongoose from "mongoose";

const Schema = mongoose.Schema;
const listSchema = new Schema({
  name: { type: String, require: true }
});

const List = mongoose.model("List", listSchema);

const todoSchema = new Schema({
  name: { type: String, require: true },
  list_name: { type: String, require: true }
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = { List, Todo };
