import React from 'react';
import { shallow } from 'enzyme';
import { TextField } from './TextField';

describe('TextField Component', () => {
	const wrapper = shallow(<TextField />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});
	//To Complet Test Cases
});
