import Dep from "./dep";

export default class Observer {
    constructor(value){
        this.value = value
        this.walk(value)
    }
    walk(value) {
        Object.keys(value).forEach(key => this.convert(key, value[key]))
    }
    convert(key,val) {
        defineReactive(this.value, key, val)
    }
}

function defineReactive(obj, key, val) {
    const dep = new Dep()
    let childOb = observe(val)
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get: () => {
            if(Dep.target){
                dep.depend()
            }
            return val
        },
        set: newVal => {
            if (val === newVal) return
            val = newVal
            childOb = observe(newVal)
            dep.notify()
        }
    })
}

function observe(val) {
    if (!val || typeof val !== 'object') return
    return new Observer(val)
}