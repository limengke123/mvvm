export default class Watcher {
    constructor(vm, expOrFn, cb){
        this.depIds = {} // hash储存订阅者的id,避免重复的订阅者
        this.vm = vm // 被订阅的数据一定来自于当前Vue实例
        this.cb = cb // 当数据更新时想要做的事情
        this.expOrFn = expOrFn // 被订阅的数据
        this.val = this.get() // 维护更新之前的数据
    }
    update() {
        this.run()
    }
    addDep(dep) {
        if(!this.depIds.hasOwnProperty(dep.id)) {
            dep.addSub(this)
            this.depIds[dep.id] = dep
        }
    }
    run() {
        const val = this.get()
        console.log(val)
        if(val !== this.val) {
            this.val = val
            this.cb.call(this.vm, val)
        }
    }
    get() {
        Dep.target = this
        const val = this.vm._data[this.expOrFn]
        Dep.target = null
        return val
    }
}