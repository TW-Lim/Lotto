import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Number from './Number';
import PropTypes from 'prop-types';

export default function ListLotto(props) {
	return (
		<View style={styles.number}>
			<Number>{No1}</Number>
			<Number>{No2}</Number>
			<Number>{No3}</Number>
			<Number>{No4}</Number>
			<Number>{No5}</Number>
			<Number>{No6}</Number>
			<Text>{AMH}</Text>
		</View>
	);
}

ListLotto.propTypes = {
	list: PropTypes.number.isRequired,
};
const styles = StyleSheet.create({
	number: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		width: '90%',
		padding: '2%',
		borderBottomWidth: 1,
		borderColor: '#c3c3c3',
	},
});
