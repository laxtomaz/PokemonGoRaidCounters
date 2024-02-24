// Define the Toggle class
export class Toggle {
  // Constructor takes a Pokemon type and a callback function for onChange event
  constructor(type, fnOnChange) {
    this.pokemonType = type;
    this.fnOnChange = fnOnChange;
  }
  
  // Method to deactivate the toggle
  deactivate() {
    const checkbox = document.getElementById(`filter-${this.pokemonType.toLowerCase()}`);
    checkbox.checked = false;
    this.fnOnChange(false);
  }

  // Render method generates HTML markup for the toggle
  render() {
    var markup = `
      <input id='filter-${this.pokemonType.toLowerCase()}' type='checkbox' style='display: none' />
      <label class='badge ${this.pokemonType.toLowerCase()}' for='filter-${this.pokemonType.toLowerCase()}'>${this.pokemonType}</label>
    `;

    return markup;
  }

  // Attach event handler for the change event of the checkbox
  attachEventHandlers() {
    const checkbox = document.getElementById(
      `filter-${this.pokemonType.toLowerCase()}`
    );
    checkbox.addEventListener("change", (event) => {
      this.fnOnChange(event.currentTarget.checked);
    });
  }
}
