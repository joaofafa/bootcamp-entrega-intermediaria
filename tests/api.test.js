const fetch = require('node-fetch');

test("API ViaCEP responde corretamente", async () => {

    const resposta = await fetch("https://viacep.com.br/ws/01001000/json/");

    const dados = await resposta.json();

    expect(dados.cep).toBe("01001-000");

});