import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './list';

describe('<List />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header="this is a card" card={[{ id: 'l' }, { id: 'm' }]}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});

describe('<List />', () => {
    it('renders this UI as expected', () => {
        const tree = renderer.create(<List header="this is a card" card={[{ id: 'l' }, { id: 'm' }]}/>).toJSON();
        expect(tree).toMatchSnapshot();
    });
});