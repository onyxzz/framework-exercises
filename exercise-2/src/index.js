import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App 
                  applicationName={ "Create react app shopping list" }
                  applicationDescription= { "The best shopping list, now built with create-react-app" } />,
                document.getElementById('root'));

serviceWorker.unregister();
