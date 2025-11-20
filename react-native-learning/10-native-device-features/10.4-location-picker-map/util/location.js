const GOOGLE_API_KEY = 'Aikdfdsafkjlsadfjsaddfasdfasdf'

export const getMapPreview = (lat, lng) => {
    const imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=400X200&maptype=roadmap&markers=color:red%7Clabel:S%7C${lat}${lng}&key=${GOOGLE_API_KEY}`;
    return imagePreviewUrl;
}