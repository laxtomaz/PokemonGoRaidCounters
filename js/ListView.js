// Import necessary module
import { ListViewItem } from "./ListViewItem.js";

// Define the ListView class
export class ListView {
  // Constructor takes a container ID and an array of items
  constructor(containerId, items) {
    this.containerId = containerId;
    this.items = items;
    this.viewItems = []; // Array to store ListViewItem instances
  }

  // Update method to replace items and trigger a re-render
  updateItems(newItems) {
    this.items = newItems;
    this.viewItems = [];
    this.render();
  }

  // Render method generates HTML markup for the list view
  render() {
    const container = document.getElementById(this.containerId);
    container.innerHTML = ""; // Clear the container

    const fragment = document.createDocumentFragment();

    // Iterate through items and create ListViewItem instances
    this.items.forEach((i) => {
      var viewItem = new ListViewItem(i);
      this.viewItems.push(viewItem);
      const listItemMarkup = viewItem.render();
      const listItemElement = document.createElement("div");
      listItemElement.innerHTML = listItemMarkup;
      fragment.appendChild(listItemElement);
    });

    container.appendChild(fragment);

    this.attachEventHandlers();
  }

  // Attach event handlers for each ListViewItem instance
  attachEventHandlers() {
    this.viewItems.forEach((i) => {
      i.attachEventHandlers();
    });
  }
}