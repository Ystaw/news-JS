import AppController from '../controller/controller';
import { AppView } from '../view/appView';
import { SourceRes, NewsRes } from '../interfaces';

class App {
    private controller: AppController;
    private view: AppView;

    constructor() {
        this.controller = new AppController();
        this.view = new AppView();
    }

    start(): void {
        (document
            .querySelector('.sources') as HTMLElement)
            .addEventListener('click', (e: MouseEvent) => this.controller.getNews(e, (data: NewsRes) => this.view.drawNews(data)));
        this.controller.getSources((data: SourceRes) => this.view.drawSources(data));
    }
}

export default App;
