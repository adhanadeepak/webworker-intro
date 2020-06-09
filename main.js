console.info('Main js file for web workers');

function multiply(event){
    console.log(event);
    event.preventDefault();
    let multiplyWorker = new Worker('worker.js')
    let a = document.getElementById('value-1');
    let b = document.getElementById('value-2');

    multiplyWorker.addEventListener('message', event => {
        console.log('%c Multiplication', 'color: red;',event.data);
        let ans = document.getElementById('answer');
        ans.value = event.data;
    })
    if(a && b){
         multiplyWorker.postMessage([Number(a.value),Number(b.value)]);   
    }
    
}