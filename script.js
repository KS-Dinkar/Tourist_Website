
function initMap() {
const mapStyles = [
    {
        featureType: "poi",
        elementType: "labels",
        stylers: [
            { visibility: "off" }
        ]
    }
];
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false);


//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}

    // Create a map centered at Hyderabad, India
    const map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 17.385044, lng: 78.486671 },
        zoom: 12, // Adjust the zoom level as needed
        styles: mapStyles,
    });
    // Assuming you have created a Google Map instance called 'map'

    // Add markers to the map with event listeners


   const hussainSagarMarker = new google.maps.Marker({
        position: { lat: 17.4239, lng: 78.4738 }, // Hussain Sagar coordinates
        map: map,
title: "Hussain sagar",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
} 
});


const birlaMandirMarker = new google.maps.Marker({
        position: { lat: 17.4062, lng: 78.4691 }, // Birla Mandir coordinates
        map: map,
title: "Birla Mndir",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});


const charminarMarker = new google.maps.Marker({
    position: { lat: 17.3616, lng: 78.4747 }, // Charminar coordinates
    map: map,
title: "Charminar",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});


const golcondaFortMarker = new google.maps.Marker({
    position: {lat: 17.3833, lng : 78.4011  }, // Golconda Fort coordinates
    map: map,
title: "Golconda Fort",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});

const chowmahallaPalaceMarker = new google.maps.Marker({
    position: {lat: 17.3578 , lng: 78.4717  }, // Chowmahalla Palace coordinates
    map: map,
title: "Chowmahalla Palace",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});

const qutubShahiTombsMarker = new google.maps.Marker({
    position: {lat: 17.3971, lng: 78.3988  }, // Qutub Shahi TombsCoordinates
    map: map,
title: "Qutub Shahi Tombs",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});

const TajFalaknumaPalaceMarker = new google.maps.Marker({
    position: {lat: 17.3315, lng: 78.4675  }, // Taj Falaknuma Palace Coordinates
    map: map,
title: "Taj Falaknuma Palace",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});

const meccaMasjidMarker = new google.maps.Marker({
    position: {lat:17.3604 , lng: 78.4736   }, // Mecca Masjid Coordinates
    map: map,
title: "Mecca Masjid",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});

const lumbiniParkMarker = new google.maps.Marker({
    position: {lat:17.4097 , lng: 78.4724   }, // Lumbini Park Coordinates
    map: map,
title: "Lumbini Park",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});
const salarJungMuseumMarker = new google.maps.Marker({
    position: {lat:17.3716 , lng: 78.4802 }, //Salar Jung Museum  Coordinates
    map: map,
title: "Salar Jung Museum",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});

const ShilparamamMarker = new google.maps.Marker({
    position: {lat:17.4526 , lng: 78.3783 }, //Shilparamam  Coordinates
    map: map,
title: "Shilparamam",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});

const ramojiFilmCityMarker = new google.maps.Marker({
    position: {lat:17.2641 , lng: 78.6818 }, //Ramoji Film City  Coordinates
    map: map,
title: "Ramoji Film City",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
})

const nehruZoologicalParkMarker = new google.maps.Marker({
    position: {lat:17.3507, lng: 78.4519 }, //  Coordinates
    map: map,
title: "Zoo",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});

const laadBazarMarker = new google.maps.Marker({
    position: {lat:17.3629 , lng:78.4741}, // Laad Bazar Coordinates
    map: map,
title: "BLaad Bazar",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});
const chilkurBalajiMarker = new google.maps.Marker({
    position: {lat:17.360224, lng: 78.298615  }, // Chilkur Balaji Temple Coordinates
    map: map,
title: "Chilkur Balaji",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});

const paigahTombsMarker = new google.maps.Marker({
    position: {lat:17.3440 , lng: 78.5041  }, //Paigah Tombs  Coordinates
    map: map,
title: "Paigah Tombs",
icon: {
        url: "https://cdn-icons-png.flaticon.com/128/6735/6735694.png",
        scaledSize: new google.maps.Size(40, 40) // Set the dimensions you want here
    }
});
    // Add more markers as needed

    // Add event listeners to change content on marker hover
