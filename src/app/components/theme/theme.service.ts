import { Inject, Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

type ThemeType = 'theme-dark' | 'theme-light';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private DEFAULT_THEME: ThemeType = 'theme-light';
  currentTheme!: ThemeType;
  renderer: Renderer2;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    rendererFactory: RendererFactory2
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    this.currentTheme = this.getColorTheme();
    this.update(this.currentTheme);
  }

  update(theme: ThemeType) {
    this.currentTheme = theme;
    localStorage.setItem('user-theme', theme);
    this.renderer.addClass(this.document.body, this.currentTheme);
    if (this.currentTheme === 'theme-dark') {
      this.renderer.removeClass(this.document.body, 'theme-light');
    } else {
      this.renderer.removeClass(this.document.body, 'theme-dark');
    }
  }

  isDarkMode(): boolean {
    this.currentTheme = this.getColorTheme();
    return this.currentTheme === 'theme-dark';
  }

  private getColorTheme(): ThemeType {
    if (this.currentTheme) return this.currentTheme;
    const localStorageTheme = localStorage.getItem('user-theme');
    if (
      localStorageTheme === 'theme-light' ||
      localStorageTheme === 'theme-dark'
    ) {
      return localStorageTheme;
    }
    return this.DEFAULT_THEME;
  }
}
