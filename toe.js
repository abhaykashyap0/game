const big=document.querySelectorAll("#bigbox");
let Rlt=document.getElementById("result")
const row=3;
const col=3;
let c=0;
let g=[];
let h=0;
let elem=document.querySelectorAll(".box")
for(let j=0;j<row;j++){
    g[j]=[];
    for(let k=0;k<col;k++){
     g[j][k]=h;
     h++;
    }
}
elem.forEach((box) =>{
    

       
    box.addEventListener("click",() =>{
        console.log("box click");
        let t=box.getAttribute("id");
        c++;
        console.log(c,("c"));
        console.log(t,("t"));
         Gwinner(g);
        tik(t,c);
        box.disabled=true;
        Gwinner(g);

    })
    

const tik=(n,c) => {
    // for(let i=0;i<9;i++){
        if(c%2===0){
    
            if(n==="0"){
                    box.innerText="X";
                    g[0][0]="X";}

                else if(n==="1"){
                    box.innerText="X";
                    g[0][1]="X";}
                    
                else if(n==="2"){
                    box.innerText="X";
                    g[0][2]="X";}
                    
                else if(n==="3"){
                    box.innerText="X";
                    g[1][0]="X";}
                else if(n==="4"){
                    box.innerText="X";
                    g[1][1]="X";}
                    
                else if(n==="5"){
                    box.innerText="X";
                    g[1][2]="X";}
                
                else if(n==="6"){
                    box.innerText="X";
                    g[2][0]="X";}
                    
                else if(n==="7"){
                    box.innerText="X";
                    g[2][1]="X";}
                    
                else if(n==="8"){
                    box.innerText="X";
                    g[2][2]="X";}
                    
    
            
    
    
        }
        else {
            if(n==="0"){
                box.innerText="O";
                g[0][0]="O";}

            else if(n==="1"){
                box.innerText="O";
                g[0][1]="O";}
                
            else if(n==="2"){
                box.innerText="O";
                g[0][2]="O";}
                
            else if(n==="3"){
                box.innerText="O";
                g[1][0]="O";}
            else if(n==="4"){
                box.innerText="O";
                g[1][1]="O";}
                
            else if(n==="5"){
                box.innerText="O";
                g[1][2]="O";}
            
            else if(n==="6"){
                box.innerText="O";
                g[2][0]="O";}
                
            else if(n==="7"){
                box.innerText="O";
                g[2][1]="O";}
                
            else if(n==="8"){
                box.innerText="O";
                g[2][2]="O";}
        }

    
} 

})


let Gwinner=(g) => {
    if((g[0][0]==="X")&&(g[0][1]==="X")&&(g[0][2]==="X")||(g[0][0]==="X")&&(g[1][0]==="X")&&(g[2][0]==="X")||(g[1][0]==="X")&&(g[1][1]==="X")&&(g[1][2]==="X")||(g[2][0]==="X")&&(g[2][1]==="X")&&(g[2][2]==="X")||(g[0][1]==="X")&&(g[1][1]==="X")&&(g[2][1]==="X")||(g[0][2]==="X")&&(g[1][2]==="X")&&(g[2][2]==="X")||(g[0][0]==="X")&&(g[1][1]==="X")&&(g[2][2]==="X")||(g[0][2]==="X")&&(g[1][1]==="X")&&(g[2][0]==="X"))
     {Rlt.innerText="🎉X is WINNER"  ;
        Rlt.style.backgroundColor='aquamarine';
         Rlt.style.color='black';
        // Rlt.style.width="200px";
        document.querySelectorAll('button').forEach(button => button.disabled = true);
    }
    else if((g[0][0]==="O")&&(g[0][1]==="O")&&(g[0][2]==="O")||(g[0][0]==="O")&&(g[1][0]==="O")&&(g[2][0]==="O")||(g[1][0]==="O")&&(g[1][1]==="O")&&(g[1][2]==="O")||(g[2][0]==="O")&&(g[2][1]==="O")&&(g[2][2]==="O")||(g[0][1]==="O")&&(g[1][1]==="O")&&(g[2][1]==="O")||(g[0][2]==="O")&&(g[1][2]==="O")&&(g[2][2]==="O")||(g[0][0]==="O")&&(g[1][1]==="O")&&(g[2][2]==="O")||(g[0][2]==="O")&&(g[1][1]==="O")&&(g[2][0]==="O"))
      {  Rlt.innerText="🎉O IS WINNER"  ;
        document.querySelectorAll('button').forEach(button => button.disabled = true);
        Rlt.style.backgroundColor='aquamarine';
        Rlt.style.color='black';
       }
       
}