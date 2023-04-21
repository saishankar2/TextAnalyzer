console.log("MG")
up.addEventListener("click", ()=>{
    console.log("To Upper and Beyond")
 inpText.value = inpText.value.toUpperCase()
})
lo.addEventListener("click", ()=>{
    console.log("To Lower and Under")
    inpText.value = inpText.value.toLowerCase()
   })
es.addEventListener("click", ()=>{
    console.log("Spaces gone to Hell")
    inpText.value = inpText.value.replace(/\s+/g,' ').trim();
})
el.addEventListener("click", ()=>{
    console.log("Lines gone to Hell")
    inpText.value = inpText.value.replace(/\n+/g,'\n').trim();
})
cl.addEventListener("click", ()=>{
    console.log("Everything gone to hell")
    inpText.value = ''
    CC.innerText = 0
    WC.innerText = 0
})
inpText.addEventListener("input",()=>{
    console.log("Changed")
    // https://jsfiddle.net/easyjs/bx26nato/
    var characters = inpText.value.split('');
  	CC.innerText = characters.filter( item => {
		return (item != ' ');
	}).length;
    WC.innerText = inpText.value.trim().replace(/\s+/gi,' ').split(' ').length;
    if(inpText.value.length==0)
    {
        CC.innerText = 0;
        WC.innerText = 0;
    }
    // CC.innerText = inpText.value.length
    // WC.innerText = inpText.value.trim().split(" ").length
})