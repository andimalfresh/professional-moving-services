import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapComponent extends Component {
  static defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33
    },
    zoom: 11
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div className="mapComponent">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCncd0oUPIbFnJYwh0NjODmRuA8PrmR9iI" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={84.372066}
            lng={30.43918}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapComponent;