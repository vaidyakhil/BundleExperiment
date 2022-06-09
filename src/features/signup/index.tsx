import React, { useEffect } from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SCREENS } from '../../screens/screens';
import { ArrayUtils } from '../../utils';
import { AppScreens } from '../types';

const DEFAULT_WARNING_TIME = 2000;

const DEFAULT_SUBHEADING = 'Soon you will be able to signup with an awesome experience';
const UNDER_DEVELOPMENT = 'Oh, and we are not done with the signup flow yet so please wait for sometime';

const SignUpScreen: AppScreens = ({ navigation }) => {
	const [showUnderDevelopment, setShowUnderDevelopment] = React.useState<boolean>(false);

	const onSignUp = () => {
		console.log('onSignUp: ', ArrayUtils.isEmpty([]));
		if (Platform.OS === 'ios') {
			setShowUnderDevelopment(true);
			return;
		}
		navigation.navigate(SCREENS.LOGIN);
	};

	useEffect(() => {
		console.log('use effect trigged');
		if (showUnderDevelopment) {
			setTimeout(() => {
				setShowUnderDevelopment(false);
			}, DEFAULT_WARNING_TIME);
		}
	}, [showUnderDevelopment]);

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>Hey Welcome, we are under development right now!</Text>

			<Text style={styles.subHeading}>{showUnderDevelopment ? UNDER_DEVELOPMENT : DEFAULT_SUBHEADING}</Text>

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
