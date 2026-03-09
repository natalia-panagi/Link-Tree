let links = [
  {
    text: "🌿Detox Time - 15%Off on Supplements",
    url: "https://bwell.com.cy/product-category/supplements/liver-health/",
  },
  {
    text: "🏢 Pharmacies Locations & Hours",
    url: "https://bwell.com.cy/store-locations/",
  },
  {text: "🛒 Shop Online",
    url: "https://bwell.com.cy",
  },
  {
    text: "🏍️ Shop on Wolt",
    url: "https://wolt.com/en/cyp/limassol/venue/bwell-pharmacy-agios-athanasios",
  }
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

let thumbnailsData= [
  {
    text: "Loose weight without <br> injections",
    url: "https://bwell.com.cy/shop/supplements/weight-loss/dietmed-dietform-pic-30-capsules/",
    img: 
      "https://instagram.fnic3-1.fna.fbcdn.net/v/t39.30808-6/493680545_1196795422371780_5976158526768075244_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&ig_cache_key=MzYyMDg5MTU4MTE5MzQ5NDUwMA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=2io99HSRprQQ7kNvwEBU7nI&_nc_oc=AdlwaxY-32pwHt7tkkTtZu9yWH0JW7tCDIxMmEr2W7gjXt9izKECALnYy48xAjeWV3g&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fnic3-1.fna&_nc_gid=QQcwhAUztTcUG7aBRj8h_A&_nc_ss=8&oh=00_AfzQ8RYIbbV541ZOubsSxQ69vAgHiuVa6wAgGOt20lgMuQ&oe=69AE151D",
      },
{text: "True Italian Elegance <br> for You",
url:"https://bwell.com.cy/product-tag/rudy-profumi/",
img: "https://instagram.fnic3-1.fna.fbcdn.net/v/t51.82787-15/580591872_18161853412391321_604140092477985990_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc2NDQxMzY3MDkxNTc3NTgyOA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=2tfWMH-U1EcQ7kNvwGv9C8M&_nc_oc=AdkfhQxM7ZkaKVWxuNY-WMLoCtRIDoH16twUD5fNuMbxkFALXuH8tuu5DvJfct-5zbo&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fnic3-1.fna&_nc_gid=_opS_ezuc_9bLeXPamZvEg&_nc_ss=8&oh=00_Afw8CBnTE2VZI99VwfHVdno0fDGRhbGXXspdDvOkbpAoTg&oe=69ADFDD8",

},
{text: "Choose Probiotics <br> Wisely",
url: "https://www.instagram.com/p/DRjWvMQlOrk/?hl=en&img_index=1",
img:"https://instagram.fnic3-1.fna.fbcdn.net/v/t39.30808-6/584146627_1367513951966592_3437146282347552595_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=Mzc3NDk2MDkwMjQwOTA1NzM1Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=H-UPLHB1XEwQ7kNvwHgbEVz&_nc_oc=AdkX4p1nTdw5-J2B3oMCP3gOxNaR5gjkidqVkNu9STMwyhEBpA62B2_1PIARyVZ7JXg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fnic3-1.fna&_nc_gid=BnEGBOZtY9NGrHZqebAJVQ&_nc_ss=8&oh=00_AfweqIQ6Pjpz8oi845rlmIsq-qggPDufaDhh2FKBF7uxkQ&oe=69AE035E",

},
{text:"Ideal Magnesium <br> for Active Life",
url: "https://www.instagram.com/p/DMs51IfPuIZ/?hl=en",
img: "https://instagram.fnic3-1.fna.fbcdn.net/v/t51.82787-15/524774969_18150616852391321_6280884130583666048_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&ig_cache_key=MzY4NzU3NjUzNDgwNzE0MjkzNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwODB4MTM1MC5zZHIuQzMifQ%3D%3D&_nc_ohc=_eE7ho60qSIQ7kNvwGv2wYn&_nc_oc=Adnp_uOIQEhR3gRtpXw4x8cp208TyNCLYg-vGxkLfQAMLFF3r7Hi7zL7Vax1sFtMEEc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=instagram.fnic3-1.fna&_nc_gid=vLi4aiZunsm8E7J6VBx7Xw&_nc_ss=8&oh=00_Afw6QpnhGAHOAlX24Og07bSLvkJWmu6HLyTzZRs_f5ZEiA&oe=69ADED69",
}
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


