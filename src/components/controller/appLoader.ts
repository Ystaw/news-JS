import Loader from './loader';
import { Env } from '../interfaces';

class AppLoader extends Loader {
    constructor() {
        const env: Env = {
            API_URL: process.env.API_URL || '',
            API_KEY: process.env.API_KEY || '',
        }
        super(env.API_URL, {
            apiKey: env.API_KEY,
        });
    }
}

export default AppLoader;
