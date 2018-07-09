const React = {
    createElement
}

const ReactDom = {
    render: (vnode, container) => {
        container.innerHTML = ''
        return render(vnode, container)
    }
}

function createElement (tag, attrs, ...children) {
    return {
        tag,
        attrs,
        children
    }
}

function render (vnode, container) {
    if (typeof vnode === 'string') {
        let textNode = document.createTextNode(vnode)
        return container.appendChild(textNode)
    }
    const dom = document.createElement(vnode.tag)
    if (vnode.attrs) {
        Object.keys(vnode.attrs).forEach(key => {
            const value = vnode.attrs[key]
            setAttribute(dom, key, value)
        })
    }
    vnode.children.forEach(child => render(child, dom))
    return container.appendChild(dom)
}

function  setAttribute (dom, name, value) {
    if (name === 'className') {
        name = 'class'
    }
    if (/on\w+/.test(name)) {
        name = name.toLowerCase()
        dom[name] = value || ''
    } else if (name === 'style') {
        if (!value || typeof value === 'string') {
            dom.style.cssText = value || ''
        } else if (value && typeof value === 'object') {
            for (let styleName in value) {
                dom.style[styleName] = typeof value[styleName] === 'number' ? value[styleName] + 'px' : value[styleName]
            }
        }
    } else {
        if (name in dom ) {
            dom[name] = value || ''
        }
        if (value) {
            dom.setAttribute(name, value)
        } else {
            dom.removeAttribute(name, value)
        }
    }
}

function tick () {
    const element = (
        <div>
            <h1>hello world</h1>
            <h2>it is {new Date().toLocaleTimeString()}</h2>
        </div>
    )
    ReactDom.render(
        element,
        document.getElementById('root')
    )
}

setInterval(tick, 1000)
