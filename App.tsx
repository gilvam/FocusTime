import * as React from 'react';
import { Platform, SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-paper';
import { colors } from './src/utils/colors';

export default function App() {
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput label="What would you like to focus on?" />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
		backgroundColor: colors.darkBlue,
	},
	inputContainer: {
		flex: 0.5,
		padding: 25,
		justifyContent: 'flex-start',
		backgroundColor: '#aaa',
	},
	text: {
		color: colors.white,
	},
});
