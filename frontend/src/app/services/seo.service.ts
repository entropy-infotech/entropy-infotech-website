import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  updateMetaTags(title: string, description: string, keywords: string = '') {
    const fullTitle = `${title} | Entropy Infotech`;
    this.titleService.setTitle(fullTitle);
    
    this.metaService.updateTag({ name: 'description', content: description });
    if (keywords) {
      this.metaService.updateTag({ name: 'keywords', content: keywords });
    }

    // Update OG tags
    this.metaService.updateTag({ property: 'og:title', content: fullTitle });
    this.metaService.updateTag({ property: 'og:description', content: description });
    this.metaService.updateTag({ property: 'twitter:title', content: fullTitle });
    this.metaService.updateTag({ property: 'twitter:description', content: description });
  }
}
