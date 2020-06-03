import {debounce} from '@/common/utils'

export const ItemListenerMixin = {
    data(){
        return{
            itemImgListener:null,
            refresh:null
        }
    },
    mounted(){
        //监听图片加载完成
        this.refresh = debounce(this.$refs.scroll.refresh,200)
        this.itemImgLoad = ()=>{
            this.refresh()
        }
        this.$bus.$on('itemimgload',this.itemImgLoad)
    }
}

export const BackTopMixin = {
    data(){
        return{
            isShowBack:false
        }
    },
    methods:{
        backClick(){
            this.$refs.scroll.scrollTo(0,0,300)
        },
    }
    
}