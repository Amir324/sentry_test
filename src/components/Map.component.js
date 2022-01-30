import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function Map({lat, lng, text}){

    console.log({lat, lng})

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 1
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '50vh', width: '100%' }}>

            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
                center={{lat, lng}}
                zoom={1}
            >
                <AnyReactComponent
                    lat={lat}
                    lng={lng}
                    text="Bird location"
                />
            </GoogleMapReact>
        </div>
    );
}