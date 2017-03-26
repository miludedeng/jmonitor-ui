<template>
  <div id="sql-panel" class="row page-panel panel-active">
      <div class="col-lg-12">
          <div class="panel panel-default active">
              <div class="panel-heading">
                  <i class="fa fa-th-list"></i> SQL
              </div>
              <!-- /.panel-heading -->
              <div class="panel-body">
                  <div id="sql_table_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                      <div class="row">
                          <div class="col-sm-6">
                              <div class="dataTables_length" id="thread-table_length">
                                  <label>过滤：
                                      <input type="text" placeholder="最小毫秒值" class="form-control sql-filter-input sql-filter-min">-
                                      <input type="text" placeholder="最大毫秒值" class="form-control sql-filter-input sql-filter-max">
                                      <button :class="['btn', 'btn-default', 'btn-sm', 'btn-filter-submit', {disabled: isNotLoaded}]">确认</button>
                                  </label>
                              </div>
                          </div>
                          <div class="col-sm-6">
                              <div class="dataTables_length pull-right" id="thread-table_length">
                                  <button :class="['btn', 'btn-default', 'btn-sm', 'btn-load-sql-list', {disabled: isNotLoaded}]">刷新</button>
                                  <button :class="['btn', 'btn-default', 'btn-sm', 'btn-load-sql-list', {disabled: isLoaded}]" @click="loadAgent">载入Agent</button>
                              </div>
                          </div>
                      </div>
                      <div class="row">
                          <div class="col-sm-12">
                              <table width="100%" class="table table-striped table-bordered table-hover sql-table dataTable no-footer dtr-inline" id="sql-table" style="width: 100%;">
                                  <thead>
                                      <tr>
                                          <th width="10%">耗时</th>
                                          <th width="70%">SQL</th>
                                          <th width="20%">执行时间</th>
                                          <th width="10%"></th>
                                      </tr>
                                  </thead>
                                  <tbody id="sql-list"></tbody>
                              </table>
                          </div>
                          <!-- /.table-responsive -->
                          <div clas="row page-bar">
                              <ul class="pagination sql-page-bar pull-right">
                              </ul>
                          </div>
                      </div>
                      <!-- /.panel-body -->
                  </div>
                  <!-- /.panel -->
              </div>
          </div>
          <!-- /.row -->
      </div>
      <!-- /#page-wrapper -->
  </div>
</template>

<script>
export default {
  name: 'Sql',
  data () {
    return {
      timer: null,
      method: 'sql_stat/load_agent',
      isLoadedMethod: 'sql_stat/is_load_agent',
      isLoaded: false
    }
  },
  computed: {
    vmId () {
      return this.$route.query.vmId
    },
    isNotLoaded () {
      return !this.isLoaded
    }
  },
  methods: {
    loadSqlList () {
      console.log('sql list loading')
    },
    loadAgent () {
      this.$http.get(this.$url + this.method + '/' + this.vmId).then(m => {
        if (m.status === 200) {
          m = m.data
          if (m.status === 'success') {
            alert('agent loaded')
            this.isLoaded = true
          } else {
            console.log(m.message)
          }
        } else {
          console.log('get thread list failed')
        }
      })
    }
  },
  filters: {
    dateReadable (fmt) { // author: meizz
      var o = {
        'M+': this.getMonth() + 1, // 月份
        'd+': this.getDate(), // 日
        'H+': this.getHours(), // 小时
        'm+': this.getMinutes(), // 分
        's+': this.getSeconds(), // 秒
        'q+': Math.floor((this.getMonth() + 3) / 3), // 季度
        'S': this.getMilliseconds() // 毫秒
      }
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
      for (var k in o) {
        if (new RegExp('(' + k + ')').test(fmt)) {
          fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
      }
      return fmt
    }
  },
  watch: {
    isLoaded (newVal, oldVa) {
      if (newVal) {
        this.loadSqlList()
      }
    }
  },
  mounted () {
    this.$http.get(this.$url + this.isLoadedMethod + '/' + this.vmId).then(m => {
      if (m.status === 200) {
        m = m.data
        if (m.status === 'success' && m.message === 'true') {
          this.isLoaded = true
        } else {
          return false
        }
      } else {
        return false
      }
    })
  },
  beforeRouteLeave (to, from, next) {
    clearInterval(this.timer)
    console.log('sql destoryed')
    next()
  }
}
</script>

<style scoped>
.sql-filter-input {
    width: 20%;
}
</style>
