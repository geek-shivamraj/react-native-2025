/**
 *  - Temporary adding hardcoded values to handle the empty location/address in case we don't have API KEY.
 */
export class Place {
    constructor(title, imageUri, location) {
        this.title = title;
        this.imageUri = imageUri;
        // this.address = location.address;
        // this.location = {lat: location.lat, lng: location.lng}; // {lat: 0.1412, lng: 127.121 }
        this.address='2050 Buchanan St, San Francisco, CA 94115, USA';
        this.location= {lat: 0.1412, lng: 127.121 };
        this.id = new Date().toString() + Math.random().toString();
    }
}