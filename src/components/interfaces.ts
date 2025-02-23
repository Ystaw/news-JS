export interface ResponseData {
}

export interface LoaderOptions {
    [key: string]: string | number | boolean;
}

export interface Env {
    API_URL: string;
    API_KEY: string;
}

export interface News_ {
    urlToImage?: string;
    author?: string;
    publishedAt: string;
    title: string;
    source: {
        name: string;
    };
    description: string;
    url: string;
}

export interface Source {
    id: string;
    name: string;
}