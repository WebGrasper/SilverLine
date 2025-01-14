const templatePath = "/templates/";
class SpecialHeader extends HTMLElement {
  async connectedCallback() {
    const response = await fetch(templatePath + "header.html"); // Path to the external header file
    const html = await response.text();
    this.innerHTML = html;
    // Dispatch a custom event to signal that the header is loaded
    this.dispatchEvent(new CustomEvent("headerLoaded", { bubbles: true }));
  }
}
class SpecialFooter extends HTMLElement {
  async connectedCallback() {
    const response = await fetch(templatePath + "footer.html"); // Path to the external header file
    const html = await response.text();
    this.innerHTML = html;
  }
}

// Register the custom element
customElements.define("special-header", SpecialHeader);
customElements.define("special-footer", SpecialFooter);
