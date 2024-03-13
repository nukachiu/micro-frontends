import { Observable } from "rxjs";

export interface IMessageOfTheDayHttpService {
  getMessages(): Observable<string[]>;
}
