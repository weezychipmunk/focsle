import {
    container,
    dependencies
} from 'needlepoint';
import {
    Test
} from './test';

@dependencies(Test)
class Person {
    constructor(Test) {
        this.test = Test;
    }
    sayHi() {
        console.log("hello");
        this.test.sayLo();
    }
}

let per = container.resolve(Person);
var page = ({
    per
}) => {
    return `<h2>Person Says</h2>
    ${per.sayHi()}`;
}
console.log(page(per));