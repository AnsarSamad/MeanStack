import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Features } from '../model/feature'
import { UserStories } from '../model/userStory'
@Injectable()
export class FeatureServices {
    constructor(private http: Http) {

    }
    getFeatures() {
        return this.http.get('/api/feature')
            .map(result => result.json());
    }
    processFeature(mode: string, feature: Features) {
        return this.http.post('/api/feature', { "mode": mode, "feature": feature })
            .map(result => result.json());
    }
    processUserStories(mode: string, stories: UserStories) {
        return this.http.post('/api/userstory', { "mode": mode, "userstory": stories })
            .map(result => result.json());
    }
    getStoriesByFeature(featureId: string) {
        console.log('story service featureId :' + featureId);
        return this.http.get('/api/userstory/' + featureId)
            .map(result => result.json());
    }

}