class ListItem extends HTMLElement {
  connectedCallback() {
    this.id = this.getAttribute('id') || null;
    this.image = this.getAttribute('image') || null;
    this.name = this.getAttribute('name') || null;
    this.rating = this.getAttribute('rating') || null;
    this.description = this.getAttribute('description') || null;
    this.city = this.getAttribute('city') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
        
        <figure>
        <img src="${this.image}"
            alt="${this.name}">
        <div class="content">
            <div class="content-head">
                <a href="/"><figcaption>${this.name}</figcaption></a>
                <div>
                    <p class="city">${this.city}</p>
                    <p class="rating">${this.rating}</p>
                </div>
            </div>
            <div class="content-body">
                <p>${this.description}</p>
            </div>
        </div>
        </figure>
        
        `;
  }
}

customElements.define('list-item', ListItem);
