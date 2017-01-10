function start (i){
    let mysum = document.getElementById("summary");
    let myul = mysum.getElementsByTagName("ul")[0];
    let newli = document.createElement("li");
    newli.innerHTML="skill "+i;
    myul.appendChild(newli);
}



window.onload = function(){
    
    setTimeout(start,1000/2,1); 
    setTimeout(start,2000/2,2); 
    setTimeout(start,3000/2,3); 
    setTimeout(start,4000/2,4); 
};