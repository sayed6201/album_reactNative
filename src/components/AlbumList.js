import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

import AlbumDetail from './AlbumDetail';

//class based component....
class AlbumList extends Component{

	state = { albums: [] };

//life cycle method, when component is load it is called
	componentWillMount(){
		// console.log('componentWillMount in action');
		axios.get('http://rallycoding.herokuapp.com/api/music_albums')
		.then(response => 
			//setState update the component state..
			this.setState({ albums: response.data })
			);
	}

	renderAlbums(){
		return this.state.albums.map(
			album => 
			<AlbumDetail key={album.title} albumData={album} />
			)
	}

	render(){

		return (
			<View>
				{ this.renderAlbums() }
			</View>
		);
	}
}

export default AlbumList;