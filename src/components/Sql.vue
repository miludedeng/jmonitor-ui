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
                                      <button class="btn btn-default btn-sm btn-filter-submit">确认</button>
                                  </label>
                              </div>
                          </div>
                          <div class="col-sm-6">
                              <div class="dataTables_length pull-right" id="thread-table_length">
                                  <button class="btn btn-default btn-sm btn-load-sql-list disabled" disabled="disabled">刷新</button>
                                  <button class="btn btn-default btn-sm btn-load-sql-agent">载入Agent</button>
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
    return {}
  }
}
</script>

<style scoped>
.sql-filter-input {
    width: 20%;
}
</style>
