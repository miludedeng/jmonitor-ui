<template>
  <div id="page-wrapper-begin" class="page-wrapper">
    <div class="begin-panel"><i class="glyphicon glyphicon-hand-left"></i> 请点击左侧应用 </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {}
  }
}
</script>

<style scoped>
.page-wrapper {
    padding: 0 15px;
    min-height: 568px;
    background-color: white;
}
.begin-panel {
    text-align: center;
    padding-top: 40px;
    font-size: 18px;
    color: #337ab7;
}
</style>
