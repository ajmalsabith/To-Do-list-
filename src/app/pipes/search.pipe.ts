import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(item:any[], value:string):any[] {

    if(!item || !value){
      return item
    }

    value= value.toLocaleLowerCase()

   return item.filter(val=>{
    return  val.name.toLocaleLowerCase().includes(value)
    })


  }

}
