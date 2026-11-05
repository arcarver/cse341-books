import { MongoClient } from 'mongodb';

let database;

const connectToDb = async () => {
  const connectionString = process.env.MONGODB_URI;
  if (!connectionString) {
    throw new Error('MONGODB_URI is required.');
  }

  console.log('connectionString', connectionString);
  const client = new MongoClient(connectionString);
  console.log('Database client');
  await client.connect();
  database = client.db(process.env.MONGODB_DB_NAME || 'cse341-books-db');
  return database;
};

const getDb = () => {
  if (!database) {
    throw new Error('Database not initialized. Call connectToDb first.');
  }
  return database;
};

export { connectToDb, getDb };