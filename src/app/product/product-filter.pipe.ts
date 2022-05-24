import {Pipe, PipeTransform} from '@angular/core';
import {Product} from "./product";

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(value: Product[], filterText: string | null): Product[] {
    filterText = filterText ? filterText.toLocaleLowerCase() : null

    return filterText ? value.filter((p: Product) => p.name
      .toLocaleLowerCase().indexOf(filterText as string) !== -1) : value;
  }
}
