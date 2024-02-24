// Import necessary modules
import { PokemonTypes } from "./PokemonTypes.js";
import { Toggle } from "./Toggle.js";

// Define the FilterPanel class
export class FilterPanel {
  // Constructor initializes filters and an empty array of toggles
  constructor() {
    this.toggles = [];
    this.filters = {};
    this.OnFiltersChanged = (filters) => {}; // Callback function for filters changed event
  }

  // Render method generates HTML markup for the filter panel
  render() {
    let markup = `<div id='filterPanel'>`;
    // Iterate through Pokemon types and create toggles for each type
    PokemonTypes.pokemonTypes.forEach((type) => {
      this.filters[type] = false;
      let filterToggle = new Toggle(type, (value) => {
        this.filters[type] = value;
        this.OnFiltersChanged(this.filters);
      });

      this.toggles.push(filterToggle);
      markup += filterToggle.render();
    });

    // Add a "Clear All" button to reset filters
    markup += `</div>`;
    markup += `<button class="badge" id='clearAll'>Reset <img src="img/arrow.svg" alt="Reset"/></button>`;
    return markup;
  }

  // Attach event handlers for toggles and the "Clear All" button
  attachEventHandlers() {
    this.toggles.forEach((toggle) => {
      toggle.attachEventHandlers();
    });

    const clearAllButton = document.getElementById("clearAll");
    clearAllButton.addEventListener("click", (event) => {
      event.preventDefault();
      // Deactivate all toggles and reset filters when "Clear All" is clicked
      this.toggles.forEach((toggle) => {
        toggle.deactivate();
        this.filters[toggle.pokemonType] = false;
      });
      this.OnFiltersChanged(this.filters);
    });
  }
}