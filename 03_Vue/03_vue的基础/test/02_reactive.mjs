import {reactive, ref} from "vue";

/*const stu = reactive({
    name: "Tom",
    age: 18,
    gender: "male",
})*/

const count = ref(0) // {value:0}
const stu = ref({
    name: "Tome",
    age: 18,
})
console.log(count.value)
console.log(stu.value.name)
