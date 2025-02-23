export interface ResponseData {
}

export interface LoaderOptions {
    [key: string]: string | number | boolean;
}

export interface Env {
    API_URL: string;
    API_KEY: string;
}

export interface Article {
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

export interface SourceRes extends ResponseData {
    sources: Source[];
}

export interface NewsRes extends ResponseData {
    articles: Article[];
}

export interface Callback<T> {
    (data: T): void;
}