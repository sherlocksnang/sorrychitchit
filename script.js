function clickYesbutton(){
    alert('ကိုကိုကလည်းအများကြီးချစ်ပါတယ်ခင်ဗျ <3')
}
function hoverNobutton(){

    var x = Math.random() * (window.innerWidth - document.getElementById('no-button').offsetWidth) - 85;
                        var y = Math.random() * (window.innerHeight - document.getElementById('no-button').offsetHeight) - 48;
                        document.getElementById('no-button').style.left = `${x}px`;
                        document.getElementById('no-button').style.top = `${y}px`;
}