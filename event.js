function doA() {
    setTimeout(function(){
        console.log("test");
    }, 1000);
}

function doB() {
    console.log("BBBB");
}


doA();
doB();