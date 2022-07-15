import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ApiService {

    fontsUrl: string = 'https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyBep7C3W8d_soUOn1bdRHbXN92B3rXIW04';

    constructor(
        private http: HttpClient
    ) { }

    getFonts() {
        return this.http.get(this.fontsUrl)
    }
}