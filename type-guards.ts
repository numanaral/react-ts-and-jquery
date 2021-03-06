// type guards
/** @see https://basarat.gitbook.io/typescript/type-system/typeguard#user-defined-type-guards */

/**
 * Just some interfaces
 */
interface Foo {
    foo: number;
    common: string;
}
interface Bar {
    bar: number;
    common: string;
}
/**
 * User Defined Type Guard!
 */
function isFoo(arg: any): arg is Foo {
    return arg.foo !== undefined;
}
/**
 * Sample usage of the User Defined Type Guard
 */
function doStuff(arg: Foo | Bar) {
    if (isFoo(arg)) {
        console.log(arg.foo); // OK
        console.log(arg.bar); // Error!
    }
    else {
        console.log(arg.foo); // Error!
        console.log(arg.bar); // OK
    }
}
doStuff({ foo: 123, common: '123' });
doStuff({ bar: 123, common: '123' });
