class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }

    render() {
        this.shadowDOM.innerHTML = `
       <style>
            .search-container {
            max-width: 400px;
            box-shadow: 0 4px 2px 0 rgba(1,1,1,1.2);
            margin: 10px;
            padding: 10px;
            display: flex;
            position: fixed;
            top: 20px;
            background-color: #dddd;
            border-radius: 50px;

        }

        .search-container > input {
            width: 65%;
            padding: 20px;
            border: 1px solid grey;
            font-weight: bold;
            border-radius: 50px;
        }

        .search-container>input:focus {
            outline: 0;
            border: 2px solid black;
            border-radius: 50px;
        }

        .search-container>input:focus::placeholder {
            font-weight: bold;
        }

        .search-container>input::placeholder {
            color: grey;
            font-weight: bold;
        }

        .search-container>button {
            width: 30%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: black;
            color: white;
            border: 0;
            text-transform: uppercase;
            border-radius: 50px;
        }

        @media screen and (max-width: 550px) {
            .search-container {
                flex-direction: column;
                position: static;
            }
            .search-container>input {
                width: 100%;
                margin-bottom: 20px;
            }
            .search-container>button {
                width: 100%;
            }
        }
       </style>

       <div id="search-container" class="search-container">
        <input placeholder="Search fave meal..." id="searchElement" type="search">
        <button id="searchButtonElement" type="submit">Search</button>
      </div>
       `;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define("search-bar", SearchBar);