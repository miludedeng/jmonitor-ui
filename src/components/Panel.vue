<template>
  <div class="page-wrapper">
    <div class="row">
        <div class="col-lg-12 header-tabs">
            <h5 :class="['page-header', {active: tabCond.isBasic}]">
              <router-link to="/panel/basic" data-id="basic-panel" @click.native="activeTab('isBasic')">概述</router-link>
            </h5>&nbsp;|&nbsp;
            <h5 :class="['page-header', {active: tabCond.isMonitor}]">
              <router-link to="/panel/monitor" data-id="monitor-panel" @click.native="activeTab('isMonitor')">监视</router-link>
            </h5>&nbsp;|&nbsp;
            <h5 :class="['page-header', {active: tabCond.isThread}]">
              <router-link to="/panel/thread" data-id="thread-panel" @click.native="activeTab('isThread')">线程</router-link>
            </h5>&nbsp;|&nbsp;
            <h5 :class="['page-header', {active: tabCond.isSql}]">
              <router-link to="/panel/sql" data-id="sql-panel" @click.native="activeTab('isSql')">SQL</router-link>
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
    return {
      tabCond: {
        isBasic: true,
        isMonitor: false,
        isThread: false,
        isSql: false
      }
    }
  },
  methods: {
    activeTab (val) {
      var keys = Object.keys(this.tabCond)
      for (var key of keys) {
        this.tabCond[key] = false
      }
      this.tabCond[val] = true
    }
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
.header-tabs .active {
    background-color: #2f74f1;
}
.header-tabs .active a {
    color: #fff;
}
</style>
