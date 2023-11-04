
            
           /// despues de hacer sesion el usuario  entra a la pagina principal 
            let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
            let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

            let MsHead = document.getElementById('msg');
            let Greet = document.getElementById('greet');
            let cerrarSesionbtn = document.getElementById('CerrarSesion');

        

            let Signout = ()=>{
                sessionStorage.removeItem("user-creds");
                sessionStorage.removeItem("user-info");
                window.location.href = 'login.html'
            }


            let CheckCred = ()=>{
                if(!sessionStorage.getItem("user-creds"))
                window.location.href = 'login.html'

                else{
              //      MsHead.innerText = `Usuario "${UserCreds.email}" inicio sesion`;
                    Greet.innerText = `Bienvenido ${UserInfo.Username}!`;
                }
            }

            window.addEventListener('load', CheckCred);
            cerrarSesionbtn.addEventListener('click', Signout)
////////////////////////////////////////////////////////////////////////


