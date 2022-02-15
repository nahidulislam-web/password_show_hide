var checkBox = document.getElementById('checkBox');
var passWord = document.getElementById('passWord');

checkBox.addEventListener('click', function(){
    if(passWord.type == 'password'){
        passWord.type = "text"
    }
    else{
        if(passWord.type == 'text'){
            passWord.type = 'password'

        }
    }
})