hussainSagarMarker.addListener('mouseover', () => {
document.getElementById('image1').innerHTML = `
<img src="https://www.holidify.com/images/cmsuploads/compressed/1280px-Hussain_Sagar_lake2C_Hyderabad_20230309153045.jpg" alt="Hussain Sagar" class="linked-image">
<img src="data:image/jpeg;base64,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" alt="Hussain Sagar" class="linked-image">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlp8pr13c929p2vTpCNaWHK3Hm7vq_OfaXdw&usqp=CAU" alt="Hussain Sagar" class="linked-image">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcebtJKEVNWyI6Jwrx6rIoIXULpjVfiF8jZA&usqp=CAU" alt="Hussain Sagar" class="linked-image">
`;

document.getElementById('image2').innerHTML = `
<img src="https://ak.jogurucdn.com/media/image/p14/place-2017-05-23-9-9c4e3058d2b75cfb719548cc149d403a.jpg" alt="Image 1" class="linked-image">
<img src="https://yometro.com/images/places/hussain-sagar-lake.jpg" alt="Image 2" class="linked-image">
<img src="https://cdn.siasat.com/wp-content/uploads/2022/11/Hussain-Sagar-1.jpg" alt="Image 3" class="linked-image"> 
<img src="https://cdn.telanganatoday.com/wp-content/uploads/2022/07/Hussain-sagar-831x450-1.jpg" alt="Image 3" class="linked-image"> 
 `;

document.getElementById('text1').innerHTML = '<p>Hussain Sagar</p>';
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>Hussain Sagar is a majestic man-made lake designed in the shape of a necklace. The lake offers stunning views of the huge Buddha statue that stands in the middle of the water body.</p>';
document.getElementById('textbox-content').textContent = 'Hussain Sagar';
});


    birlaMandirMarker.addListener('mouseover', () => {

document.getElementById('image1').innerHTML = `
<img src="https://lh3.googleusercontent.com/places/ABKp1IoTgUHQX0cSNnf0GyvqKshwgkqUy5xEAAOtR0Tj4lXU6Ps2Op12fcdtt4a_0qzI7xUeGhs5uPelW5Tf1DmkJ_40b_Ov2CmSlSU=s500-w500" alt="Image 1" class="linked-image">
<img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/56/ff/7a/photo0jpg.jpg?w=1200&h=-1&s=1" alt="Image 2" class="linked-image">
<img src="https://www.nativeplanet.com/photos/412x309x100/2012/12/_13546033780.jpg" alt="Image 3" class="linked-image"> 
<img src="https://i.pinimg.com/originals/b6/d9/aa/b6d9aa11208027a116ccce402f2abc10.jpg" alt="Image 3" class="linked-image"> 
 `;
      
document.getElementById('image2').innerHTML = `
<img src="https://i0.wp.com/familytunes.co.in/wp-content/uploads/2021/02/img_20200113_185918948.jpg?fit=3072%2C4096&ssl=1" alt="Image 1" class="linked-image">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbIyJOrIMj-Aok0tg0lbaVfSlhrbth7pXFngjHAauKz5GdKCARwz3Glpcv-cBMUcmAZ7A&usqp=CAU" alt="Image 2" class="linked-image">
<img src="https://upload.wikimedia.org/wikipedia/commons/d/d8/BirlaMandir.jpg?20090909000148" alt="Image 3" class="linked-image"> 
<img src="https://2.bp.blogspot.com/-Gtt8BjfCq00/VqOojb9NI0I/AAAAAAAAPJY/jqnwzpCBFMI/s1600/Hyderabad_BirlaMandir%2B%25284%2529.JPG" alt="Image 3" class="linked-image"> 
 `;
      
document.getElementById('text1').innerHTML = '<p>Birla Mandir</p>';
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>Birla Mandir, is dedicated to Lord Venkateshwara, the presiding deity of the famous temple in Tirumala Tirupati. Located atop a 280-foot-high hill called Naubat Pahad, the temple is a beautiful modern shrine with exquisite architecture.</p>';
document.getElementById('textbox-content').textContent = 'Birla Mandir';
    });

charminarMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
        <img src="https://thumbs.dreamstime.com/b/famous-hyderabad-landmark-charminar-india-world-built-quli-qutb-shah-th-century-128124667.jpg" alt="Image 1" class="linked-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d1/Charminar-Pride_of_Hyderabad.jpg" alt="Image 2" class="linked-image">
        <img src="https://assets.thehansindia.com/h-upload/2023/04/21/1347928-charm.webp" alt="Image 3" class="linked-image"> 
  <img src="https://images.unsplash.com/photo-1558202071-a0891de573ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2hhcm1pbmFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="Image 3" class="linked-image"> 
 `;
    document.getElementById('text1').innerHTML = '<p>Charminar</p>';
document.getElementById('image2').innerHTML = `
        <img src="https://media.istockphoto.com/id/173866847/photo/charminar.webp?b=1&s=170667a&w=0&k=20&c=y-gJNttzjPSSDRuiHsEJeRSN29cBIStIQrowZlr039E=" alt="Image 1" class="linked-image">
        <img src="https://media.istockphoto.com/id/535518265/photo/charminar-architecture.jpg?s=612x612&w=0&k=20&c=YmuFTkIURBQZ4J6sMOJgouMuKopYtioSk6yBuxth-h4=" alt="Image 2" class="linked-image">
        <img src="https://media.istockphoto.com/id/185617540/photo/architectural-details-of-400-year-old-charminar-hyderabad-india.jpg?s=612x612&w=0&k=20&c=djX9gPfFjx5dGG7KsxsqQbG7DYLh6AdLb5L0px_u0c8=" alt="Image 3" class="linked-image"> 
  <img src="https://media.istockphoto.com/id/1715187600/photo/charminar.jpg?s=612x612&w=0&k=20&c=VvLSbRUoiW459xJKX85oBSbffNvluunoW9HkDduR8lA=" alt="Image 3" class="linked-image"> 

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>Charminar is, undoubtedly, the most famous landmark in Hyderabad. Built over 400 years ago, this iconic four-storied structure built in typical Islamic style houses a mosque on the top floor. Though there are a number of stories related to the construction of this monument, the most widely believed one is that Charminar was built to commemorate the eradication of cholera.</p>';

});
golcondaFortMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
        <img src="https://www.hyderabadzone.com/wp-content/uploads/2019/09/Golconda-Fort.jpg" alt="Image 1" class="linked-image">
        <img src="https://hyderabadtourpackage.in/images/places-to-visit/golconda-fort-hyderabad-entryfee-timings-tour-package-header.jpg" alt="Image 2" class="linked-image">
 <img src="https://3.bp.blogspot.com/-y62A9HnXRr4/U7f8wnsQFeI/AAAAAAAABq4/bxFT15Bc1Xk/s1600/Golconda-Fort.jpg" alt="Image 3" class="linked-image">
        <img src="https://s3.youthkiawaaz.com/wp-content/uploads/2020/06/27135118/Golconda-Fort-1.jpg" alt="Image 4" class="linked-image">

 `;
document.getElementById('text1').innerHTML = '<p>Golconda Fort</p>';


document.getElementById('image2').innerHTML = `
     <img src="https://live.staticflickr.com/5787/22700459837_221ebc2ebd_b.jpg" alt="Image 1" class="linked-image">
        <img src="https://lp-cms-production.imgix.net/2019-06/5567674f4890bf91e90f80af7c9e5f5b-golconda-fort.jpg" alt="Image 2" class="linked-image">
 <img src="https://upload.wikimedia.org/wikipedia/commons/1/1c/The_geometry_-_Interiors_of_the_Golconda_fort.jpg" alt="Image 3" class="linked-image">
        <img src="https://www.tulipmag.com/wp-content/uploads/2016/07/Golconda-Fort-Inside.jpg" alt="Image 4" class="linked-image">



 `;
  document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>The medieval fort overlooks the city and remains a testimony to the grandeur of the bygone era, even though the fort complex is in ruins now. Apart from its architectural beauty and historical significance, Golconda Fort is also associated with some of the most famous diamonds in the world.</p>';



    });

chowmahallaPalaceMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://th-i.thgim.com/public/society/history-and-culture/article19728045.ece/alternates/FREE_1200/hy2spaceschowmahalla4" alt="Image 1" class="linked-image">
        <img src="https://i0.wp.com/imagewrighter.com/wp-content/uploads/2020/02/Chowmahalla-1-17.jpg?fit=1600%2C1067&ssl=1" alt="Image 2" class="linked-image">
 <img src="https://i0.wp.com/imagewrighter.com/wp-content/uploads/2020/03/Chowmahalla-3-12.jpg?fit=1600%2C1067&ssl=1" alt="Image 3" class="linked-image">
        <img src="https://i.pinimg.com/736x/0c/a1/96/0ca196a383622a4f7e3f749ada4af23e.jpg" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p>Chowmahalla Palace </p>';

document.getElementById('image2').innerHTML = `

 <img src="https://i0.wp.com/singhruby.com/wp-content/uploads/2017/11/2017-11-05-03.09.17-1.jpg" alt="Image 1" class="linked-image">
        <img src="https://2.bp.blogspot.com/-igGA_zwQo44/WGi3T89ZdXI/AAAAAAAAJB8/z5-Sj0vwbhAU9jaH7HvI66DFxxZkqftgQCLcB/w1200-h630-p-k-no-nu/1.jpg" alt="Image 2" class="linked-image">
 <img src="https://th-i.thgim.com/public/society/history-and-culture/8qgmbr/article26030808.ece/alternates/LANDSCAPE_1200/hy18Chowmahalla" alt="Image 3" class="linked-image">
        <img src="https://i.pinimg.com/736x/73/25/c6/7325c6999d05a17083d6f56fd36e0eef.jpg" alt="Image 4" class="linked-image">

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>Located near Charminar, the Chowmahalla Palace is a complex of four palaces that served as one of the residences of the Nizams of Hyderabad. A visit to the magnificent palace will let you experience the grandeur of the Nizams and their lavish way of life.</p>';

    });

qutubShahiTombsMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://indiatourismtravel.files.wordpress.com/2011/02/qutubshahi-786502.jpg" alt="Image 1" class="linked-image">
        <img src="https://img.freepik.com/premium-photo/qutb-shahi-tombs-mosques-built-by-various-kings-qutb-shahi-dynasty-hyderabad-india_7954-3383.jpg?w=2000" alt="Image 2" class="linked-image">
 <img src="https://www.civilsocietyonline.com/static/media/static/2021/03/26/cities.869x568.jpg" alt="Image 3" class="linked-image">
        <img src="https://static.the.akdn/53832/1652877409-navin_sigamany_2.jpg?w=1800&auto=format" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p> Qutub Shahi Tombs</p>';

document.getElementById('image2').innerHTML = `

 <img src="https://upload.wikimedia.org/wikipedia/commons/4/4f/Qutb_Shahi_tombs_-_Inner_view.jpg" alt="Image 1" class="linked-image">
        <img src="https://th-i.thgim.com/public/news/cities/Hyderabad/41sujl/article35881245.ece/alternates/LANDSCAPE_1200/hy13qutbshahi" alt="Image 2" class="linked-image">
 <img src="https://imgmedia.lbb.in/media/2019/02/5c739b2ee2b8ee2b09d33f12_1551080238205.jpg" alt="Image 3" class="linked-image">
        <img src="https://i0.wp.com/imagewrighter.com/wp-content/uploads/2020/03/Qutb-Shahi-Tombs-3.jpg?fit=1600%2C1067&ssl=1" alt="Image 4" class="linked-image">

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>The Qutub Shahi Tombs are located in the Ibrahim Bagh, close to the famous Golconda Fort in Hyderabad, India. They contain the tombs and mosques built by the various kings of the Qutub Shahi dynasty. The galleries of the smaller tombs are of a single storey while the larger ones are two storied.</p>';
    });

TajFalaknumaPalaceMarker .addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8uMKjvgheSeUFGLv6ClKXcodDUbQN8ST0rEk-aqqbxWlw2QbIRn1lEdqidm3-ZbYlJYQ&usqp=CAU" alt="Image 1" class="linked-image">
        <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/29/08/3c/ec/exterior-day.jpg?w=700&h=-1&s=1" alt="Image 2" class="linked-image">
 <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/14/c8/76/98/one-of-best-stay-anywhere.jpg?w=1200&h=-1&s=1" alt="Image 3" class="linked-image">
        <img src="https://q-xx.bstatic.com/xdata/images/hotel/max500/139528193.jpg?k=3b74e2571229dfbcd24f976cbe2c368a01d6aa4ca25894b87a64b5c3a7478781&o=" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p>Taj Falaknuma Palace  </p>';

document.getElementById('image2').innerHTML = `

 <img src="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Falaknuma_Palace/images/gallery/se_27654517-H1-Falaknuma-003-3x2.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg" alt="Image 1" class="linked-image">
        <img src="https://cdn.audleytravel.com/1050/750/79/420378-games-room-at-taj-falaknuma-palace-hyderabad.webp" alt="Image 2" class="linked-image">
 <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201508/188-189_escape-9_647_081315125702.jpg?VersionId=EERj7mR1IRrMSYmmoyKgh.aKtd2C847y&size=690:388" alt="Image 3" class="linked-image">
        <img src="https://ik.imgkit.net/3vlqs5axxjf/external/https://www.cfmedia.vfmleonardo.com/imageRepo/1/0/27/654/573/Falaknuma-004_O.jpg?tr=w-940%2Ch-529%2Cfo-auto%2Cdi-ami-fallback.png" alt="Image 4" class="linked-image">

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>Perched 609 Metres above sea level is Taj Falaknuma Palace, a jewel amongst the clouds. Built in 1894, it is the former palace of the Nizam, rumoured to be the richest man in the world at one time. Overlooking the twinkling City of Pearls, this enchanting palace hotel in Hyderabad exudes romance and grandeur that take one back to when the Nizam ruled Hyderabad. </p>';

    });

meccaMasjidMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://static.toiimg.com/photo/38130176.cms" alt="Image 1" class="linked-image">
        <img src="https://www.tripiwiki.com/images/places/uploads/Makkah-Masjid78045.jpg" alt="Image 2" class="linked-image">
 <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/68000/68354-Mecca-Masjid.jpg" alt="Image 3" class="linked-image">
        <img src="https://media.istockphoto.com/id/508107988/photo/macca-kabe.jpg?s=612x612&w=0&k=20&c=i8Aib0jxwst8VKLta6ayIlhbDBEd_dZ8-gnrVmG0pyY=" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p>Mecca Masjid </p>';

