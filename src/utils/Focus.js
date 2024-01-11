import React from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from './colors';
import { TextInput } from 'react-native-paper';

export const Focus = () => (
	<View style={styles.container}>
		<View style={styles.inputContainer}>
			<TextInput label="What would you like to focus on?" />
		</View>
	</View>
);

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	inputContainer: {
		flex: 0.5,
		padding: 25,
		justifyContent: 'flex-start',
	},
	text: {
		color: colors.white,
	},
});
