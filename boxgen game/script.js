var btngenerator=document.getElementById("btngen");
btngenerator.addEventListener("click",gen);
var count=0;
// function for creating boxes
function gen(){
    var num=document.getElementById("textbox").value;
    var colour=document.getElementById("colorbox").value;
    for(let i=1;i<=num;i++){
        count++;
        var generator=document.createElement("BUTTON");
        generator.innerHTML=count;
        generator.id="new";
        document.body.appendChild(generator).style.backgroundColor=colour;
    }
    var breakelement=document.createElement("BR");
    document.body.appendChild(breakelement);
    console.log(num);

}