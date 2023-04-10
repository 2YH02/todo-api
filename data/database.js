const mongodb = require("mongodb");

const MongodbClient = mongodb.MongoClient;

let database;

async function initDb() {
  const client = await MongodbClient.connect("mongodb://127.0.0.1:27017");
  database = client.db("todo-api");
}

function getDb() {
  if (!database) {
    throw new Error("연결 실패");
  }

  return database;
}

module.exports = {
  initDb: initDb,
  getDb: getDb,
};
