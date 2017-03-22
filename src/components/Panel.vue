<template>
  <div class="page-wrapper">
    <div class="row">
        <div class="col-lg-12 header-tabs">
            <h5 class="page-header active">
              <router-link to="/basic" data-id="basic-panel">概述</router-link>
            </h5>&nbsp;|&nbsp;
            <h5 class="page-header">
              <router-link to="/monitor" data-id="monitor-panel">监视</router-link>
            </h5>&nbsp;|&nbsp;
            <h5 class="page-header">
              <router-link to="/thread" data-id="thread-panel">线程</router-link>
            </h5>&nbsp;|&nbsp;
            <h5 class="page-header">
              <router-link to="/sql" data-id="sql-panel">SQL</router-link>
            </h5>
        </div>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Panel',
  data () {
    return {}
  }
}
</script>

<style scoped>
.page-wrapper {
    min-height: 568px;
    background-color: white;
}
.begin-panel {
    text-align: center;
    padding-top: 40px;
    font-size: 18px;
    color: #337ab7;
}
.header-tabs {
    text-align: center;
    border-bottom: 1px double #ccc;
    border-width: 4px;
    margin: 10px 0 20px;
}
.page-header {
    display: inline-block;
    border: 1px solid #bbb;
    padding: 3px 10px;
    border-radius: 35px;
    background-color: #eee;
    margin: 5px;
    cursor: pointer;
}
</style>