document.getElementById('image2').innerHTML = `

 <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/68000/68049-Hyderabad-And-Vicinity.jpg" alt="Image 1" class="linked-image">
        <img src="https://static.toiimg.com/thumb/msid-24924501,width=1200,height=900/24924501.jpg" alt="Image 2" class="linked-image">
 <img src="https://1.bp.blogspot.com/-7OCMN66vAYU/WS9sqaUEbEI/AAAAAAAAAK0/rXtbi1kUfhQ67oJL0dVeAKyVdzIpYbV7gCLcB/s1600/Prayer-hall-inside-Mecca-Masjid-Hyderabad.jpg" alt="Image 3" class="linked-image">
        <img src="https://i.pinimg.com/474x/a2/af/21/a2af211207d6de87eab8fe45f2b1158c.jpg" alt="Image 4" class="linked-image">

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>Mecca Masjid in Hyderabad is one of the oldest and largest mosques in the city. Commissioned in 1614, it was built through the efforts of by Muhammad Quli Qutub Shah, however, the construction saw completion only in the year 1694. Together with the Chowmahalla Palace, Laad Bazaar, and Charminar, the mosque forms the four very important heritage attractions in the city.</p>';

    });

lumbiniParkMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res70/68000/68404-Lumbini-Park.jpg" alt="Image 1" class="linked-image">
        <img src="https://ffo.gov.in/uploads/location_photos/Lumbini.jpg" alt="Image 2" class="linked-image">
 <img src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/17/40/5e/79/path-lumbini-park.jpg?w=1200&h=1200&s=1" alt="Image 3" class="linked-image">
        <img src="https://live.staticflickr.com/8521/8474917271_f9d7bf0343_b.jpg" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p>Lumbini Park </p>';

document.getElementById('image2').innerHTML = `

 <img src="https://live.staticflickr.com/7008/6487812213_1193550aae_b.jpg" alt="Image 1" class="linked-image">
        <img src="https://www.sakshi.com/sites/default/files/gallery_images/2023/02/10/Musical%20Fountain%20at%20Lumbini%20Park%20Hyderabad-1.jpg" alt="Image 2" class="linked-image">
 <img src="https://photos.smugmug.com/India/Andhra-Pradesh/Park-Lake/Lumbini-Park-Hussain-Sagar-2/i-fnPTBTV/0/cb1bd2e0/XL/DSC_2587-XL.jpg" alt="Image 3" class="linked-image">
        <img src="https://www.fabhotels.com/blog/wp-content/uploads/2018/10/1000X650-35.jpg" alt="Image 4" class="linked-image">

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>Lumbini Park is a place that is regularly frequented by the lovebirds of the city. The lovely ambiance, the calmness, and the cool breeze blowing from the lake make this place a lovely spot</p>';

    });

salarJungMuseumMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://www.tourmyindia.com/blog//wp-content/uploads/2018/04/849.jpg" alt="Image 1" class="linked-image">
        <img src="https://englishtribuneimages.blob.core.windows.net/gallary-content/2020/11/2020_11$largeimg_1009766142.jpeg" alt="Image 2" class="linked-image">
 <img src="https://th-i.thgim.com/public/life-and-style/article19594338.ece/alternates/FREE_1200/HYM01SALAR" alt="Image 3" class="linked-image">
        <img src="https://assets.thehansindia.com/h-upload/2023/04/28/1348904-sjm.webp" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p>Salar Jung Museum </p>';

