import React from 'react';
import {View, Text} from 'react-native';

import Card from './Card';
import CardSection  from './CardSection';

const AlbumsDetail = (props) =>{
	return (
		<Card>
			<CardSection>
				<Text>{props.albumData.title}</Text>
			</CardSection>

			<CardSection>
				<Text>{props.albumData.title}</Text>
			</CardSection>

		</Card>

		);
}

export default AlbumsDetail;