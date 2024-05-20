document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('#produtos .produto button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Produto adicionado ao carrinho!');
        });
    });
});
