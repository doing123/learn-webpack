import printMe from './main';
import './styles.css';

function hello(str) {
  console.log(str);
}

if (module.hot) {
  module.hot.accept('./main.js', function() {
    console.log('Accepting the updated printMe module!');
    printMe();
  });
}
