// Define the ListViewItem class
export class ListViewItem {
  // Constructor takes a typecombo object
  constructor(typecombo) {
    this.item = typecombo;
    this.itemId = this.item.primaryType.toLowerCase();

    if (this.item.secondaryType != null) {
        this.itemId += `-${this.item.secondaryType.toLowerCase()}`;
    }
  }

  // Render method generates HTML markup for each list item
  render() {
    var markup = `<span class="badge ${this.item.primaryType.toLowerCase()}">${this.item.primaryType}</span>`;
    
    if (this.item.secondaryType != null) {
      markup += `<span class="badge ${this.item.secondaryType.toLowerCase()}">${this.item.secondaryType}</span>`;
    }
    
    markup += `
      <div class="code-container">
          <pre><code>${this.item.filterString}</code></pre>
          <button id="${this.itemId}-btn" class="copy-button"><img src="img/paste.svg" alt="Clipboard Icon"></button>
      </div>
    `;

    return markup;
  }

  // Copy method to copy the filter string to the clipboard
  copyToClipboard() {
    const button = document.getElementById(`${this.itemId}-btn`);
    const img = button.querySelector("img");
    const originalSrc = img.src;
    
    navigator.clipboard.writeText(this.item.filterString).then(() => {
      img.src = "img/check.svg";
      
      button.classList.add("clicked");
      
      setTimeout(() => {
        button.classList.remove("clicked");
        img.src = originalSrc;
      }, 2000);
    }).catch((error) => {
      console.error('Failed to copy: ', error);
    });
  }  

  // Attach event handler for the copy button
  attachEventHandlers() {
    const button = document.getElementById(`${this.itemId}-btn`);
    button.addEventListener('click', this.copyToClipboard.bind(this));
  }
}