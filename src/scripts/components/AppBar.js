class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav id="drawer">
            <a href="#" class="nav-logo">Love<span>Eat.</span></a>
            <ul class="nav-list">
                <li class="nav-item"><a href="/">Home</a></li>
                <li class="nav-item"><a href="#/like">Favorite</a></li>
                <li class="nav-item"><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/dwi-saputra-b1a013165/">About</a></li>
                <li class="nav-mobile"><button id="hamburger" aria-label="show navigation">☰</button></li>
            </ul>    
        </nav>
        <div class="nav-list-mobile">
            <li class="nav-item-mobile"><a href="/">Home</a></li>
            <li class="nav-item-mobile"><a href="#/like">Favorite</a></li>
            <li class="nav-item-mobile"><a target="_blank" rel="noopener" href="https://www.linkedin.com/in/dwi-saputra-b1a013165/">About</a></li>
        </div>
        `;
  }
}

customElements.define('app-bar', AppBar);
