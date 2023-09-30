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
    });

    const birlaMandirMarker = new google.maps.Marker({
        position: { lat: 17.4062, lng: 78.4691 }, // Birla Mandir coordinates
        map: map,
    });

    // Add more markers as needed

    // Add event listeners to change content on marker hover
    hussainSagarMarker.addListener('mouseover', () => {
        // Change the content of your image and text containers here for Hussain Sagar
        document.getElementById('image1').innerHTML = '<img src="https://www.holidify.com/images/cmsuploads/compressed/1280px-Hussain_Sagar_lake2C_Hyderabad_20230309153045.jpg" alt="Hussain Sagar" class="linked-image">';
        document.getElementById('text1').innerHTML = '<p>Hussain Sagar</p>';
    });

    birlaMandirMarker.addListener('mouseover', () => {
        // Change the content of your image and text containers here for Birla Mandir
        document.getElementById('image1').innerHTML = '<img src="https://lh3.googleusercontent.com/places/ABKp1IoTgUHQX0cSNnf0GyvqKshwgkqUy5xEAAOtR0Tj4lXU6Ps2Op12fcdtt4a_0qzI7xUeGhs5uPelW5Tf1DmkJ_40b_Ov2CmSlSU=s500-w500" alt="Birla Mandir" class="linked-image">';
        document.getElementById('text1').innerHTML = '<p>Birla Mandir</p>';
    });
    // Assuming you have created a Google Map instance called 'map'
    // Assuming you have created a Google Map instance called 'map'






    // Add listeners for other markers
}
