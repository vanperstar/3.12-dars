m = 0;
var y;

function start(){

    y = setInterval(run,100);

    function run()
    {
        if(m==1200)
        {
            clearInterval(x);
            m=0;
        }else{
            m+=3;
            var x=document.getElementById("img");
            // x.style.marginLeft=m+'px'
            x.style.left=m+'px'
        }
    }
}

function stop(){
    clearInterval(y)
}


function back(){

    y = setInterval(run,100);

    function run()
    {
        if(m==1200)
        {
            clearInterval(x);
            m=0;
        }else{
            m-=3;
            var x=document.getElementById("img");
            // x.style.marginLeft=m+'px'
            x.style.left=m+'px'
        }
    }
}
