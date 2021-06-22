import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WorkerService {
  urlApiWorkers: string = `${environment.apiUrl}/v1/workers`;
  constructor(private http: HttpClient) { }

  getAllWorkers() {
    return this.http.get(this.urlApiWorkers, {
      withCredentials: true
    });
  }

  addWorker() {
    return this.http.post(this.urlApiWorkers, {}, {
      withCredentials: true
    });
  }

  removeWorker(id: number) {
    return this.http.put(`${this.urlApiWorkers}/${id}`, {}, {
      withCredentials: true
    });
  }
}
