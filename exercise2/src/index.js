import { cube } from './math';

import './styles.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('in development mode');
}

function component() {
  const ele = document.createElement('pre');
  ele.innerHTML = ['hello webpack!', '5 cubed is equal to ' + cube(5)].join(
    '\n\n'
  );

  return ele;
}

document.body.appendChild(component());
