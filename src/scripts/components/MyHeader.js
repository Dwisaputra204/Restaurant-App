class MyHeader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <header class="hero">
        <picture>
          <source media="(max-width: 600px)" srcset="/images/hero-image_2-small.jpg">
          <img src="/images/hero-image_2-large.jpg" alt="hero images"/>
        </picture>
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
