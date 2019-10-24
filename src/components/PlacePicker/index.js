import React, { Component } from 'react'
import './index.css'
import TextField from '@material-ui/core/TextField';

import Leaflet from 'leaflet';
import { Map, TileLayer, Marker } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

import FormControl from '@material-ui/core/FormControl';
import Typography from '@material-ui/core/Typography';

Leaflet.Icon.Default.imagePath =
    '../node_modules/leaflet'

delete Leaflet.Icon.Default.prototype._getIconUrl;

Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

class PlacePicker extends Component {

    constructor(props) {
        super(props);
        this.onPointSelected = this.onPointSelected.bind(this)
        this.onInputChanged = this.onInputChanged.bind(this)
        this.onBlur = this.onBlur.bind(this)
        this.coordChanged = this.coordChanged.bind(this)

        // let coords = this.props.record[this.props.source];
        let coords = null;

        if ((coords === null || coords === undefined)) {
            this.state = { point: [55.7522200, 37.6155600] };
            this.coordChanged(this.state.point);
        }
        else {
            this.state = { point: [coords.latitude, coords.longtude] };
        }
    }

    coordChanged(point) {
       // this.props.input.onChange({ latitude: point[0], longtude: point[1] });
    }

    onPointSelected(data) {
        console.log(data)
        this.setState({ point: [data.latlng.lat, data.latlng.lng] }, this.coordChanged(this.state.point))
    }

    onInputChanged(e) {
        if (e.target.value.split(',').length === 2) {
            let lat, lon;
            lat = Number(e.target.value.split(',')[0]);
            lon = Number(e.target.value.split(',')[1]);

            if (!isNaN(lat) && !isNaN(lon)) {
                this.setState({ point: [lat, lon] })
            }
        }
    }

    onBlur() {
        this.coordChanged(this.state.point);
    }

    render() {
        return (
            <div>
                <FormControl style={{ width: '100%' }}>
                    <Map zoom={15}
                        minZoom={5}
                        style={{ width: '100%', height: '250px' }}
                        center={this.state.point}
                        onClick={this.onPointSelected}
                        attributionControl={true}
                        zoomControl={true}
                        doubleClickZoom={true}
                        scrollWheelZoom={true}
                        dragging={true}
                        animate={true}
                        easeLinearity={0.35}
                        ref={(x) => this.map = x}>
                        <TileLayer
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        />
                        <Marker position={this.state.point} />
                    </Map>
                </FormControl>
            </div>
        )
    }
}

export default PlacePicker;
