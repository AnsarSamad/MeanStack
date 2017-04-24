import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Features} from '../model/feature'
@Injectable()
export class FeatureServices{
    constructor(private http:Http){
        
    }
    getFeatures(){
        return this.http.get('/api/feature')
        .map(result=>result.json());
    }
    processFeature(mode:string,feature:Features){
        return this.http.post('/api/feature',{"mode":mode,"feature":feature})
        .map(result=>result.json());
    }
   
}