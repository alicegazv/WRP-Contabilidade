// =================================================================
// 1. FUNCIONALIDADE WHATSAPP
// =================================================================

// O número de WhatsApp da WRP (Formato: Código do País + DDD + Número)
// MUDAR AQUI PARA O NÚMERO DE DESTINO REAL DA WRP
const WHATSAPP_NUMBER = "5561999979102"; 

/**
 * Captura os dados do formulário de contato e redireciona para o WhatsApp.
 * @param {Event} event - O evento de submissão do formulário.
 */
function sendToWhatsApp(event) {
    event.preventDefault(); // Impede o envio tradicional do formulário (recarregamento da página)

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value; // Este é o número que o cliente informou
    const mensagem = document.getElementById('mensagem').value;

    // Constrói a mensagem com todos os dados
    const text = `*Nova mensagem de contato - Site WRP:*\n\n` +
                 `*Nome:* ${nome}\n` +
                 `*E-mail:* ${email}\n` +
                 `*Telefone do Cliente:* ${telefone}\n\n` +
                 `*Mensagem:*\n${mensagem}`;

    // Codifica o texto para ser seguro na URL
    const encodedText = encodeURIComponent(text);

    // Cria a URL de redirecionamento do WhatsApp
    const whatsappURL = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedText}`;

    // Abre o WhatsApp em uma nova aba
    window.open(whatsappURL, '_blank');
}


// =================================================================
// 2. FUNCIONALIDADE MODAL (POP-UP) DOS SERVIÇOS
// =================================================================

// Obtém os elementos do DOM
var modal = document.getElementById("serviceModal");
var span = document.getElementsByClassName("close-btn")[0]; // Botão de fechar (X)

/**
 * Abre o modal preenchendo o título e o texto.
 * É chamado pelo onclick nos links 'saiba mais'.
 * @param {Event} event - O evento de clique.
 * @param {string} title - O título do serviço.
 * @param {string} text - A descrição detalhada do serviço.
 */
function openModal(event, title, text) {
    event.preventDefault(); // Impede que o link navegue para #
    
    document.getElementById("modalTitle").textContent = title;
    document.getElementById("modalText").textContent = text;
    modal.style.display = "block";
}

// Quando o usuário clica no (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}