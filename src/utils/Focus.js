import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { colors } from './colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = () => {
	const [subject, setSubject] = useState(null);

	//TODO remove when finish
	console.log('subject: ', subject);

	return (
		<View style={styles.container}>
			<View style={styles.inputContainer}>
				<TextInput
					style={styles.textInput}
					onChangeText={setSubject}
					label="What would you like to focus on?"
				/>
				<View style={styles.button}>
					<RoundedButton title="+" size={50} />
				</View>
			</View>
		</View>
	);
};
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	button: {
		justifyContent: 'center',
	},
	textInput: {
		flex: 1,
		marginRight: 10,
	},
	inputContainer: {
		padding: 25,
		justifyContent: 'top',
		flexDirection: 'row',
	},
	text: {
		color: colors.white,
	},
});
