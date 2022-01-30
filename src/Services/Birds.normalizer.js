export function birdsNormalizer(item){

    return {
        image: item.image,
        lat: item.location.lat,
        lng: item.location.lng,
        name: item.name,
        sound: item.sound
    }
}