import { Pipe, PipeTransform } from "@angular/core";

@Pipe({name: 'myNumberFormatter'}) 
export class ExponentiaStrengthPipe implements PipeTransform {
    transform(value: number):
    String{
        if(value < 1 || value > 5){
            return "-";
        }
        return value.toString();
    }
}