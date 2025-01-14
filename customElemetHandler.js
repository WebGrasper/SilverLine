const templatePath = "/templates/";
class SpecialFooter extends HTMLElement {
  async connectedCallback() {
    const response = await fetch(templatePath + "footer.html"); // Path to the external header file
    const html = await response.text();
    this.innerHTML = html;
  }
}

// Register the custom element
customElements.define("special-footer", SpecialFooter);
