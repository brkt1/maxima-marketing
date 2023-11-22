/*  

==========this is for car post========= 

 {   typefor_button:"car",
        image : "img/car1.jpg" ,
        post_catagory : "car",
        post_type : "mercedes",
        price : 1200,
        discripsion : "Golden Car For Sel",
        direction:"",
        cm:"1000 km",
       
        },
 */


let post = "";
let products = [

        {typefor_button:"home",
        image : "img/property-9.jpg" ,
        post_catagory : "Home",
        post_type : "Villa",
        price : 35,
        discripsion : "",
        direction:"Betel",
        cm:"250 sqft",
        bed : " Bed",
        bath : " Bath"
        },
        
        {typefor_button:"home",
        image : "img/property-8.jpg" ,
        post_catagory : "Home",
        post_type : "G+1",
        price : 45,
        discripsion : "",
        direction:"Betel",
        cm:"175 sqft",
        bed : " Bed",
        bath : " Bath"
        },
        {typefor_button:"home",
        image : "img/property-7.jpg" ,
        post_catagory : "Home",
        post_type : "",
        price : 45,
        discripsion : "",
        direction:"Betel",
        cm:"175 sqft",
        bed : " Bed",
        bath : " Bath"
        },
       
        {   typefor_button:"home",
        image : "img/property-6.jpg" ,
        post_catagory : "Home",
        post_type : "House",
        price : 35,
        discripsion : "",
        direction:"Betel",
        cm:" sqft",
        bed : " Bed",
        bath : " Bath"
        },
    
        {   typefor_button:"home",
        image : "img/property-5.jpg" ,
        post_catagory : "Home",
        post_type : "",
        price :'' ,
        discripsion : "",
        direction:"Betel",
        cm:" sqft",
        bed : " Bed",
        bath : " Bath"
        },
       
        {   typefor_button:"home",
        image : "img/property-4.jpg" ,
        post_catagory : "Home",
        post_type : "G+1 ",
        price : 36,
        discripsion : "",
        direction:"Betel",
        cm:"260 sqft",
        bed : " Bed",
        bath : " Bath"
        },
    
        {   typefor_button:"home",
        image : "img/property-4.jpg" ,
        post_catagory : "Home",
        post_type : "G+1",
        price : 36,
        discripsion : "",
        direction:"Betel",
        cm:"260 sqft",
        bed : " Bed",
        bath : " Bath"
        },
       
        {   typefor_button:"home",
        image : "img/property-3.jpg" ,
        post_catagory : "Home",
        post_type : "Villa",
        price : 35,
        discripsion : "",
        direction:"Betel",
        cm:"175 sqft",
        bed : "Bed",
        bath : "Bath"
        },
     
        {   typefor_button:"home",
        image : "img/property-2.jpg" ,
        post_catagory : "Home",
        post_type : "Villa",
        price : 32,
        discripsion : "",
        direction:"Betel",
        cm:"160 sqft",
        bed : "Bed",
        bath : "Bath"
        },
        {   typefor_button:"home",
        image : "img/property-1.jpg" ,
        post_catagory : "Home",
        post_type : "Villa",
        price : 40,
        discripsion : "",
        direction:"Betel",
        cm:"247 sqft",
        bed : "Bed",
        bath : "Bath"
        }
];

for ( let product of products){
    post += `
    <div class=" post ${product.typefor_button} col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
    <div class="property-item rounded overflow-hidden">
        <div class="position-relative overflow-hidden">
            <a href=""><img class="img-fluid" src=${product.image}></a>
            <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3"> ${product.post_catagory}</div>
            <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${product.post_type}</div>
        </div>
        <div class="p-4 pb-0">
            <h5 class="text-primary mb-3">${product.price}M Birr </h5>
            <a class="d-block h5 mb-2" href="">${product.discripsion}</a>
            <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${product.direction}</p>
        </div>
        <div class="d-flex border-top">
            <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${product.cm}</small>
            <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${product.bed}</small>
            <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${product.bath}</small>
        </div>
    </div>
</div>
    `
    document.getElementById('productpost').innerHTML = post;
}
//===================================== this is for the highest lowest button =====================//
function sortByPrice(order) {
    if (order === "highest") {
      products.sort((a, b) => b.price - a.price);
    } else if (order === "lowest") {
      products.sort((a, b) => a.price - b.price);
    }

    post = "";

    for ( let product of products){
        post += `
        <div class=" post ${product.typefor_button} col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div class="property-item rounded overflow-hidden">
            <div class="position-relative overflow-hidden">
                <a href=""><img class="img-fluid" src=${product.image}></a>
                <div class="bg-primary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3"> ${product.post_catagory}</div>
                <div class="bg-white rounded-top text-primary position-absolute start-0 bottom-0 mx-4 pt-1 px-3">${product.post_type}</div>
            </div>
            <div class="p-4 pb-0">
                <h5 class="text-primary mb-3">${product.price}</h5>
                <a class="d-block h5 mb-2" href="">${product.discripsion}</a>
                <p><i class="fa fa-map-marker-alt text-primary me-2"></i>${product.direction}</p>
            </div>
            <div class="d-flex border-top">
                <small class="flex-fill text-center border-end py-2"><i class="fa fa-ruler-combined text-primary me-2"></i>${product.cm}</small>
                <small class="flex-fill text-center border-end py-2"><i class="fa fa-bed text-primary me-2"></i>${product.bed}</small>
                <small class="flex-fill text-center py-2"><i class="fa fa-bath text-primary me-2"></i>${product.bath}</small>
            </div>
        </div>
    </div>
        `
    }

    document.getElementById('productpost').innerHTML = post;

  }

  //===================================== this is for the type of post  =====================//

  const postTypeSelect = document.getElementById('postTypeSelect');

postTypeSelect.addEventListener('change', (event) => {
  const selectedType = event.target.value;

  // Update the post_type attribute of the property objects
  for (let product of products) {
    property.post_type = selectedType;
  }

  // Update the HTML code accordingly
  updateHTML();
});

