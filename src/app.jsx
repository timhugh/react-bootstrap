import React from 'react';
import ReactDOM from 'react-dom';

import HelloMessage from './hello-message';

const appNode = document.getElementById('app');
ReactDOM.render(<HelloMessage name="Tim" />, appNode);
