let usernameInput = document.getElementById ('usernameInput')
let passwordInput = document.getElementById ('passwordInput')
let owner = document.getElementById ('owner')
let guest = document.getElementById ('guest')

owner.style.display='none'
guest.style.display='none'

function onLogin () {
    console.log ('on')
    console.log (usernameInput. value);
    console.log (passwordInput. value);


    if(usernameInput.value == 'naufal' && passwordInput.value == 'naufalganteng'){
        alert('login sebagai owner')
        owner.style.display='block'
        guest.style.display='none'


    } else {
        alert('login sebagai guest')
        guest.style.display='block'
        owner.style.display='none'


    }

}





