class SpecialFooter extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `
        <div class="footerSupremeContainer">
          <div class="footerMainContainer">
            <div class="container1">
              <a href="/">
                <div class="footerLogo">
                  <img src="/logo.png" alt="Silverline logo" />
                </div>
              </a>
              <p class="footerDescription">
                FA Handicrafts offers beautiful metal products that combine global trends with Indian craftsmanship. We also provide a wide range of home decor and lifestyle products, such as furniture, lighting, and kitchen supplies.
              </p>
            </div>
            <div class="container2">
              <p class="container2Heading">Social links</p>
              <div class="container2Links">
                <a href="https://www.facebook.com/profile.php?id=100014501254734" target="_blank" class="links">
                  <img src="/assets/facebook.png" width="20" height="20" loading="lazy" />
                  <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/fahandicrafts/" target="_blank" class="links">
                  <img src="/assets/instagram.png" width="20" height="20" loading="lazy" />
                  <span>Instagram</span>
                </a>
                <a href="https://www.linkedin.com/in/fa-handicrafts-b09231317" target="_blank" class="links">
                  <img src="/assets/linkedin.png" width="20" height="20" loading="lazy" />
                  <span>Linkedin</span>
                </a>
              </div>
            </div>
            <div class="container3">
              <p class="container3Heading">Resources</p>
              <div class="container3Links">
                <a href="/terms-and-condition" class="links">Terms And Conditions</a>
                <a href="/about-us" class="links">About us</a>
                <a href="https://www.hawkflit.com" target="_blank" class="links">Developers</a>
                <a href="/products.html?category=furniture&subCategory=center-tables" class="links">Center Tables</a>
              </div>
            </div>
          </div>
          <div class="copyRightTagline">
            Copyright © 2024 FA Handicrafts. All Rights Reserved.
          </div>
        </div>
      `;
    }
  }
  
  // Register the custom element
  customElements.define('special-footer', SpecialFooter);
  