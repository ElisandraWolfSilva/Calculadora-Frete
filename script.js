function calcularFrete() {
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const largura = parseFloat(document.getElementById('largura').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const pesoBruto = parseFloat(document.getElementById('pesoBruto').value);
    const quantidade = parseInt(document.getElementById('quantidade').value);
    const transporte = document.getElementById('transporte').value;
    const resultado = document.getElementById('resultado');
  
    if ([comprimento, largura, altura, pesoBruto, quantidade].some(isNaN) || quantidade <= 0) {
      resultado.innerText = 'Por favor, preencha todos os campos corretamente.';
      return;
    }
  
    const pesoCubado = (comprimento * largura * altura * quantidade) / 6000;
    const pesoFinal = Math.max(pesoBruto, pesoCubado);
  
    let frete = 0;
    if (transporte === 'rodoviario') {
      frete = pesoFinal * 1.5;
    } else if (transporte === 'aereo') {
      frete = pesoFinal * 3.0;
    }
  
    resultado.innerText =
      `Peso Cubado: ${pesoCubado.toFixed(2)} kg\n` +
      `Peso Considerado: ${pesoFinal.toFixed(2)} kg\n` +
      `Valor do Frete: R$ ${frete.toFixed(2)}`;
  }
  
  function limparCampos() {
    document.getElementById('freteForm').reset();
    document.getElementById('resultado').innerText = '';
  }
