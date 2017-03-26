<template>
  <div id="thread-panel" class="row page-panel panel-active">
    <div class="col-lg-12">
        <div class="panel panel-default active">
            <div class="panel-heading">
                <i class="fa fa-th-list"></i> 线程
            </div>
            <div class="panel-body">
                <div id="sql-table_wrapper" class="dataTables_wrapper form-inline dt-bootstrap no-footer">
                    <div class="row">
                        <div class="col-sm-6">
                            <div class="dataTables_length" id="thread-table_length">
                                <label>显示条数：
                                    <select class="form-control input-sm thread-list-count" v-model="listCount">
                                        <option value="10">10</option>
                                        <option value="25">25</option>
                                        <option value="50">50</option>
                                        <option value="100">100</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="dataTables_length pull-right" id="thread-table_length">
                                <label>线程数：
                                    <span id="thread-count">{{threadCount}}</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-12">
                            <table width="100%" class="table table-striped table-bordered table-hover thread-table dataTable no-footer dtr-inline" id="thread-table" style="width: 100%;">
                                <thead>
                                    <tr>
                                        <th width="10%">Thread ID</th>
                                        <th width="45%">Name</th>
                                        <th width="15%">State</th>
                                        <th width="8%">CPU</th>
                                        <th width="10%">Total CPU</th>
                                        <th width="12%">Blocked By</th>
                                        <th width="10%"></th>
                                    </tr>
                                </thead>
                                <tbody id="thread-list"><tr class="odd gradeX">
                                  <tr v-for="thread in threads">
                                    <td>{{thread.tId}}</td>
                                    <td>{{thread.name}}</td>
                                    <td>{{thread.state}}</td>
                                    <td>{{thread.cpu}}</td>
                                    <td>{{thread.totalCpu}}</td>
                                    <td>{{thread.blockedBy}}</td>
                                    <td><button class="btn btn-default btn-xs" @click="changeStack(thread.stackTrack)" data-toggle="modal" data-target="#threadModal">View</button></td>
                                </tr>
                              </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade" id="threadModal" tabindex="-1" role="dialog" aria-labelledby="threadModalLabel" aria-hidden="true">
        <input type="hidden" id="thread-id" />
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                        &times;
                    </button>
                    <h4 class="thread-modal-title">
                    Stack Trace
                </h4>
                </div>
                <div class="thread-modal-body">
                  <div v-for="stack in stackTrace" class="th-stack-line">
                    <i class="glyphicon glyphicon-minus"></i>&nbsp;&nbsp;{{stack.className}}.{{stack.methodName}}({{stack.fileName}}: {{stack.nativeMethod ? 'native' : stack.lineNumber}})
                  </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Monitor',
  computed: {
    vmId () {
      return this.$route.query.vmId
    }
  },
  data () {
    return {
      method: 'vm_thread_list',
      countMethod: 'vm_thread_count',
      listCount: 10,
      timer: null,
      threads: [],
      threadCount: 0,
      stackTrace: []
    }
  },
  methods: {
    changeStack (stack) {
      this.stackTrace = []
      for (var i = 0; i < stack.length; i++) {
        console.log(stack[i].className)
        this.stackTrace.push({
          className: stack[i]['className'],
          methodName: stack[i]['methodName'],
          fileName: stack[i]['fileName'],
          lineNumber: stack[i]['lineNumber'],
          nativeMethod: stack[i]['nativeMethod']
        })
      }
    },
    updateData () {
      this.$http.get(this.$url + this.method + '/' + this.vmId + '/' + this.listCount).then(m => {
        if (m.status === 200) {
          m = m.data
          if (m.status === 'success') {
            var arr = m.data
            this.threads = []
            for (var i = 0; i < arr.length; i++) {
              this.threads.push({
                tId: arr[i].TID,
                name: arr[i].Name,
                state: arr[i].State,
                cpu: arr[i].CPU.toFixed(2) + '%',
                totalCpu: arr[i].TotalCPU.toFixed(2) + '%',
                blockedBy: arr[i].BlockedBy,
                stackTrack: arr[i].Detail
              })
            }
          } else {
            console.log(m.message)
          }
        } else {
          console.log('get thread list failed')
        }
      })
      this.$http.get(this.$url + this.countMethod + '/' + this.vmId).then(m => {
        if (m.status === 200) {
          m = m.data
          if (m.status === 'success') {
            this.threadCount = m.data.ThreadCount
          } else {
            console.log(m.message)
          }
        } else {
          console.log('get thread list failed')
        }
      })
    }
  },
  mounted () {
    this.updateData()
    this.timer = setInterval(() => {
      this.updateData()
    }, 1000)
  },
  beforeRouteLeave (to, from, next) {
    clearInterval(this.timer)
    next()
  }
}
</script>

<style scoped>
.th-stack-line {
    white-space: nowrap;
    margin-bottom: 8px;
}
.thread-modal-body {
    overflow-y: scroll;
    margin: 20px;
}
</style>
