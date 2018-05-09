let uid = 0
export default class Dep {
    constructor() {
        this.id = uid++
        // 订阅者数组
        this.subs = []
    }
    depend() {
        Dep.target.addDep(this)
    }
    addSub(sub) {
        this.subs.push(sub)
    }
    notify() {
        this.subs.forEach(sub => sub.update())
    }
} 

Dep.target = null