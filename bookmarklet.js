(function(){
    console.log("bookmarklet starting");
    let p=document.getElementsByTagName("p");
    for(var i=0;i<p.length;i++){
        p[i].innerHTML="puppy";
    }
})()