document.getElementById('image2').innerHTML = `

 <img src="https://www.salarjungmuseum.in/images/European%20Clock/1%20(1).jpg" alt="Image 1" class="linked-image">
        <img src="https://wallpapers.com/images/hd/hyderabad-salar-jung-museum-iin8o3jg1gl5c2zr.jpg" alt="Image 2" class="linked-image">
 <img src="https://www.searchhyderabad.com/wp-content/uploads/2023/06/Centre-of-Attraction-in-Hyderabad.jpg" alt="Image 3" class="linked-image">
        <img src="https://www.hisour.com/wp-content/uploads/2018/03/Veiled-Rebecca-Salar-Jung-Museum.jpg" alt="Image 4" class="linked-image">

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>Salar Jung Museum takes pride in being one of the three National Museums in the country. The rich and diverse collection at the museum includes paintings, sculptures, ceramics, textiles, carvings, carpets, metallic artifacts, furniture, and clocks from various countries of the world. One of the world’s largest personal collections, it also has Aurangzeb’s sword and a wardrobe of Tipu Sultan among its various precious exhibits. </p>';
    });

ShilparamamMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Entrance_view_of_Shilparamam_Jaatara_1.jpg/1200px-Entrance_view_of_Shilparamam_Jaatara_1.jpg" alt="Image 1" class="linked-image">
        <img src="https://travelsnwrite.com/wp-content/uploads/2022/03/Shilparamam.jpg" alt="Image 2" class="linked-image">
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSa9F_Ydax6ateRtSkWAmY2K5LcFEGUo4jEQg&usqp=CAU" alt="Image 3" class="linked-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFuSSAL87DfF4xs6Ypq8SGgQBO2MWIYIn6Kg&usqp=CAU" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p>Shilparamam </p>';

document.getElementById('image2').innerHTML = `

 <img src="https://www.hyderabadtourism.travel/images/tourist-places/shilparamam-hyderabad/shilparamam-hyd.jpg" alt="Image 1" class="linked-image">
        <img src="https://1.bp.blogspot.com/-YMmD4IL3wA8/XUBZ2QTNVVI/AAAAAAAATXI/QISYQ9781BYvbIh9_90WqqwDs9v3L_7iQCLcBGAs/s1600/Ganesha%2Bscupture%2Bat%2BShilparamam%2BArts%2Band%2BCrafts%2BVillage.jpg" alt="Image 2" class="linked-image">
 <img src="https://1.bp.blogspot.com/-s3fkyLYd9f0/XUBaXmolAqI/AAAAAAAATXk/W4Xqaeh-FUwyRREQ-d2mv9kcBgRTF94rACLcBGAs/s1600/Embroidered%2Bdresses%2Bat%2BShilparamam%2Bin%2BHyderabad.jpg" alt="Image 3" class="linked-image">
        <img src="https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Shilparamam-1.jpg" alt="Image 4" class="linked-image">

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>Shilparamam is an arts and crafts village located in Madhapur, Hyderabad, Telangana, India. The village was conceived with an idea to create an environment for the preservation of traditional Indian crafts. There are ethnic festivals round the year.</p>';

    });

ramojiFilmCityMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://hyderabadtourpackage.in/images/places-to-visit/ramoji-film-city-hyderabad-entryfee-timings-tour-package-header.jpg" alt="Image 1" class="linked-image">
        <img src="https://thumbs.dreamstime.com/b/scenic-view-colourful-movie-set-ramoji-film-city-hyderabad-number-pillars-beautifully-designed-walls-63683798.jpg?w=768" alt="Image 2" class="linked-image">
 <img src="https://thumbs.dreamstime.com/b/rocky-hill-eureka-building-ramoji-film-city-showcasing-man-made-structure-together-nature-40045327.jpg?w=768" alt="Image 3" class="linked-image">
        <img src="https://thumbs.dreamstime.com/b/ramoji-film-city-india-located-hyderabad-spread-over-acres-largest-integrated-telangana-has-been-certified-118120891.jpg?w=768" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p>Ramoji Film City </p>';

document.getElementById('image2').innerHTML = `

 <img src="https://thumbs.dreamstime.com/b/tv-soap-programme-set-ramoji-film-city-colourful-beautifully-lit-popular-mythological-serial-hyderabad-63683820.jpg?w=768" alt="Image 1" class="linked-image">
        <img src="https://thumbs.dreamstime.com/b/bahubali-film-set-ramoji-studio-amusement-park-hyderabad-india-dummy-buildings-shooting-135583675.jpg?w=768" alt="Image 2" class="linked-image">
 <img src="https://thumbs.dreamstime.com/b/amuesement-ride-ramoji-film-city-hyderabad-india-located-spread-over-acres-largest-integrated-telangana-has-135924825.jpg?w=768" alt="Image 3" class="linked-image">
        <img src="https://thumbs.dreamstime.com/b/ramoji-film-city-hyderabad-inside-view-dummy-buildings-film-shooting-garden-site-seeing-ramoji-film-city-amusement-135828897.jpg?w=768" alt="Image 4" class="linked-image">

 `;document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p> Ramoji Film City is one of the most attractive family destinations in Hyderabad. A one-of-its-kind attraction, it holds the distinction of being the largest studio complex in the world. The film city has been featured in a number of Indian movies. Even the blockbuster movie Bahubali was extensively filmed here.</p>';

    });

nehruZoologicalParkMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://img.veenaworld.com/wp-content/uploads/2021/05/Zoo-Park-Hyderabad-Timings-Ticket-Price-How-to-Visit.jpg" alt="Image 1" class="linked-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Hyderabad_zoo.jpg/640px-Hyderabad_zoo.jpg" alt="Image 2" class="linked-image">
 <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/75000/75524-Nehru-Zoological-Park.jpg" alt="Image 3" class="linked-image">
        <img src="https://static.toiimg.com/thumb/msid-71344700,width-1280,height-720,resizemode-4/71344700.jpg" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p>Nehru Zoological Park </p>';

