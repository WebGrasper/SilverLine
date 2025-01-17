// Get the product code from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');
const subCategory = urlParams.get('subCategory');
const productCode = urlParams.get('productCode');

// Function to fetch and render product details
function fetchProductDetails() {
  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      if (!category || !subCategory || !productCode) {
        document.getElementById('productDetailsContainer').innerHTML =
          '<p style="color: red;">Invalid URL parameters. Please provide valid category, subCategory, and productCode.</p>';
        return;
      }
      // Fetch the product details using category, subCategory, and productCode
      const product = data[category]?.[subCategory]?.find(item => item.productCode === productCode);
      
      if (!product) {
        document.getElementById('productDetailsContainer').innerHTML =
          `<p style="color: red;">Product with code "${productCode}" not found.</p>`;
        return;
      }

      // Display product details
      displayProductDetails(product);
    })
    .catch(error => {
      console.error('Error fetching product details:', error);
      document.getElementById('productDetailsContainer').innerHTML =
        '<p style="color: red;">Failed to fetch data. Please try again later.</p>';
    });
}

// Function to display the product details
function displayProductDetails(product) {
  const productDetailsContainer = document.getElementById('productDetailsContainer');

  const productHTML = `
    <div class="mainContainer">
      <div class="smallImageContainer">
        <img src="${product.image}" alt="Product Image" class="smallImage" onclick="openModal('${product.image}')">
      </div>
      <div class="productSpecsContainer">
        <h1 class="productCode">${product.productCode}</h1>
        <p class="productFinish">Finish: <span class="pd">${product.Finish}</span></p>
        <p class="productMaterial">Material: <span class="pd">${product.material}</span></p>
        <p class="productSize">Size (inches): <span class="pd">${product.size}</span></p>
        <p class="productDescription">Description: <span class="pd">${product.description}</span></p>
        <a href="contact-us.html" class="contactusBtn">Enquire Now</a>
      </div>
    </div>
    <div id="imageModal" class="modal">
      <span class="close" onclick="closeModal()">&times;</span>
      <img class="modal-content" id="modalImage">
    </div>
  `;

  // Inject the HTML into the product details container
  productDetailsContainer.innerHTML = productHTML;
}

// Function to open the modal with a larger image
function openModal(imageSrc) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modal.style.display = "block";
  modalImage.src = imageSrc;
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.style.display = "none";
}

// Call the function to fetch and render the product details
fetchProductDetails();