import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        const API_URL = 'https://newsapi.org/v2/';
        const API_KEY = 'b197089d7dec464d8ecfa2f76ed488ef';

        super(API_URL, {
            apiKey: API_KEY,
        });
    }
}

export default AppLoader;