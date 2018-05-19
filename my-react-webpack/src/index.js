import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './css/base.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import {AppContainer} from 'react-hot-loader';

fetch('/api/comments/show?id=4199740256395164&page=1').then(
    res => {
        res.json().then(data => {
            console.log(data);
        });
    }
);

const render = Component => {
    ReactDOM.render(
        <AppContainer>
            <Component/>
        </AppContainer>,
        document.getElementById('root')
    );
};

render(App);

// ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

// 调用模块热更新的API
if(module.hot){
    module.hot.accept('./App', () => {
        render(App);
    });
}