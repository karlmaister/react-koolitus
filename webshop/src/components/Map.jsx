import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import ChangeView from './ChangeView';
let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [2, -40],
});
L.Marker.prototype.options.icon = DefaultIcon;


function Map(props) {


    return (
        <div>


            <MapContainer className='map' center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} scrollWheelZoom={false}>
                <ChangeView center={props.mapCoordinaates.lngLat} zoom={props.mapCoordinaates.zoom} />
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"

                />
                <Marker position={[59.42192815888897, 24.793352013686896]}>
                    <Popup>
                        Ülemiste keskus. <br /> Avatud 9-20
                    </Popup>
                </Marker>
                <Marker position={[59.42713506856003, 24.723207833001165]}>
                    <Popup>
                        Kristiine keskus. <br /> Avatud 10-21
                    </Popup>
                </Marker>
                <Marker position={[58.3778125409, 26.73034625013]}>
                    <Popup>
                        Tasku keskus. <br /> Avatud 10-23
                    </Popup>
                </Marker>
            </MapContainer>
        </div>)
}


export default Map;

