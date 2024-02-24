// Import necessary modules
import { PokemonTypes } from "./PokemonTypes.js";
import { ListView } from "./ListView.js";
import { FilterPanel } from "./FilterPanel.js";

// Wait for the DOM to be fully loaded before executing the code
document.addEventListener("DOMContentLoaded", async (event) => {
    // Load type combinations data from the specified JSON file
    await PokemonTypes.readJsonFile('js/typecombos.json');

    // Create instances of FilterPanel and ListView
    var filterPanel = new FilterPanel();
    var listView = new ListView('list-container', PokemonTypes.typeCombos);

    // Get the 'main' div element
    var main = document.getElementById("main");
    // Set the inner HTML of 'main' with the rendered filter panel and list container
    main.innerHTML = filterPanel.render() + `<div id='list-container'></div>`;

    // Attach event handlers for the filter panel
    filterPanel.attachEventHandlers();
    // Define a callback for when filters are changed
    filterPanel.OnFiltersChanged = (filters) => {
        // Filter type combinations based on selected filters and update the list view
        var items = PokemonTypes.typeCombos.filter((typeCombo) => filters[typeCombo.primaryType] && (filters[typeCombo.secondaryType] ?? true));
        listView.updateItems(items);
    };
});

// Get the modal element
var modal = document.getElementById("infoModal");

// Get the button that opens the modal
var btn = document.getElementById("infoButton");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
