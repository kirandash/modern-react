// To separate pure JS fns from React specific code
function choice(arr){
    let randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export { choice };
