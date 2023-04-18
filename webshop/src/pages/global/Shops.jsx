import { useState } from 'react';
import Map from '../../components/Map';
import Button from '@mui/material/Button';


function Shops() {
	const [coordinaates, setCoordinates] = useState({ lngLat: [59.4378, 24.7574], zoom: 11 });


	return (<div>
		<Button onClick={() => setCoordinates({ lngLat: [58.94, 25.47], zoom: 7 })}>Kõik poed</Button>

		<Button onClick={() => setCoordinates({ lngLat: [59.4378, 24.7574], zoom: 11 })}>Kõik Tallinna poed</Button>
		<Button onClick={() => setCoordinates({ lngLat: [59.42192815888897, 24.793352013686896], zoom: 13 })}>Ülemiste</Button>
		<Button onClick={() => setCoordinates({ lngLat: [59.42713506856003, 24.723207833001165], zoom: 13 })}>Kristiine</Button>

		<Button onClick={() => setCoordinates({ lngLat: [58.3778125409, 26.73034625013], zoom: 13 })}>Tasku</Button>
		<Map mapCoordinaates={coordinaates} />
	</div>)
}


export default Shops;
