import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import FEATURE_NAME from './copy';
import POD_NAME from '../podCopy';
import SCREENS from '../../../screens';
import { AppStackScreen } from '../../../types/navigation';
import ORANGE_SCREENS from '../navigation/screens';
import NavigationService, { NavigationType } from '../../../services/navigationService';

const FeatureScreen: AppStackScreen<ORANGE_SCREENS.ORANGE_FEATURE_A> = ({ navigation }) => {
	const onClick = () => {
		NavigationService.navigateTo(navigation, SCREENS.APPLE_FEATURE_A, {}, NavigationType.NAVIGATE);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.heading}>{POD_NAME}</Text>
			<Text style={styles.subHeading}>{FEATURE_NAME}</Text>
			<TouchableOpacity onPressIn={onClick} style={styles.button}>
				<Text style={styles.heading}>GO TO APPLE FEATURE A</Text>
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
	subHeading: { fontStyle: 'italic', fontSize: 18, textAlign: 'center', marginTop: 16, color: 'black' },
	button: {
		marginTop: 16,
		alignSelf: 'center',
		backgroundColor: '#1af3bc',
		padding: 8,
		borderRadius: 8,
	},
});

export default FeatureScreen;
