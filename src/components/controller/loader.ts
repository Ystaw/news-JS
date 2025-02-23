import { ResponseData, LoaderOptions } from '../interfaces';

class Loader {
    private baseLink: string;
    private options: LoaderOptions;

    constructor(baseLink: string, options: LoaderOptions) {
        this.baseLink = baseLink;
        this.options = options;
    }

    public getResp<T extends ResponseData>(
        { endpoint, options = {} }: { endpoint: string; options?: Partial<LoaderOptions> },
        callback: (data: T) => void
    ): void {
        this.load<T>('GET', endpoint, callback, options);
    }

    private errorHandler(res: Response): Response {
        if (!res.ok) {
                console.error(`Sorry, but there is ${res.status} error: ${res.statusText}`);
            throw new Error(res.statusText);
        }

        return res;
    }

    private makeUrl(options: Partial<LoaderOptions>, endpoint: string): string {
        const urlOptions = { ...this.options, ...options };
        const urlParams = new URLSearchParams(urlOptions as Record<string, string>);
        return `${this.baseLink}${endpoint}?${urlParams.toString()}`;
    }


    private load<T extends ResponseData>(method: string, endpoint: string, callback: (data: T) => void, options:Partial <LoaderOptions> = {}) : void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.errorHandler)
            .then((res) => res.json())
            .then((data) => callback(data))
            .catch((err) => console.error(err));
    }
}

export default Loader;
