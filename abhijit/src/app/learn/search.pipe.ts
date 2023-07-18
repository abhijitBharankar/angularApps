import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(tableData: any, searchText: any): any {
    console.log(tableData);
    console.log(searchText);
    // return null;
    if(!searchText) return tableData

    if(!tableData) return null

    let search = searchText.toLowerCase()
    return tableData.filter((element:any)=>{
      return JSON.stringify(element.firstName).toLowerCase().includes(search)
    })

  }

}
