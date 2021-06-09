class MyFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer>
            <p>Copyright © 2021 - LoveEat</p>
        </footer>
        `;
  }
}

customElements.define('my-footer', MyFooter);
