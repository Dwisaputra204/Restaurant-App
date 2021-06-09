class MyHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="hero">
            <div class="overlay">
                <h3>LOVEEAT is Your Choice</h3>
                <p>find good restaurants near you and find good food for your mood</p>
                <a href="#main-content" class="btn">Find It</a>
            </div>
        </header>
        `;
  }
}

customElements.define('my-header', MyHeader);