document.getElementById('image2').innerHTML = `

 <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Nehru-Zoological-Park-cover_10th-Dec-400x229.jpg" alt="Image 1" class="linked-image">
        <img src="https://a.travel-assets.com/findyours-php/viewfinder/images/res40/75000/75514-Nehru-Zoological-Park.jpg" alt="Image 2" class="linked-image">
 <img src="https://static.toiimg.com/thumb/msid-58475202,width-550,height-433/58475202.jpg" alt="Image 3" class="linked-image">
        <img src="https://3.bp.blogspot.com/-j1bF1OLhvDQ/TWZzViB4lfI/AAAAAAAAAA4/CazunKwma-A/s1600/toytrain-729933.jpg" alt="Image 4" class="linked-image">

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>Often referred to as Hyderabad Zoo, the Nehru Zoological Park is home to a rich assortment of animals, birds, and reptiles. Among the prime attractions of this sprawling 380-acre park are the Asiatic Lion, Indian Rhino, Bengal Tiger, Indian elephant, panther, python,  and antelopes. Safari trips within the park are sure to amuse you. </p>';

    });

laadBazarMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://www.holidify.com/images/cmsuploads/compressed/250614-ci-laad-bazaar-charminar-hyderabad-india-11_20180205200239_20180806160227.jpg" alt="Image 1" class="linked-image">
        <img src="https://www.hyderabadtourism.travel/images/tourist-places/lad-bazar-hyderabad/lad-bazar-in-charminar.jpg" alt="Image 2" class="linked-image">
 <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/9c/3c.jpg" alt="Image 3" class="linked-image">
        <img src="https://cdn.getyourguide.com/img/tour/5d7c983118f7d.jpeg/146.jpg" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p> Laad Bazar </p>';

document.getElementById('image2').innerHTML = `

 <img src="https://www.hyderabadzone.com/wp-content/uploads/2022/09/Laad-Bazaar-in-Hyderabad.jpg" alt="Image 1" class="linked-image">
        <img src="https://cultureandheritage.org/wp-content/uploads/2021/05/xx-1.jpg" alt="Image 2" class="linked-image">
 <img src="https://i0.wp.com/azureskyfollows.com/wp-content/uploads/2017/10/26-hyderabad-laad-bazaar-pathhargatti-markets-karnataka-india-azure-sky-follows-tania.jpeg?resize=960%2C640" alt="Image 3" class="linked-image">
        <img src="https://www.bestbus.in/assets/images/tourist-attractions/Laad-Bazar.jpg" alt="Image 4" class="linked-image">

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>This grand bazaar provides visitors with a glimpse of bygone eras as they have existed since the Nizams and Qutub Shahis. “Laad” means lacquer, a prominent material used to craft vibrant bangles. Laad Bazaar is a haven for shopping enthusiasts, and they can find unique and stunning collections of pearls, bangles, semi-precious jewellery, and embroidered saris.</p>';

    });

chilkurBalajiMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://www.educba.com/academy/wp-content/uploads/2023/01/Chilkur-Balaji-Temple.jpg" alt="Image 1" class="linked-image">
        <img src="https://cdn.s3waas.gov.in/s3addfa9b7e234254d26e9c7f2af1005cb/uploads/bfi_thumb/2020060639-oqm6ksfk16zwgyk5d9osh44wgy8kdductbmg5sojq8.jpg" alt="Image 2" class="linked-image">
 <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYCGgFYJG9A70qiTDkDSiVkChyBTcW4EEZFQ&usqp=CAU" alt="Image 3" class="linked-image">
        <img src="https://vedics.in/wp-content/uploads/2019/08/1-1.jpg" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p> Chilkur Balaji Temple</p>';

