// 创建一个对象
const obj = {
    name: "Tom",
    age: 18,
}

// 来为对象创建一个代理
const handler = {
    // get用来指定读取数据时的行为，它的返回值就是最终读取到的值
    // 指定get后，在通过代理读取对象属性时，就会调用get方法来获取值
    get(target, prop, receiver) {
        /*
            三个参数：
                target 被代理的对象
                prop 读取的属性
                receiver 代理对象
         */
        return target[prop]
    },

    // set会在通过代理修改对象时调用
    set(target, prop, value, receiver) {
        console.log(target,prop,value,receiver)
    }
} // handler用来指定代理行为

// 创建代理
const proxy = new Proxy(obj, handler)

// 修改代理的属性
proxy.age = 90
console.log(proxy.age)