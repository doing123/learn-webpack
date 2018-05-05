import './css/common.css';
import Layer from './components/layer/layer.js';

const App = function () {
    let dom = document.getElementById('app');
    let layer = new Layer();

    dom.innerHTML = layer.tpl({
        name: 'doing123',
        arr: ['apple', 'xiaomi', 'vivo']
    });
    console.log(layer);
};

new App();