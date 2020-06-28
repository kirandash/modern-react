// Demo - Export fns with one default

function a(){
    console.log('a!');
}

function b() {
    console.log('b!');
}

function c() {
    console.log('c!');
}

function d() {
    console.log('d!');
}

export default a;
export { b, c, d };
