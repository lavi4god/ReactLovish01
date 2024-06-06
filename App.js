//const heading = React.createElement('h1',{},'Hello World from React!');

// const heading = React.createElement('div',{id:'Parent'},
//                         React.createElement('div',{id:'child'},'Hello World from React!'));

const heading = React.createElement('div',{id:'Parent'},[
                         React.createElement('div',{class:'child', id:'child1'},'I am first child'),
                         React.createElement('div',{class:'child', id:'child2'},'I am 2nd child')]
                        )
                        
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);