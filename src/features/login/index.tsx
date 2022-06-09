import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppScreens } from '../types';

const LoginScreen: AppScreens = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Look How Far we have come!!</Text>

			<Text style={styles.subHeading}>You have successfully signed up, soon you'll have see login page too</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 8,
	},
	heading: { fontWeight: 'bold', fontSize: 20, textAlign: 'center' },
	subHeading: { fontStyle: 'italic', fontSize: 18, textAlign: 'center', marginTop: 16 },
});

export default LoginScreen;
