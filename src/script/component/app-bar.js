class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-family: 'Quick Sand',sans-serif;
        }
        :host {
          display: block;
          width: 100%;
          height: 230px;
          background-color: black;
        }
        h2 {
          padding: 120px 0 0 40px;
          bottom: 5px;
          align-items: center;
          text-align: left;
          color: white;
          text-transform: uppercase;
        }

        .title-desc{
          color: white;
          padding-left: 40px;
          padding-top: 10px;
        }
      </style>
      
      <h2>Meals Favo</h2>
      <div class="title-desc">
                Enter your favorite meals around the world with MealDB
            </div>
    `;
    }
}

customElements.define('app-bar', AppBar);