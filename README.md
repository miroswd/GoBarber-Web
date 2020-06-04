<h2 align="center">GoBarber [Em desenvolvimento]</h2>
<p align="center">Aplicação de agendamento de serviços, para uma barbearia. Projeto principal do Bootcamp GoStack.</p>

<img src="https://github.com/miroswd/GoBarber-Web/blob/master/assets/logon.png"/>
<img src="https://github.com/miroswd/GoBarber-Web/blob/master/assets/create-account.png"/>

<h4>Para rodar a aplicação localmente</h4>

```bash

yarn # ou npm install

```


```bash

yarn start

```

<h4>Incluindo o Back end</h4>

- Necessário clonar o repositório: <a href="https://github.com/miroswd/gobarber-backend" target="_blank" >gobarber-backend</a>
- Baixar a imagem do Postgres

```bash
sudo docker run --name gobarber -e POSTGRES_PASSWORD=suasenha -p 5432:5432 -d postgres # Caso a porta 5432 esteja ocupada, modificar de 5432:5432 para 5433:5432
```
- Criar uma database chamada <b>gostack_gobarber</b> 
- Rodar as migrations

```bash
yarn typeorm migration:run
```

- Inicializar o projeto

```bash
yarn dev:server
```
