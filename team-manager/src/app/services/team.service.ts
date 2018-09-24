import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Team } from '../models';

@Injectable({
  providedIn: 'root',
})
export class TeamService {
  private readonly base = '/api/teams/';

  constructor(private http: HttpClient) {}

  getTeams(): Observable<Team[]> {
    console.log('grabbing teams');
    return this.http.get<Team[]>(this.base);
  }

  getTeam(id: string): Observable<Team> {
    return this.http.get<Team>(this.base + id);
  }

  createTeam(team: Team): Observable<Team> {
    return this.http.post<Team>(this.base, team);
  }

  removeTeam(id: number): Observable<Team> {
    return this.http.delete<Team>(this.base + id);
  }
}
