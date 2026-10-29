import app from './app.js';
import { connectToDb } from './src/db/connect.js';

// set up a PORT constant
const PORT = process.env.PORT;  

// throw an error
if (!PORT) {
    // set up a PORT constant
    throw new Error('PORT is not defined. Make sure your local npm scripts reference the .env file with --env-file=.env, or define PORT in your hosted environment settings.');
}


// starts server
const startServer = async () => {
    try {
        await connectToDb();

        app.listen(PORT, () => {
            console.log(`Server listening at 127.0.0.1:${PORT}`);
        });
    } catch (error) {
        console.error('Database connection failed:', error.message);
        process.exit(1);
    }
};


await startServer();