document.getElementById('image2').innerHTML = `

 <img src="https://i0.wp.com/hindupad.com/wp-content/uploads/2015/02/Chilkur-Balaji-Temple-Hyderabad.jpg?fit=1600%2C1200&ssl=1" alt="Image 1" class="linked-image">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAt4njM6FZDAcE7yyURmJObT5Fx-eMH8rTpUCzMFkYraMIYBiNoZc8Aro960SRM8IuQ7w&usqp=CAU" alt="Image 2" class="linked-image">
 <img src="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/2018/05/02180131/Chilkurbalaji.jpg" alt="Image 3" class="linked-image">
        <img src="https://i.pinimg.com/originals/b1/02/4b/b1024b511926a7184166db0864c07c41.jpg" alt="Image 4" class="linked-image">

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>The Chilkur Balaji Temple in Hyderabad holds immense religious significance. Located right beside the Osman Sagar Lake, this 500-year-old shrine is dedicated to Lord Balaji Venkateswara. The temple is considered an alternative shrine to the world-renowned Tirumala temple.</p>';

    });

paigahTombsMarker.addListener('mouseover', () => {
    document.getElementById('image1').innerHTML = `
  <img src="https://www.holidify.com/images/cmsuploads/compressed/Paigah_Tombs_01_20180806200024_20180806200030.jpg" alt="Image 1" class="linked-image">
        <img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Paigah_Tombs.jpg" alt="Image 2" class="linked-image">
 <img src="https://indiamosques.files.wordpress.com/2020/04/90565346_106855780963975_1758200783091793920_o.jpg" alt="Image 3" class="linked-image">
        <img src="https://assets.architecturaldigest.in/photos/63f67167bf48fba5e8a4bba4/master/w_1600%2Cc_limit/PaigahTombs_139.jpg" alt="Image 4" class="linked-image">

 `;
 document.getElementById('text1').innerHTML = '<p>Paigah Tombs </p>';

document.getElementById('image2').innerHTML = `

 <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Paigah_Tombs_Roof.jpg/1024px-Paigah_Tombs_Roof.jpg" alt="Image 1" class="linked-image">
        <img src="https://www.indiatourismguide.in/wp-content/uploads/2017/11/paigah-tombs4-300x222.jpeg" alt="Image 2" class="linked-image">
 <img src="https://static.toiimg.com/photo/37319418.cms" alt="Image 3" class="linked-image">
        <img src="https://static2.tripoto.com/media/filter/tst/img/66004/TripDocument/1589624854_img_0949.jpg" alt="Image 4" class="linked-image">

 `;
document.getElementById('text2').innerHTML = '<p>Inner images</p>';
document.getElementById('text3').innerHTML = '<p>Paigah Tombs or Maqhbara Shams al-Umara, are the tombs belonging to the nobility of Paigah family, who were fierce loyalists of the Nizams, served as statespeople, philanthropists and generals under and alongside them. The Paigah tombs are among the major wonders of Hyderabad State which known for their architectural excellence as shown in their laid mosaic tiles and craftsmanship work. </p>';

    });

    
   // Assuming you have created a Google Map instance called 'map'
    // Assuming you have created a Google Map instance called 'map'

document.getElementById('image1').innerHTML = `
<img src="https://static.wixstatic.com/media/11062b_039e90437d8146b49e915631b049f6ee~mv2.jpg/v1/fill/w_640,h_436,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/11062b_039e90437d8146b49e915631b049f6ee~mv2.jpg" alt="Image 1" class="linked-image">
<img src="https://image.telanganatoday.com/wp-content/uploads/2023/01/Reality_V_jpg--442x260-4g.webp?sw=412&dsz=442x260&iw=412&p=false&r=2.625" alt="Image 2" class="linked-image">
<img src="https://qph.cf2.quoracdn.net/main-qimg-3f6b4c1d84dc7cced9340602ed323daa-lq" alt="Image 3" class="linked-image"> 
<img src="https://assets.thehansindia.com/h-upload/2022/10/22/1317530-hyderabad.webp" alt="Image 4" class="linked-image"> 
 `;
      
document.getElementById('image2').innerHTML = `
<img src="https://cms.tstdc.in/fetch?payload=042e3401-06e5-4fcd-9ef7-2fd47490aad2.jpg" alt="Image 1" class="linked-image">
<img src="https://i.pinimg.com/564x/81/c5/33/81c533f3b897dc436cbeaed7aaa0579c.jpg" alt="Image 2" class="linked-image">
<img src="https://i.pinimg.com/originals/92/a1/21/92a121a0ab6698f7696d5275ca19c87d.jpg" alt="Image 3" class="linked-image"> 
<img src="https://www.revv.co.in/blogs/wp-content/uploads/2020/03/night-out-places-to-visit-in-hyderabad.jpg" alt="Image 4" class="linked-image"> 
 `;
      
document.getElementById('text1').innerHTML = '<p>Hyderabad</p>';
document.getElementById('text2').innerHTML = '<p></p>';
document.getElementById('text3').innerHTML = '<p>Hyderabad, city, Telangana state, south-central India. It is Telangana’s largest and most-populous city and is the major urban centre for all of south-central interior India. From 1956 to 2014 Hyderabad was the capital of Andhra Pradesh state, but, with the creation of Telangana from Andhra Pradesh in 2014, it was redesignated as the capital of both states.</p>';
document.getElementById('textbox-content').textContent = 'Birla Mandir';



    // Add listeners for other markers


}