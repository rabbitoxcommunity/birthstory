$.ajax({
    type: "GET",
    // url: 'http://172.20.10.3:3000/api/v1/get-blogs',
    url: 'https://fakestoreapi.com/products',
    success: function(dataLists) {
        // const dataLists = data;
        console.log('dataLists',dataLists)


        function formatDate(dateString) {
            var date = new Date(dateString);
            return date.toDateString();
        }
        $.each(dataLists, function(index, item) {
            // Create a new col-md-4 div
            var newColDiv = $('<div class="col-md-4"></div>');
            var innerHtml = `
                <div class="blogLists" data-aos="fade-up">
                    <img src="${item.image}" alt="" />
                    <div class="blog__title">
                        <a href="blog-details.html">
                            <h2>${item.title}</h2>
                        </a>
                        <h6>${formatDate(item.createdAt)} | <span>${item.author}</span></h6>
                    </div>
                </div>
            `;
            newColDiv.append(innerHtml);
            newColDiv.click(function () {
                // Redirect to the product details page with the product ID as a query parameter
                window.location.href = `blog-details.html?id=${item.id}`;
            });
            $('#blogLists').append(newColDiv);


        });
    },
    error: function(error) {
        console.error('Error fetching data:', error);
    }
});
