const app = Vue.createApp({})
app.component ('sample-component', {  //對應到html的sample-component
    template: '<div> Test {{ text }} </div>',
    data() {
        return{
            text: 'something'
        }
    }
});
app.mount('#app');

const app2 = Vue.createApp({});
app2.component ('sample-component', 
{
    template: '#sample',
    data() {
        return{
            text: 'something2'
        }
    }
});
app2.mount('#app2');

const app3 = Vue.createApp({
    data() {
        return{
            text: 'Cool'
        }
    }
});
app3.component('sample-component', {
    template: '#sample',
    props: ['parentText'],
    data() {
        return{
            text: 'something'
        }
    }
});
app3.mount('#app3');

// const app4 = Vue.createApp({});
// app4.component('sample-component', {
//     template: '#sample2',
//     props: {
//         'parentText':{
//         type: [String]
//         },
//         'parentNumber':{
//             type: [Number,Boolean],
//             required: true,
//             default: 12,
//             valodator: value => value > 20
//         }
//     },
// });
// app4.mount('#app4');

const app5 = Vue.createApp({
    data() {
        return{
            posts: [
                {
                    title: '第一篇文章',
                    author: 'John'
                },
                {
                    title: '第二篇文章',
                    author: 'Tim'
                }
            ]
        }
    }
});
app5.component('post-component', {
    template: '#post',
    props: ['title','author']
});
app5.mount('#app5');

const app6 = Vue.createApp({
    methods:{
        noticeNumber(number) {
            if(number > 5) alert('數量超過 5')
        }
    }
});
app6.component('my-component', {
    template:'<input v-model="number">',
    data() {
        return{
            number: 0
        }
    },
    watch:{
        number:{
            handler(val) {
                this.$emit('notice', val)
            }
        }
    }
});
app6.mount('#app6');

const app7 = Vue.createApp({
    data() {
        return{
            currentTab:'index',
            tabs: ['index', 'cool','try']
        }
    }
});

app7.component('index', {
    name: 'index_name',
    template:'<div><input v-model="data1"></div>',
    data() {
        return{
            data1: 'index'
        }
    }
})
app7.component('cool', {
    name: 'index_name2',
    template:'<div><input v-model="data2"></div>',
    data() {
        return{
            data2: 'cool'
        }
    }
})
app7.component('try', {
    name: 'index_name3',
    template:'<div><input v-model="data3"></div>',
    data() {
        return{
            data3: 'try'
        }
    }
})
app7.mount('#app7');

const app8 = Vue.createApp({
    data() {
        return {
            data: {
                'name': '好友清單',
                'friends':[
                    {'name': 'john',
                    'friends': [
                        {'name': 'Tim'},
                        {'name': 'Tom'},
                    ]
                    },
                    {'name':'May',
                    'friends': [
                        {'name':'Jack'}
                    ]
                }
                ]
            }
        }
    }
});
app8.mount('#app8');
