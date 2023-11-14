const apiKey = '9666a4d53c426792d378cbc417d41ff1';

function executaPagina()
{
    let xhr = new XMLHttpRequest();
    xhr.open('GET', `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=pt-BR&page=1`);
    xhr.onload = exibeLancamentos;
    xhr.send();
}

function pesquisaFilme()
{
    let xhr = new XMLHttpRequest();
    let query = document.getElementById('pesquisarF').value;

    xhr.open('GET', `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
    xhr.onload = exibeLancamentos;
    xhr.send();
}

function exibeLancamentos()
{
    let divLancamentos = document.getElementById('lancamentos');
    let texto = "";
    let dados = JSON.parse(this.responseText);

    for(i = 0; i < dados.results.length; i++)
    {
        let filme = dados.results[i];

        texto = texto + `
        <div class="col-12 col-sm-12 col-md-4 col-lg-4">
            <div class="card">
              <img src="https://themoviedb.org/t/p/w600_and_h900_bestv2/${filme.poster_path}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${filme.title}</h5>
                <p class="card-text">${filme.overview}</p>
                <p class="card-text">Data de lançamento: ${filme.release_date}</p>
                <a href="https://themoviedb.org/movie/${filme.id}" class="btn btn-dark">Saiba mais</a>
              </div>
            </div>
        </div>

        
        `;
    }

    divLancamentos.innerHTML = texto;
}

window.onload = executaPagina;
