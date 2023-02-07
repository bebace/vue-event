<template>
 <div class="regContent">
    <div class="regBox">
        <div class="titleBox">
            <span>后台管理系统</span>
        </div>
    </div>
 </div>
</template>
<script>
export default {
  name: 'my-register'
}
</script>
<style lang="less" scoped>
.regContent{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: #999;
}
.regBox{
    width: 400px;
    height: 335px;
    border-radius: 3px;
    background-color: #fff;
}
.titleBox{
    height: 60px;
    font-size: 25px;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>
