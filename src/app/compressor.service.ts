import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompressorService {

  constructor() {
  }

  compress(file: File): Observable<any> {
    const width = 600; // For scaling relative to width
    const reader = new FileReader();
    reader.readAsDataURL(file);
    return new Observable(observer => {
      reader.onload = ev => {
        const img = new Image();
        img.src = (ev.target as any).result;
        (img.onload = () => {
          const elem = document.createElement('canvas');
          const scaleFactor = width / img.width;
          elem.width = width;
          elem.height = img.height * scaleFactor;
          const ctx = elem.getContext('2d') as CanvasRenderingContext2D;
          ctx.drawImage(img, 0, 0, width, img.height * scaleFactor);
          ctx.canvas.toBlob(
            blob => {
              observer.next(
                new File([blob], file.name, {
                  type: 'image/jpeg',
                  lastModified: Date.now(),
                }),
              );
            },
            'image/jpeg',
            1,
          );
        }),
          (reader.onerror = error => observer.error(error));
      };
    });
  }
}
