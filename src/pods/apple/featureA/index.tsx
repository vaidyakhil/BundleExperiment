import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AppStackScreen } from '../../../types/navigation';
import FEATURE_NAME from './copy';
import POD_NAME from '../podCopy';
import APPLE_SCREENS from '../navigation/screens';
import SCREENS from '../../../screens';
import NavigationService, { NavigationType } from '../../../services/navigationService';

const FeatureScreen: AppStackScreen<APPLE_SCREENS.APPLE_FEATURE_A> = ({ navigation }) => {
	const onClick = () => {
		NavigationService.navigateTo(
			navigation,
			SCREENS.ORANGE_FEATURE_A,
			{ configFeatureA: 'feature-A' },
			NavigationType.NAVIGATE
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>{POD_NAME}</Text>
			<Text style={styles.subHeading}>{FEATURE_NAME}</Text>
			<TouchableOpacity onPressIn={onClick} style={styles.button}>
				<Text style={styles.heading}>GO TO ORANGE FEATURE A</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 8,
	},
	heading: { fontWeight: 'bold', fontSize: 20, textAlign: 'center', color: 'black' },
	subHeading: {
		fontStyle: 'italic',
		fontSize: 18,
		textAlign: 'center',
		marginTop: 16,
		color: 'black',
	},
	button: {
		marginTop: 16,
		alignSelf: 'center',
		backgroundColor: '#1af3bc',
		padding: 8,
		borderRadius: 8,
	},
});

export default FeatureScreen;
