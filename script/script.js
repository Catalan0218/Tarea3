//Arreglo con paises iniciales
const paises = [
    {
        nombre: "Guatemala",
        bandera: "https://bit.ly/3Bwr2rm",
        capital: "Ciudad de Guatemala",
        idioma_oficial: "Español",
        moneda: "Quetzal"
    },
    {
        nombre: "Argentina",
        bandera: "https://bit.ly/3BEJC0y",
        capital: "Buenos Aires",
        idioma_oficial: "Español",
        moneda: "Peso"
    },
    {
        nombre: "Francia",
        bandera: "https://bit.ly/3HFZ7t5",
        capital: "Paris",
        idioma_oficial: "Frances",
        moneda: "Euro"
    },
    {
        nombre: "El Salvador",
        bandera: "https://bit.ly/3uRN5F6",
        capital: "San Salvador",
        idioma_oficial: "Español",
        moneda: "Dolar"
    },
    {
        nombre: "Honduras",
        bandera: "https://bit.ly/3UWcrMM",
        capital: "Tegucigalpa",
        idioma_oficial: "Español",
        moneda: "Lempira"
    }
];

let botonMostrar = document.getElementById('mostrarPaises');
let botonRegistrar = document.getElementById('guardaRegistro');

agregarMonitores();
//funcion para agregar listeners a los botones
function agregarMonitores() {
    botonRegistrar.addEventListener("click", function(){agregarPais();});
    botonMostrar.addEventListener("click", function(){mostrarPaises();});
}

//funcion que mostrara las paises en la pagina
function mostrarPaises() {
    let paisRes = '';
    for(let i = 0; i < paises.length; i++){
        paisRes += `
        <div class="col-12 col-lg-12 pt-3">
            <div class="table-responsive">
                <table class="table table-striped table-bordered table-sm">
                    <thead class="table-dark">
                        <tr>
                            <th>Nombre</th>
                            <th>Capital</th>
                            <th>Idioma</th>
                            <th>Moneda</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${paises[i].nombre}</td>
                            <td>${paises[i].capital}</td>
                            <td>${paises[i].idioma_oficial}</td>
                            <td>${paises[i].moneda}</td>
                        </tr>
                        <tr>
                            <td colspan="4" class="text-center"><img src="${paises[i].bandera}" alt="bandera"></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        `;
    }
    document.getElementById("paises").innerHTML = paisRes;
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
   //No logre q funcionara :( JAJA
}