import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uniqueCategory',
  standalone: true,
  pure: false // Set pure to false to make it update in real-time
})
export class UniqueCategoryPipe implements PipeTransform {

  transform(value: any[]): any[] {
    const uniqueArray = value.filter((cat, index, self) =>
      index === self.findIndex((r) => r.category === cat.category)
    );
    return uniqueArray;
  }
}