import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class StoryService {
    constructor(private http: Http) {

    }
    getStories() {
        return this.http.get('/api/userstory')
            .map(result => result.json());
    }

    getStoriesByFeature(featureId: string) {
        console.log('story service featureId :' + featureId);
        return this.http.get('/api/userstory/'+featureId)
            .map(result => result.json());
    }
}