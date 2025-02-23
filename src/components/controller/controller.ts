import AppLoader from './appLoader';
import { Source, SourceRes, NewsRes, Callback } from '../interfaces';

class AppController extends AppLoader {
    public getSources(callback: Callback<SourceRes>): void {
        super.getResp<SourceRes>(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: Callback<NewsRes>): void {
        let target: HTMLElement | null = e.target as HTMLElement;
        const newsContainer = e.currentTarget as HTMLElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    if (sourceId !== null) {
                        newsContainer.setAttribute('data-source', sourceId);
                    }
                    if (sourceId !== null) {
                        super.getResp<NewsRes>(
                            {
                                endpoint: 'everything',
                                options: {
                                    sources: sourceId,
                                },
                            },
                            callback
                        );
                    }
                }
                return;
            }
            target = target.parentNode as HTMLElement;
        }
    }
}

export default AppController;
