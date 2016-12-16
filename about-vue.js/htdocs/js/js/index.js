var app=new Vue({
    el:"#app",
    data:{
        message:'Hello Vue!'
    }
})
var app2=new Vue({
    el:'#app-2',
    data:{
        message:'You loaded this page on'+new Date()
    }
})
var app3=new Vue({
    el:'#app-3',
    data:{
        seen:true
    }
})
var app4=new Vue({
    el:'#app-4',
    data:{
        todos:[
        {text:'js'},
        {text:'html'},
        {text:'css'},
        {text:'vue'}


        ]


    }
})
app4.todos.push({ text: 'New item' },{text:'one more'},{text:'要逗号分开'})

var app5=new Vue({
    el:'#app-5',
    data:{
        message:'Hello Vue!'
    },
    methods:{
        reverseMessage:function(){
            this.message=this.message.split('').reverse().join('')

        }
    }
});
var app6=new Vue({
    el:'#app-6',
    data:{
        message:'Hello Vue.js!'
    }
})