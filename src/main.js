
            
           /// despues de hacer sesion el usuario  entra a la pagina principal 
            let UserCreds = JSON.parse(sessionStorage.getItem("user-creds"));
            let UserInfo = JSON.parse(sessionStorage.getItem("user-info"));

            let MsHead = document.getElementById('msg');
            let Greet = document.getElementById('greet');
            let cerrarSesionbtn = document.getElementById('CerrarSesion');

        

            let Signout = ()=>{
                sessionStorage.removeItem("user-creds");
                sessionStorage.removeItem("user-info");
                window.location.href = 'index.html'
            }


            let CheckCred = ()=>{
                if(!sessionStorage.getItem("user-creds"))
                window.location.href = 'index.html'

                else{
              //      MsHead.innerText = `Usuario "${UserCreds.email}" inicio sesion`;
                    Greet.innerText = `Bienvenido ${UserInfo.Username}!`;
                }
            }

            window.addEventListener('load', CheckCred);
            cerrarSesionbtn.addEventListener('click', Signout)
////////////////////////////////////////////////////////////////////////


let dataTable; // para almacenar datos de la tabla 
let dataTableIsInitialized = false;

const dataTableOptions = {
    //scrollX: "2000px",
    lengthMenu: [5, 10, 15, 20, 100, 200, 500],
    columnDefs: [
        { className: "centered", targets: [0, 1, 2, 3, 4, 5, 6] },
        { orderable: false, targets: [5, 6] },
        { searchable: false, targets: [1] }
        //{ width: "50%", targets: [0] }
    ],
    pageLength: 3,
    destroy: true,
    language: {
        lengthMenu: "Mostrar _MENU_ registros por página",
        zeroRecords: "Ningún usuario encontrado",
        info: "Mostrando de _START_ a _END_ de un total de _TOTAL_ registros",
        infoEmpty: "Ningún usuario encontrado",
        infoFiltered: "(filtrados desde _MAX_ registros totales)",
        search: "Buscar:",
        loadingRecords: "Cargando...",
        paginate: {
            first: "Primero",
            last: "Último",
            next: "Siguiente",
            previous: "Anterior"
        }
    }
};


////////////////logica de tabla ////////////////////////////

/* inicio de la tabla*/ 
const initDataTable = async () => {
    if (dataTableIsInitialized) {
        dataTable.destroy(); // errores de destruccion//
    }

    await listUsers();

    dataTable = $("#datatable_users").DataTable(dataTableOptions); /// errores de destruccion

    dataTableIsInitialized = true; // errores de destruccion
};



const listUsers = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");// aqui estan todos lo datos pero json
        const users = await response.json();

        let content = ``;
        users.forEach((user, index) => {
            content += `
                <tr>
                    <td>${index + 1}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.address.city}</td>
                    <td>${user.company.name}</td>
                    <td><i class="fa-solid fa-check" style="color: green;"></i></td>
                    <td>
                        <button class="btn btn-sm btn-primary"><i class="fa-solid fa-pencil"></i></button>     
                        <button class="btn btn-sm btn-danger"><i class="fa-solid fa-trash-can"></i></button>
                    </td>
                </tr>`;
        });
        tableBody_users.innerHTML = content;
    } catch (ex) {
        alert(ex);
    }
};

window.addEventListener("load", async () => {
    await initDataTable();
});