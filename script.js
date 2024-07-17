function BinaryConv(){
    var enter = document.getElementById("entrada");
    var out = document.getElementById("saida");
    
    var ent = parseInt(enter.value);
    
    if(isNaN(enter.value)){
        out.value = "Digite somente números";
    }

    if(ent === 0){
        out.value = 0;
    }
    else{
        var bin = "";

        while(ent > 0){
            bin = (ent % 2) + bin;
            ent = Math.floor(ent / 2);
        }
        out.value = bin
    }


    
}