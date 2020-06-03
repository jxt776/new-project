<template>
    <div class="params-info" v-if="Object.keys(itemParams).length !== 0">
            <table v-for="(table,index) in itemParams.rule.tables" :key="index" class="info-size">
                <tr v-for="(tr,indey) in table" :key="indey">
                    <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
                </tr>
            </table>

        <table class="info-params">
            <tr v-for="(info,index) in itemParams.info.set">
                <td class="info-key">{{info.key}}</td>
                <td class="info-value">{{info.value}}</td>
            </tr>

            <div class="info-img"  >
                <img :src="itemParams.image" alt="">
            </div>
        </table>
    </div>
</template>

<script>
export default {
    name:'DetailParams',
    props:{
        itemParams:{
            type:Object,
            default(){
                return {}
            }
        }
    }
}
</script>

<style scoped>
.params-info{
    padding: 20px 15px;
    font-size:14px;
    border-bottom: 5px solid #f2f5f8 ;
}
.params-info table{
    width: 100%;
    border-collapse:collapse ;
}
.params-info table tr{
    height: 42px;
}
.params-info table tr td{
    border-bottom:1px solid rgba(100, 100, 100,.1) ;
}
.info-key{
    width: 95px;
}
.info-params{
    border-top:1px solid rgba(0, 0, 0, .1) ;
}
.info-value{
    color: #eb4868;
}
.info-img img{
    width: 100%;
}
</style>