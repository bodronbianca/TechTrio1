var reports1 = 0;
var reports2 =0;
var reports3 = 0;
document.addEventListener('click',function(){
    var button1 = this.getElementById('bugforFavapp');
    var button2 = this.getElementById('bugforFavapp1');
    var button3 = this.getElementById('bugforFavapp2');


    if(button1){
        button1.addEventListener('click',function(){
            reports1++;
            if(reports1 >= 10 || reports1 <20){
                document.getElementById('color11').style.backgroundColor = "yellow";
            }else if(reports1 >=20){
                document.getElementById('color11').style.backgroundColor = "red";
            }
        })
    }

    if(button2){
        button2.addEventListener('click',function(){
            reports2++;
            if(reports2 >=10 || reports2<20){
                document.getElementById('color12').style.backgroundColor = "yellow";
            }else if(reports2 >= 20){
                document.getElementById('color12').style.backgroundColor = "red";
            }
        })
    }

    if(button3){
        button3.addEventListener('click',function(){
            reports3++;
            if(reports3 >= 10 || reports3<20){
                document.getElementById('color13').style.backgroundColor = "yellow";
            }else if(reports3 >= 20){
                document.getElementById('color13').style.backgroundColor = "red";
            }
        });
    }
}); 