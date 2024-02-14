const productId = new URLSearchParams(window.location.search).get('id');
$.ajax({
  type: "GET",
  url: `https://fakestoreapi.com/products/${productId}`,
  success: function (detailsData) {
   console.log(detailsData)
   displayProductDetails(detailsData)
  },
  error: function (error) {
    console.error('Error fetching product details:', error);
  }
});

function displayProductDetails(productDetails) {
        // Assuming you have a container with the id 'productDetailsContainer'
        var container = $('#blogDetails');

        // Check if productDetails is not null or undefined
        if (productDetails) {
            // Create HTML structure for displaying product details
            var detailsHtml = `

      
                <section class="birthStory__blogs sectionPad pt-3 sm-pb-0">
  <div class="container">
    <div class="row">
      <div class="col-md-12">
        <div class="blog__img blog__details" data-aos="fade-up">
          <img src="${productDetails.image}" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>
<section class="blog__details sectionPad pt-3">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-8">
        <p>${productDetails.description}</p>
        <p>${productDetails.description}</p>
      </div>
    </div>
  </div>
</section>
            `;

            // Append the details HTML to the container
            container.html(detailsHtml);
        } else {
            // Handle case where productDetails is not available
            container.html('<p>Product details not available.</p>');
        }
      }