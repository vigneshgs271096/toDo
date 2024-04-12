import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoalService {

  private apiUrl = 'http://localhost:3000/goals';

  constructor(private http: HttpClient) { }

  createGoal(goal: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, goal);
  }

  getGoals(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getGoalById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  updateGoal(id: string, goal: any): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<any>(url, goal);
  }

  deleteGoal(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }

}
