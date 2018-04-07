import { from } from "rxjs/Observable/from";
import 'rxjs/add/operator/pluck';

from([
    { first: 'Gary', last: 'Simon', age: '34'},
    { first: 'Jane', last: 'Simon', age: '24'},
    { first: 'Bob', last: 'Simon', age: '14'}
])
    .pluck('first')
    .subscribe((x:any) => addItem(x))

function addItem(val:any) {
    var node = document.createElement("li");
    var textnode = document.createTextNode(val);
    node.appendChild(textnode);
    document.getElementById("output").appendChild(node);
}