class MenuBar extends HTMLElement{

    static get observedAttributes() {
        return ['open'];
    }

    get customHeight(){
        if(this.hasAttribute('height')) return this.getAttribute('height');
    }

    constructor(){
        super();
        //estilos
        this.css = document.createElement('link');
        this.css.rel = 'stylesheet';
        this.css.type = 'text/css';
        this.css.href = './components/menu-bar/menu-bar.css';
        this.style.height = this.customHeight;
        //slots de la izquierda
        this.slotBefore = document.createElement('slot');
        this.slotBefore.name = 'contentBefore';
        this.contentBefore = document.createElement('div');
        this.contentBefore.id = 'contentBefore';
        this.contentBefore.append(this.slotBefore)
        //slots de la derecha
        this.slotAfter = document.createElement('slot');
        this.slotAfter.name = 'contentAfter';
        this.contentAfter = document.createElement('div');
        this.contentAfter.id = 'contentAfter';
        this.contentAfter.append(this.slotAfter)
        //barra de navegación y enlaces
        this.slotElement = document.createElement('slot');
        this.nav = document.createElement('nav');
        this.nav.id = 'contentNav';
        if(window.matchMedia('(max-width : 500px)').matches){
            this.nav.style.top = this.customHeight;
            this.nav.style.height = `calc(100vh - ${this.customHeight})`;
        }
        this.nav.append(this.slotElement);
        //togglebtn
        this.toggleBtn = document.createElement('div');
        this.toggleBtn.id = "menuBarToggleButton";
        this.toggleBtn.addEventListener('click', e => this.toggleAttribute('open'))
        this.bar1 = document.createElement('div');
        this.bar2 = document.createElement('div');
        this.bar3 = document.createElement('div');
        this.toggleBtn.append(this.bar1, this.bar2, this.bar3)
        //div de cierre por click fuera del nav
        this.exitContainer = document.createElement('div');
        this.exitContainer.id = 'exitContainer';
        this.exitContainer.style.top = this.customHeight;
        this.exitContainer.style.height = `calc(100vh - ${this.customHeight})`;
        this.exitContainer.addEventListener('click', e => this.removeAttribute('open'))

        this.attachShadow({ mode : 'open' });

        this.shadowRoot.append(this.css, this.toggleBtn, this.contentBefore, this.nav, this.contentAfter, this.exitContainer);
    }
    attributeChangedCallback(attrName, oldVal, newVal){
            
    }
}
customElements.define("menu-bar", MenuBar)