import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    value: string | number,
    inputType: 'cel' | 'fah',
    outputType?: 'cel' | 'fah'
  ): string {
    let val: number;
    if (typeof value === 'string') {
      val = parseFloat(value);
    } else {
      val = value;
    }
    let outTemp: number;
    if (inputType === 'cel' && outputType === 'fah') {
      outTemp = val * (9 / 5) + 32;
    } else if (inputType === 'fah' && outputType === 'cel') {
      outTemp = (val - 32) * (5 / 9);
    } else {
      outTemp = val;
    }

    let symbol: 'C' | 'F';
    if (!outputType) {
      symbol = inputType === 'cel' ? 'C' : 'F';
    } else {
      symbol = outputType === 'cel' ? 'C' : 'F';
    }
    return `${outTemp} °${symbol}`;
  }
}
