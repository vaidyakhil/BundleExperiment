import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppStackScreen } from '../../../types/navigation';
import FEATURE_NAME from './copy';
import POD_NAME from '../podCopy';
import LICHI_SCREENS from '../navigation/screens';

const FeatureScreen: AppStackScreen<LICHI_SCREENS.LICHI_FEATURE_C> = () => {
	return (
		<View style={styles.container}>
			<Text style={styles.heading}>{POD_NAME}</Text>
			<Text style={styles.subHeading}>{FEATURE_NAME}</Text>
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
});

export default FeatureScreen;
