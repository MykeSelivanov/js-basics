// child nodes vs children
console.log('child nodes', document.childNodes);
console.log('children', document.children);
const childNodes = document.childNodes;
const children = document.children;

for (let i = 0; i < childNodes.length; i++) {
    const node = childNodes[i];
    console.log('node', node);
}

for (let i = 0; i < children.length; i++) {
    const node = children[i];
    console.log('node', node);
}
