import React from 'react';
import { shallow } from 'enzyme';
import { Button } from './Button';

describe('Button Component', () => {
	const wrapper = shallow(<Button />);

	it('renders as expected', () => {
		expect(wrapper).toMatchSnapshot();
	});

	it('should exists button node', () => {
		expect(wrapper.find('button')).toHaveLength(1);
	});

	it('should have the class btn rounded', () => {
		expect(wrapper.hasClass('btn rounded')).toBeTruthy();
	});

	describe('Button Component with passed props', () => {
		const mockProps = {
			type: 'button',
			className: 'button-class',
			buttonClicked: jest.fn(),
			label: 'btn label'
		};
		const wrapper = shallow(<Button {...mockProps} />);

		it('should exists button node', () => {
			expect(wrapper.find('button').text()).toBe(mockProps.label);
		});

		it('should call the buttonClicked function when button clicked', () => {
			wrapper.find('button').simulate('click');
			expect(mockProps.buttonClicked).toHaveBeenCalled();
		});
	});
});
