const container = document.getElementById('container');


/** 
* Function: htx - create a new HTMLElement
* @param {object} props - contains the following optional properties:
* @param {string} props.tag - the tag name of the element to create - default is 'div'
* @param {string} props.class - the class name of the element to create - default is ''
* @param {string} props.id - the id of the element to create - default is ''
* @param {string} props.content - the html content of the element to create - default is ''
* @param {string} props.style - the style of the element to create - default is ''
* @param {HTMLElement} props.parent - the parent element of the element to create - default is container
*/
export function htx(props) {
    
    var el = document.createElement(props.tag || 'div');
    el.innerHTML = props.content || "";
    el.className = props.class || "";
    el.id = props.id || "";
    el.style.cssText = props.style || "";
    if (props.parent) {
        props.parent.appendChild(el);
    } else {
        container.appendChild(el);
    }
    return el;
}

export function bigNumberStyle(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
// Encrypt an object into a string
export function encrypt(obj) {
    return btoa(JSON.stringify(obj));
}
// Decrypt a string into an object
export function decrypt(str) {
    return JSON.parse(atob(str));
}
