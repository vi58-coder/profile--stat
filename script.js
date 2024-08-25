const counterEl = document.querySelectorAll(".counter")


counterEl.forEach((counterEl) => {
    counterEl.innerText = "0";
    incrementCounter();
    function incrementCounter(){
       let currentNum = +counterEl.innerText
       const dataCeil = counterEl.getAttribute("data-ceil")
       console.log(dataCeil);
       const increment = dataCeil / 15
       currentNum = Math.ceil(currentNum + increment)  
       counterEl.innerText = currentNum   
       if(currentNum < dataCeil){
        counterEl.innerText = currentNum 
        setTimeout(incrementCounter, 50)
       } else{
        counterEl.innerText = dataCeil
       }                                                                                                        
    }
});