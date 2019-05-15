import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'username'
})

export class UsernamePipe implements PipeTransform {
    transform(value: string): any {
        if (!value)
            return value;

        return value.replace(/@(\w{1,15})/ig, '<span class="username">@$1</span>');
        //return value.replace(new RegExp('@(\w{1,15})', 'gm'), '<span class="username">@$1</span>');
    }
}
