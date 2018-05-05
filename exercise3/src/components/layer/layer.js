// import tpl from './layer.html';
import tpl from './layer.tpl';

import './layer.less';

function Layer() {
    console.log('test......');
    return {
        name: 'layer',
        tpl: tpl
    }
}

export default Layer;