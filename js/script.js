//MANEJO DE SELECCION DE CHATS
document.addEventListener('DOMContentLoaded', function () {
    const elementosChat = document.querySelectorAll('.chat');
    const contenedorMensajes = document.getElementById('messageContainer');
  
    elementosChat.forEach((chat, index) => {
      chat.addEventListener('click', function () {
        // Borra los mensajes existentes
        contenedorMensajes.innerHTML = '';
  
        
        const mensajes = obtenerMensajes(index);
        mensajes.forEach((mensaje) => {
          const divMensaje = document.createElement('div');
          divMensaje.classList.add('mensaje');
          divMensaje.textContent = mensaje.texto; // Reemplaza con el contenido del mensaje
          contenedorMensajes.appendChild(divMensaje);
        });
      });
    });
  });
  
  function obtenerMensajes(indexChat) {
  
    return [
      { texto: '¡Hola desde el chat ' + indexChat + '!' },
      { texto: 'Mensaje ' + (indexChat + 1) },
      
    ];
  }

  //OBTIENE LA FOTO DE PERFIL SELECCIONADO
  document.addEventListener('DOMContentLoaded', function () {
    const elementosMensajes = document.querySelectorAll('.Mensajes');
    const perfilImg = document.getElementById('perfilImg');
    const messageList = document.getElementById('messageList');
  
    elementosMensajes.forEach((mensaje) => {
      mensaje.addEventListener('click', function () {
        // Obtén la ruta de la imagen de perfil desde el atributo de datos
        const profileImgSrc = mensaje.getAttribute('data-profile-img');
        // Oculta "Select a message" y el botón "New Message"
        messageList.style.display = 'none';
      });
    });
  });


  //METODO PARA METER LOS MENSAJES EN BURBUJAS
const messageContainer = document.getElementById("messageContainer");

// Agrega un evento de clic a los chats para cargar los mensajes correspondientes
const chats = document.querySelectorAll(".Mensajes");
chats.forEach(chat => {
  chat.addEventListener("click", () => {
    const profileImg = chat.getAttribute("data-profile-img");
    const messages = chat.querySelector(".mensajes-flex").innerHTML;

    // Crea el contenido del mensaje seleccionado con estilo de burbuja
    const selectedMessage = `
      <div class="perfil-container">
        <img class="perfil-img" src="${profileImg}" alt="">
      </div>
      <div class="mensaje-burbuja">
        ${messages}
      </div>
      <div class="mensaje-burbuja2">
        ${messages}
      </div>
      <div class="mensaje-burbuja">
        ${messages}
      </div>
      <div class="mensaje-burbuja2">
        ${messages}
      </div>
      <div class="mensaje-burbuja">
      ${messages}
    </div>
    `;

    // Actualiza el contenido del contenedor de mensajes
    messageContainer.innerHTML = selectedMessage;
  });
});


//METODO DE BUSQUEDA DE CHATS
document.addEventListener('DOMContentLoaded', function () {
    const elementosChat = document.querySelectorAll('.Mensajes');
    const contenedorMensajes = document.getElementById('messageContainer');
    const searchInput = document.querySelector('.search-barmsg input');
  
    searchInput.addEventListener('input', function () {
      const searchTerm = searchInput.value.toLowerCase();
      elementosChat.forEach((chat) => {
        const chatTitle = chat.querySelector('.Nombre-contenedor h3').textContent.toLowerCase();
        if (chatTitle.includes(searchTerm)) {
          chat.style.display = 'flex';
        } else {
          chat.style.display = 'none';
        }
      });
    });
  });
  

  


