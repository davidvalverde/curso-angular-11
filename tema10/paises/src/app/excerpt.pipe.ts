import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'excerpt'
})
export class ExcerptPipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    return value.substring(0, args[0]).concat(args[1]);
  }

}
