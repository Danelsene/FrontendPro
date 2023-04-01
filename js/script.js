const a = 2;
const b = 3;

function sum (a, b) {
    return a + b;
}

    sum(a, b);
    console.log(sum(a, b));
    document.write(sum(a, b)); //----print sum result

    document.write(`<hr/>`)

let c = function (any) {
    return any - 2;
}

    console.log(typeof(c)) //----check c type
    c(sum(a, b));
    console.log(c(sum(a, b)));
    document.write(c(sum(a, b))); //------ rusult of c function

    document.write(`<hr/>`)

function main (a, b, c) { 
    if(typeof(c) === 'function') {
        return c(sum(a, b)) -2; //---тут додала -2 щоб перевірити чи спрацьовує перевірка на функцію
    } else {
        return sum(a, b);
    }
}

    main(a, b, c);
    console.log(main(a, b, c));
    document.write(main(a, b, c)); //-------result of main function

    document.write(`<hr/>`)
