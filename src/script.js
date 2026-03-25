let links = [
  {
    text: "🌿Detox Time - 15% Off on Supplements",
    url: "https://bwell.com.cy/product-category/supplements/liver-health/",
  },
  {
    text: "🏢 Pharmacies Locations & Hours",
    url: "https://bwell.com.cy/store-locations/",
  },

  {
    text: "📲Download our Application",
    url: "https://www.apple.com/apps/",
  },
  { text: "🛒 Shop Online - All Cyprus",
     url: "https://bwell.com.cy" },
  {
    text: "🏍️ Shop on Wolt - in Limassol",
    url: "https://wolt.com/en/cyp/limassol/venue/bwell-pharmacy-agios-athanasios",
  },
];

let container = document.getElementById("link-tree");
links.forEach(link =>{
    let a = document.createElement ("a");
    a.href = link.url;
    a.textContent = link.text;
    a.target = "_blank";
    a.className = "btn";
    container.appendChild(a);


});

let thumbnailsData = [
  {
    text: "Lose weight without <br> injections",
    url: "https://bwell.com.cy/shop/supplements/weight-loss/dietmed-dietform-pic-30-capsules/",
    img: "https://website-5b9884c4.bsg.beb.mybluehost.me/uploads/weight.png",
  },
  {
    text: "True Italian Elegance <br> for You",
    url: "https://bwell.com.cy/product-tag/rudy-profumi/",
    img: "https://website-5b9884c4.bsg.beb.mybluehost.me/uploads/rudy.png",
  },
  {
    text: "Choose Probiotics <br> Wisely",
    url: "https://www.instagram.com/p/DRjWvMQlOrk/?hl=en&img_index=1",
    img: "https://website-5b9884c4.bsg.beb.mybluehost.me/uploads/probio.png",
  },
  {
    text: "Ideal Magnesium <br> for Active Life",
    url: "https://www.instagram.com/p/DMs51IfPuIZ/?hl=en",
    img: "https://website-5b9884c4.bsg.beb.mybluehost.me/uploads/malate.png",
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


