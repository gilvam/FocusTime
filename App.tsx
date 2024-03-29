import * as React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/utils/Focus';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<Focus />
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		backgroundColor: colors.darkBlue,
	},
	text: {
		color: colors.white,
	},
});
