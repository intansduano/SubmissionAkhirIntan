class MealItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: 'open' });
    }

    set meal(meal) {
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        :host {
          display: flex;
          flex: 1;
          height: 100%;
          width: 100%;
          margin-bottom: 18px;
          box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.2);
          border-radius: 50px;
          overflow: hidden;
          flex-direction: row;
          padding-right: 100px;
        }
        .img-art-meal {
          width: 60%;
          max-height: 100%;
          object-fit: cover;
          object-position: center;
        }
        .meal-info {
          font-size; 20px;
          padding: 24px;
          color: black;
        }
        .meal-info > h2 {
          font-weight: lighter;
          text-transform: uppercase;
        }
        
        .meal-info > p {
          margin-top: 10px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 10; /* number of lines to show */
        }

        .button-more{
          background-color: black;
          color: white;
          margin-top: 10px;
          padding: 5px;
          border-radius: 5px;
          text-transform: uppercase;
          cursor: pointer;
        }
      </style>
        
        <img class="img-art-meal" src="${this._meal.strMealThumb}" alt="Meal Thumb">
           <div class="meal-info">
               <h2>${this._meal.strMeal}</h2>
               <h4>${this._meal.strCategory}</h4>
               <p>${this._meal.strInstructions}</p>
               <button class="button-more">for more</button>
           </div>`;
    }
}

customElements.define("meal-item", MealItem);