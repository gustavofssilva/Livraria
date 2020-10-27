const botao = document.querySelector('#calcular')

botao.addEventListener('click', function(event) {
    
    event.preventDefault();

    let resultado = 0;
    let valorDescontado = 0;
    
   const valor = Number(document.querySelector('#preco').value);
   const nomedoLivro = document.querySelector('#nomedoLivrooo').value;
   const desconto = document.getElementById('desconto').value;

    if(desconto === 'clienteA') {
        valorDescontado =  (valor * 0.15 )
        resultado = (valor - valorDescontado);
    }else if (desconto === 'clienteB') {
        valorDescontado =  (valor * 0.10 );
        resultado = (valor - valorDescontado);
    }else if (desconto === 'clienteC') {
        valorDescontado =  (valor * 0.07 );
        resultado = (valor - valorDescontado);
    }else {
        resultado = valor;
    }


    
    document.getElementById("p1").innerHTML=`Nome do Livro: ${nomedoLivro}`;

    document.getElementById("p2").innerHTML=`Preço do livro: R$${valor}`;

    document.getElementById("p3").innerHTML=`Desconto: R$${valorDescontado}`;

    document.getElementById("p4").innerHTML=`Total a Pagar: R$${resultado}`;
    
});
