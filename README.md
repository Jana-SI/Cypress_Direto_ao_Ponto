**Inicializar um projeto Node**

    npm init --yes

**Instalar o cypress**

    npm install -D cypress
    npm install -D cypress@12.5.0

**Abrir o cypress**

    npx cypress open (interface grafica)

    npx cypress run (sem interface grafica / resultado no terminal)

    npm test (configurando o script package.json)

**Site utilizado para testes**

    https://devfinance-agilizei.netlify.app/

**Alterando configurações usando a linha de comando**

    npx cypress run --config viewportHeight=1000,viewportWidth=600

