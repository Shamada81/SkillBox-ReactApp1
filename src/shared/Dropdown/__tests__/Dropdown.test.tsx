import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import { Dropdown } from '..';
import Adapter from 'enzyme-adapter-react-16'


Enzyme.configure({ adapter: new Adapter() });


describe('Dropdown', () => {
	test('Should render', () => {
		const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)
		expect(wrapper).toBeDefined();
		expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
	})

	test('should render(snapshot)', () => {
		const wrapper = shallow(<Dropdown children={<div />} button={<button />} />)

		expect(wrapper).toMatchSnapshot()
	})
})