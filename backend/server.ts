import app from './src/app';
import env from './env';

//import created routes


//use routes


app.listen(env.PORT, () => {
    console.log(`Server running on port ${env.PORT}`);
});