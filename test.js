function first (){
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

    setTimeout(first,200); 
    setTimeout(second,400); 
    
};
