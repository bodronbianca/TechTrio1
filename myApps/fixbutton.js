var reports1 = 0;
var reports2 =0;
var reports3 = 0;
document.addEventListener('click',function(){
    var button1 = this.getElementById('pbinfo');
    var button2 = this.getElementById('instagram');
    var button3 = this.getElementById('snapchat');


    if(button1){
        button1.addEventListener('click',function(){
            reports1++;
            if(reports1 >= 10 || reports1 <20){
                document.getElementById('colorpbinfo').style.backgroundColor = "yellow";
            }else if(reports1 >=20){
                document.getElementById('colorpbinfo').style.backgroundColor = "red";
            }
        })
    }

    if(button2){
        button2.addEventListener('click',function(){
            reports2++;
            if(reports2 >=10 || reports2<20){
                document.getElementById('colorinstagram').style.backgroundColor = "yellow";
            }else if(reports2 >= 20){
                document.getElementById('colorinstagram').style.backgroundColor = "red";
            }
        })
    }

    if(button3){
        button3.addEventListener('click',function(){
            reports3++;
            if(reports3 >= 10 || reports3<20){
                document.getElementById('colorinstagram').style.backgroundColor = "yellow";
            }else if(reports3 >= 20){
                document.getElementById('colorinstagram').style.backgroundColor = "red";
            }
        });
    }
}); 