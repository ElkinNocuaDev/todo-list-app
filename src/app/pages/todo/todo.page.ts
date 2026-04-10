import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonIcon } from '@ionic/angular/standalone';

import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonCheckbox,

  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonFab,
  IonFabButton,
  IonSegment,
  IonSegmentButton,

  // 🔥 NUEVOS (OBLIGATORIOS)
  IonModal,
  IonButtons
} from '@ionic/angular/standalone';

import { TaskService } from '../../services/task.service';
import { CategoryService } from '../../services/category.service';

import { BehaviorSubject, combineLatest } from 'rxjs'; // 🔥 NUEVO
import { map } from 'rxjs/operators';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,

    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonCheckbox,

    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonFab,
    IonFabButton,
    IonSegment,
    IonSegmentButton,
    IonModal,
    IonButtons,
    IonIcon
  ],
  templateUrl: './todo.page.html',
  styleUrls: ['./todo.page.scss']
})
export class TodoPage {

  private taskService = inject(TaskService);
  private categoryService = inject(CategoryService);

  // 🔹 EXISTENTE
  tasks$ = this.taskService.tasksObservable;

  // 🔹 EXISTENTE
  categories$ = this.categoryService.categoriesObservable;

  // 🔥 NUEVO: estado reactivo de categoría
  private selectedCategorySubject = new BehaviorSubject<string>('');
  selectedCategory$ = this.selectedCategorySubject.asObservable();

  // 🔥 NUEVO: filtro reactivo REAL (FIX BUG)
  filteredTasks$ = combineLatest([
    this.tasks$,
    this.selectedCategory$
  ]).pipe(
    map(([tasks, categoryId]) => {
      if (!categoryId) return tasks;
      return tasks.filter(t => t.categoryId === categoryId);
    })
  );

  // 🔥 NUEVO: cambiar categoría
  onCategoryChange(value: any) {
    const categoryId = String(value ?? '');
    this.selectedCategorySubject.next(categoryId);
  }

  // 🔥 MODAL
  isCategoryModalOpen = false;
  newCategoryName = '';

  openCategoryModal() {
    this.isCategoryModalOpen = true;
  }

  closeCategoryModal() {
    this.isCategoryModalOpen = false;
    this.newCategoryName = '';
  }

  saveCategory() {
    const name = this.newCategoryName.trim();

    if (!name) return;

    this.categoryService.create({
      id: crypto.randomUUID(),
      name,
      color: '#3880ff'
    });

    this.closeCategoryModal();
  }

  // 🔹 EXISTENTE (ajustado levemente)
  addTask(title: any) {
    const value = String(title ?? '').trim();

    if (!value) return;

    // 🔥 obtener categoría actual
    const categoryId = this.selectedCategorySubject.value;

    this.taskService.add({
      id: crypto.randomUUID(),
      title: value,
      completed: false,
      createdAt: Date.now(),
      categoryId: categoryId || undefined
    });
  }

  toggle(id: string) {
    this.taskService.toggle(id);
  }

  delete(id: string) {
    this.taskService.delete(id);
  }

  trackById(index: number, task: any) {
    return task.id;
  }
}