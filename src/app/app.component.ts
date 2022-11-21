import { Component } from '@angular/core';
import { TodoItem } from './todo-item';
import { TodoList } from './todo-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  private list = new TodoList("Bob", [
    new TodoItem("Go for run", true),
    new TodoItem("Get Flowers"),
    new TodoItem("Collect Taylor show tickets"),
  ]);

  get userName(): string {
    return this.list.user;
  }

get itemCount(): number {
    return this.list.items.filter(item => !item.complete).length;
  }
  get items(): readonly TodoItem[] {
          return this.list.items.filter(item => this.showComplete || !item.complete);
      }
    
    addNew(newItem: string) {
      if (newItem != "") {
          this.list.addItem(newItem)
      }
    }
    showComplete: boolean = false;
}
