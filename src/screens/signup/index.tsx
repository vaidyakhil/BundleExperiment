import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SCREENS } from '../screen_list';
import { AppScreens } from '../types';

const SignUpScreen: AppScreens = ({ navigation }) => {
	const onSignUp = () => {
		navigation.navigate(SCREENS.LOGIN);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Hey Welcome, we are under development right now!</Text>

			<Text style={styles.subHeading}>Soon you will be able to signup with an awesome experience</Text>

			<TouchableOpacity onPress={onSignUp} style={styles.button}>
				<Text style={styles.buttonText}>SIGN UP</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 16,
		alignItems: 'center',
	},
	button: {
		justifyContent: 'center',
		padding: 8,
		alignItems: 'center',
		backgroundColor: '#000000',
		borderRadius: 8,
		marginTop: 32,
	},
	buttonText: {
		color: '#ffffff',
		textAlign: 'center',
	},
	heading: { fontWeight: 'bold', fontSize: 20, textAlign: 'center' },
	subHeading: { fontStyle: 'italic', fontSize: 18, textAlign: 'center', marginTop: 16 },
});

export default SignUpScreen;
