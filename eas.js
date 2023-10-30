document.addEventListener("DOMContentLoaded",function(){
    
    const brdpad=document.querySelector(".pad");
    const btns=document.querySelector(".opts");
    let r=0,shde=false;

    const bnrml=document.getElementById("nrml");
    bnrml.style.backgroundColor="green";
    bnrml.addEventListener('click',()=>{
        chclr();
        bnrml.style.backgroundColor='green';
        shde=false;
        
    })

    const bshd=document.getElementById("shd");
    bshd.addEventListener('click',(e)=>{
        shde=true;   
        chclr();
        e.target.style.backgroundColor='green';
        
    });

    const brnbw=document.getElementById("rnbw");

    const bersr=document.getElementById("ersr");

    const bclr=document.getElementById("clr");
    
    bclr.addEventListener('click',del);

    

    let grdsz=36;
    
    for (let i=0;i<grdsz*grdsz;i++){
        const bt=document.createElement("button");
        bt.addEventListener('mouseover',draw);
        
        setbtn(grdsz,bt);
        brdpad.appendChild(bt);
    }

    function draw(t){
        if (shde) {
            shdcount(t);
        }
        else t.target.className=`c0`;
    }

    function setbtn(a,bt){
        const q=600/a;
        bt.style.height=`${q}px`;
        bt.style.width=`${q}px`;
        bt.style.border='0px';
        bt.style.padding='0px';
        bt.setAttribute('class',`normal`);
    }

    function del(t){
        const pix=brdpad.children;
        Array.from(pix).forEach((el)=>{
            el.setAttribute('class','normal');
        })
    }

    function chclr(){
        Array.from(btns.children).forEach((el)=>{
            el.style.backgroundColor="#e8e6e3";
        })
    }

    function shdcount(e){
        let c=e.target.className;
        if (c==='normal') e.target.className=`c5`;
        c=e.target.className.charAt(1);
        //console.log(c);
        if (c>0){
            c-=1;
            e.target.className=`c${c}`;
        }
    }

})