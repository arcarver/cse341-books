import app from './app.js';

// set up a PORT constant
const PORT = process.env.PORT || 3000;

// throw an error
if (!PORT) {
    // set up a PORT constant
    throw new Error('PORT is not defined. Make sure your local npm scripts reference the .env file with --env-file=.env, or define PORT in your hosted environment settings.');
}


// starts server
app.listen(PORT, () => {
    console.log(`Server listening at 127.0.0.1:${PORT}`);
});