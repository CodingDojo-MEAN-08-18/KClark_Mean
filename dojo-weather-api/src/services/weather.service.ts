import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  api_key: string;

  private readonly base = '/api/weather/';

  constructor(private http: HttpClient) {
    this.api_key = '5e81f01fce758f25a45b488b962f294e';
  }

  // Example call w/ key:
  // http://api.openweathermap.org/data/2.5/weather?q={city name}&APPID={APIKEY}

  getWeather(cityId) {
    return this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityId}&APPID=${this.api_key}`);
  }
}
