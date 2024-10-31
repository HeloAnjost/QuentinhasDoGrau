let carrinho = {};

function adicionarAoCarrinho(item) {
    if (carrinho[item]) {
        carrinho[item]++;
    } else {
        carrinho[item] = 1;
    }
    atualizarCarrinho();
    alert(`${item} adicionado ao carrinho!`);
}

function removerDoCarrinho(item) {
    if (carrinho[item]) {
        carrinho[item]--;
        if (carrinho[item] === 0) {
            delete carrinho[item];
        }
        atualizarCarrinho();
        alert(`${item} removido do carrinho!`);
    }
}

function atualizarCarrinho() {
    const carrinhoCount = Object.values(carrinho).reduce((sum, qty) => sum + qty, 0);
    document.getElementById('carrinhoCount').textContent = `(${carrinhoCount})`;
    
    const listaCarrinho = document.getElementById('listaCarrinho');
    listaCarrinho.innerHTML = '';

    for (const item in carrinho) {
        const li = document.createElement('li');
        li.textContent = `${item} - Quantidade: ${carrinho[item]}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removerDoCarrinho(item);
        
        li.appendChild(removeButton);
        listaCarrinho.appendChild(li);
    }

    const carrinhoSection = document.getElementById('carrinho');
    carrinhoSection.style.display = carrinhoCount > 0 ? 'block' : 'none';
}

document.getElementById('carrinhoLink').addEventListener('click', function() {
    mostrarCarrinho();
});

function mostrarCarrinho() {
    const carrinhoSection = document.getElementById('carrinho');
    const listaCarrinho = document.getElementById('listaCarrinho');

    listaCarrinho.innerHTML = '';
    for (const item in carrinho) {
        const li = document.createElement('li');
        li.textContent = `${item} - Quantidade: ${carrinho[item]}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remover';
        removeButton.onclick = () => removerDoCarrinho(item);
        
        li.appendChild(removeButton);
        listaCarrinho.appendChild(li);
    }

    carrinhoSection.style.display = 'block';
    window.scrollTo(0, carrinhoSection.offsetTop);
}

function finalizarPedido() {
    if (Object.keys(carrinho).length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    
    alert('Pedido finalizado! Obrigado pela preferência.');
    carrinho = {};
    atualizarCarrinho();
    mostrarCarrinho();
}
function addToCart(item, price) {
    const existingItem = cart.find(cartItem => cartItem.item === item);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ item, price, quantity: 1 });
    }
    total += price;
    updateCart();
}


