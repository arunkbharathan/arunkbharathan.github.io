function first (){
//    let mysum = document.getElementById("summary");
//    let myul = mysum.getElementsByTagName("ul")[0];
//    let newli = document.createElement("li");
//    newli.innerHTML="Skill "+i;
//    myul.appendChild(newli);
    let col1s = document.getElementsByClassName("col1");
    col1s =  Array.prototype.slice.apply(col1s);
    for(let tmp of col1s){
        tmp.setAttribute("class","animcol1");
    };
    
}

function second(){
        let col2s = document.getElementsByClassName("col2");
    col2s =  Array.prototype.slice.apply(col2s);
    for(let tmp of col2s){
        tmp.setAttribute("class","animcol2");
    };
}



window.onload = function(){
    
    //setTimeout(start,1000/2,1); 
   // setTimeout(start,2000/2,2); 
    //setTimeout(start,3000/2,3); 
   // setTimeout(start,4000/2,4); 
    setTimeout(first,200); 
    setTimeout(second,400); 
    
};
