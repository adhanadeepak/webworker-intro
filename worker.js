onmessage = function(e) {
    console.log('Worker called');
    let [a,b] = e.data;
    console.log('worker data:',a, b);
    console.log('%c Posting Message from worker', 'color: green;');
    this.postMessage(a*b);
}