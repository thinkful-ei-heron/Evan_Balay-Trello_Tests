import React from 'react';
import ReactDOM from 'react-dom';
import List from './list';

describe('<List />', () => {
    it ('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List header="this is a card" card={['l', 'm']}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});