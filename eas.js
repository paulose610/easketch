document.addEventListener("DOMContentLoaded",function(){
    
    const brdpad=document.querySelector(".pad");
    const btns=document.querySelector(".opts");
    let r=0,shde=false,ersre=false,down=false,rgb=false;

    const bnrml=document.getElementById("nrml");
    bnrml.style.backgroundColor="green";
    bnrml.addEventListener('click',()=>{
        chclr();
        bnrml.style.backgroundColor='green';
        shde=false;
        ersre=false;
        rgb=false;
        
    })

    const bshd=document.getElementById("shd");
    bshd.addEventListener('click',(e)=>{
        ersre=false;
        shde=true; 
        rgb=false;  
        chclr();
        e.target.style.backgroundColor='green';
        
    });

    const brnbw=document.getElementById("rnbw");
    brnbw.addEventListener('click',(e)=>{
        shde=false;
        ersre=false;
        rgb=true;
        chclr();
        e.target.style.backgroundColor='green';
    })

    const bersr=document.getElementById("ersr");
    bersr.addEventListener('click',(e)=>{
        ersre=true;shde=false;rgb=false;
        chclr();
        e.target.style.backgroundColor='green';
    })

    const bclr=document.getElementById("clr");
    bclr.addEventListener('click',del);

    const sbmtbtn=document.querySelector("#submit");
    
    sbmtbtn.addEventListener("click",()=>{
        let inpt=document.querySelector('#gridsize');
        let inpval=inpt.value;
    
        if (inpval>0 && inpval<64){
        inpt.value="";    
        inpt.placeholder=`     ${inpval} x ${inpval}  `;
        delpad();
        grdsz=inpval;
        setpad(grdsz);
    }
        else if (inpval>64){
            inpt.value=""; 
            inpt.setAttribute("placeholder",`     64 x 64`)
            delpad();
            grdsz=64;
            setpad(grdsz);
        }
    })

    let grdsz=32;
    
    function setpad(gs){
        for (let i=0;i<gs*gs;i++){
        const bt=document.createElement("button");
        bt.addEventListener('mousedown',()=>{down=true});
        bt.addEventListener('mouseup',()=>{down=false});
        bt.addEventListener('mouseover',draw)
        setbtn(grdsz,bt);
        brdpad.appendChild(bt);
    }
    }

    setpad(grdsz);

    function delpad(){
        Array.from(brdpad.children).forEach((el)=>{brdpad.removeChild(el);})
    }

    function draw(t){
        if (down){
        if (shde) {
            t.target.style.backgroundColor="";
            shdcount(t);
        }
        else if (ersre){
            t.target.style.backgroundColor="";
            t.target.className='normal';
        }
        else if (rgb){
            t.target.style.backgroundColor=rainbow();
        }
        else {
            t.target.style.backgroundColor="";
            t.target.className=`c0`;
        }
        }
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
            el.style.backgroundColor="";
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
        if (c>0){
            c-=1;
            e.target.className=`c${c}`;
        }
    }

    function rainbow(){
        const r=Math.floor(Math.random()*100+120);
        const g=Math.floor(Math.random()*100+120);
        const b=Math.floor(Math.random()*100+120);
        return `rgb(${r},${g},${b})`
    }
})