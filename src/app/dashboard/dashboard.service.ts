import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import Stock from '../shared/models/stock-model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) { }

  readonly baseUrl = ''



}
