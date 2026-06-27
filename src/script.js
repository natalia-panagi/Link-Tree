let links = [
  {
    text: "Darphin 40% OFF - Until Stock Lasts",
    url: "https://bwell.com.cy/search?key=darphin&currentPage=1",
    icon: "circle-percent",
  },
  {
    text: "Pharmacies Locations & Hours ",
    url: "https://bwell.com.cy/homepage/store-locations",
    icon: "building-2",
  },

  {
    text: "Shop Online - All Cyprus",
    url: "https://bwell.com.cy",
    icon: "shopping-cart",
  },
  {
    text: "Shop on Wolt - in Limassol",
    url: "https://wolt.com/en/cyp/limassol/venue/bwell-pharmacy-moutagiaka",
    icon: "motorbike",
  },
];

let container = document.getElementById("link-tree");
links.forEach(link =>{
    let a = document.createElement ("a");
    a.href = link.url;
   
    a.target = "_blank";
    a.className = "btn";
      a.innerHTML = `
    <span>${link.text}</span>
    <i data-lucide="${link.icon}"></i>
    
  `;
    

    container.appendChild(a);


});

lucide.createIcons();

let thumbnailsData = [
  {
    text: "Lose weight without <br> injections",
    url: "https://bwell.com.cy/product-details/dietmed-dietformpic-vegetarian-capsules-30-4174",
    img: "https://website-0208ad57.bsg.beb.mybluehost.me/uploads/weight.png",
  },
  {
    text: "True italian elegance <br> for you",
    url: "https://bwell.com.cy/search?key=RUDY&currentPage=1",
    img: "https://website-0208ad57.bsg.beb.mybluehost.me/uploads/rudy.png",
  },
];

let grid = document.getElementById("thumbnails");
thumbnailsData.forEach(item=> {
    let thumb = document.createElement ("div")
    thumb.className = "thumb"
    thumb.innerHTML = `<a href = "${item.url}" target="_blank">
    <img src="${item.img}">
    </a>
    <p>${item.text}</p>`
   grid.appendChild(thumb)

});



