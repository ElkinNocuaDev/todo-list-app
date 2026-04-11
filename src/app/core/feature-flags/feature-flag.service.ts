import { Injectable, inject } from '@angular/core';
import {
  RemoteConfig,
  fetchAndActivate,
  getValue
} from '@angular/fire/remote-config';

@Injectable({ providedIn: 'root' })
export class FeatureFlagService {

  private rc = inject(RemoteConfig);

  async isCategoriesEnabled(): Promise<boolean> {
    try {
      // 🔥 importante: configurar valores por defecto
      this.rc.defaultConfig = {
        enable_categories: true
      };

      // 🔥 tiempo de cache (opcional pero recomendado)
      this.rc.settings.minimumFetchIntervalMillis = 10000;

      await fetchAndActivate(this.rc);

      return getValue(this.rc, 'enable_categories').asBoolean();

    } catch (error) {
      console.error('Remote Config error:', error);

      // 🔥 fallback seguro
      return true;
    }
  }
}