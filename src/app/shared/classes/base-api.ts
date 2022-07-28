import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpResponse} from '@angular/common/http';
import { environment } from 'environments/environment';

type ResponseType = 'arraybuffer' | 'blob';

export abstract class BaseApi {

  private baseApiUrl = 'https://api.mocki.io';

  constructor(protected http: HttpClient) {}

  private getHttpOptions(data?: any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      body: data,
    };
    return httpOptions;
  }

  protected getUrl(url: string): string {
    return `${this.baseApiUrl}/${environment.apiVersion}/${url}`;
  }

  protected get<T>(url: string, params?: any, responseType?: ResponseType): Observable<T> {
    if (params) {
      if (responseType) {
        return this.http.get<T>(this.getUrl(url), {params, responseType: responseType as any, ... this.getHttpOptions()});
      }
      return this.http.get<T>(this.getUrl(url), {params, ... this.getHttpOptions()});
    }
    return this.http.get<T>(this.getUrl(url), this.getHttpOptions());
  }

  protected getFile<T>(url: string, responseType?: ResponseType): Observable<HttpResponse<any>> {
    return this.http.get<any>(this.getUrl(url), {observe: 'response', responseType: responseType as any,  withCredentials: true});
  }

  protected post<T, K>(url: string, data: K): Observable<T> {
    return this.http.post<T>(this.getUrl(url), data, this.getHttpOptions());
  }

  protected put<T, K>(url: string, data: K): Observable<T> {
    return this.http.put<T>(this.getUrl(url), data, this.getHttpOptions());
  }

  protected delete<T, K>(url: string, data: K): Observable<T> {
    return this.http.delete<T>(this.getUrl(url), this.getHttpOptions(data));
  }

  protected patch<T, K>(url: string, data: K,): Observable<T> {
    return this.http.patch<T>(this.getUrl(url), data, this.getHttpOptions());
  }
}
