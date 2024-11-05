class MiWhatsAppButton extends HTMLElement {
    constructor() {
        super();
        
        //this.attachShadow({ mode: 'open' });
        const shadow = this.attachShadow({ mode: 'closed' });
        
        const numeroTelefono = this.getAttribute('numeroTelefono');
        const mensaje = this.getAttribute('mensaje');
        const positionBottom = this.getAttribute('positionBottom');
        const positionRight = this.getAttribute('positionRight');

        const mensajeCodificado = encodeURIComponent(mensaje);
        
        const container = document.createElement('div');
        container.innerHTML = `
            <style>
                .boton-whatsapp {
                    position: fixed; 
                    bottom: ${positionBottom}px;
                    right: ${positionRight}px;
                    z-index: 1000;
                    width: 60px; 
                    height: 60px; 
                    border-radius: 50%;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    overflow: hidden;
                    transition: transform 0.3s ease, box-shadow 0.3s ease; 
                }
                
                .boton-whatsapp img {
                    width: 100%; 
                    height: 100%; 
                    transition: transform 0.3s ease;
                }
                
                .boton-whatsapp:hover {
                    transform: scale(1.1) rotate(10deg); 
                    box-shadow: 0px 0px 15px rgba(0, 255, 0, 0.5);
                }
                
                .boton-whatsapp:hover img {
                    transform: rotate(-10deg);
                }
            </style>
            <a href="https://wa.me/${numeroTelefono}?text=${mensajeCodificado}" class="boton-whatsapp" target="blank">
                <img src="../imagenes/logoWhatsApp.jpeg" alt="whatsapp">
            </a>
        `;

        //this.shadowRoot.appendChild(container);
        shadow.appendChild(container);
    }
}
customElements.define('whatsapp-button', MiWhatsAppButton);
