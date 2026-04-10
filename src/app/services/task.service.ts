import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Task } from '../models/task.model';

@Injectable({ providedIn: 'root' })
export class TaskService {

  private STORAGE_KEY = 'tasks';

  private tasks$ = new BehaviorSubject<Task[]>(this.load());

  get tasksObservable() {
    return this.tasks$.asObservable();
  }

  private load(): Task[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  private save(tasks: Task[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(tasks));
    this.tasks$.next(tasks);
  }

  add(task: Task) {
    this.save([...this.tasks$.value, task]);
  }

  toggle(id: string) {
    const updated = this.tasks$.value.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    this.save(updated);
  }

  delete(id: string) {
    this.save(this.tasks$.value.filter(t => t.id !== id));
  }

  update(tasks: Task[]) {
    this.save(tasks);
  }
}