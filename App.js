import React, { Fragment } from 'react';
import { Text, View, ScrollView, Image, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

// var Sound = require('react-native-sound');

import Sound from 'react-native-sound';

const soundList = [
	require('./assests/one.wav'),
	require('./assests/two.wav'),
	require('./assests/three.wav'),
	require('./assests/four.wav'),
	require('./assests/five.wav'),
	require('./assests/six.wav'),
	require('./assests/seven.wav'),
	require('./assests/eight.wav'),
	require('./assests/nine.wav'),
	require('./assests/ten.wav')
];

const playSound = (sound) => {
	console.log(sound);
	const whoosh = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
		if (err) {
			console.log('Unable to play the sound');
		}
	});

	whoosh.setVolume(10);
	setTimeout(() => {
		whoosh.play();
	}, 1000);


	whoosh.release();
};

const App = () => {
	return (
		<Fragment>
			<StatusBar style={{ background: 'black' }} />
			<ScrollView style={styles.container}>
				<Image style={styles.logo} source={require('./assests/logo.png')} />
				<View style={styles.gridContainer}>
					{soundList.map((sound) => (
						<TouchableOpacity
							key={sound}
							onPress={() => {
								playSound(sound);
							}}
							style={styles.box}
						>
							<Text style={styles.text}>{sound}</Text>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</Fragment>
	);
};

export default App;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'black'
	},
	logo: {
		alignSelf: 'center',
		marginTop: 15
	},
	gridContainer: {
		flex: 1,
		margin: 5,
		flexDirection: 'row',
		flexWrap: 'wrap',
		alignItems: 'flex-start',
		justifyContent: 'space-around'
	},
	box: {
		height: 110,
		alignItems: 'center',
		justifyContent: 'center',
		width: '46%',
		marginVertical: 6,
		backgroundColor: 'dodgerblue',
		borderRadius: 5
	},
	text: {
		fontSize: 25,
		color: 'white'
	}
});
