var botao = document.getElementById("carregar");
var resultado = document.getElementById("resultado");

const carregar = async () => {
    botao.textContent = "Carregando...";
    botao.disabled = true;
    resultado.innerHTML = "";
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');

        if (!response.ok) {
            throw new Error("Erro na requisição");
        }

        const data = await response.json();

        data.forEach(user => {
            resultado.innerHTML += `
    <p>
                    Nome: ${user.name}<br>
                    Email: ${user.email}<br>
                    Cidade: ${user.address.city}
                </p>
                <hr>
            `;
        });

    } catch (error) {
        resultado.innerHTML = "Erro ao carregar usuários";
    } finally {
        botao.textContent = "CARREGAR";
        botao.disabled = false;
    }
}

botao.addEventListener('click', carregar);
/*franciel*/