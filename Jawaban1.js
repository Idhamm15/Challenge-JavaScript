for(var angka =1; angka <= 10; angka++){
    if(angka % 2 == 0 && angka % 5 == 0){
        console.log("saya ganteng");
    }
    else if(angka % 5 == 0){
        console.log("ganteng");
    }else if (angka % 2 == 0){
        console.log("saya");
    }else{
        console.log(angka);
    }
}