import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Category } from '../models/category.model';

@Injectable({ providedIn: 'root' })
export class CategoryService {

  private KEY = 'categories';

  private categories$ = new BehaviorSubject<Category[]>(this.load());

  get categoriesObservable() {
    return this.categories$.asObservable();
  }

  private load(): Category[] {
    return JSON.parse(localStorage.getItem(this.KEY) || '[]');
  }

  private save(data: Category[]) {
    localStorage.setItem(this.KEY, JSON.stringify(data));
    this.categories$.next(data);
  }

  create(cat: Category) {
    this.save([...this.categories$.value, cat]);
  }

  delete(id: string) {
    this.save(this.categories$.value.filter(c => c.id !== id));
  }
}