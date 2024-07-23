```typescript
// Importing necessary modules
import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

// Define the interface for our data model
interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Component({
  selector: "app-user-list",
  templateUrl: "./user-list.component.html",
  styleUrls: ["./user-list.component.css"],
})
export class UserListComponent implements OnInit {
  users: User[] = [];
  apiUrl: string = "https://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers().subscribe((data: User[]) => {
      this.users = data;
    });
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }
}
```
