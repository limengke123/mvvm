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
    removeSub(sub) {
        const index = this.subs.indexOf(sub)
        if(index > -1) {
            this.subs.splice(index, 1)
        }
    }
    notify() {
        this.subs.forEach(sub => sub.update())
    }
} 

Dep.target = null