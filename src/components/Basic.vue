<template>
  <div id="basic-panel" class="row page-panel panel-active">
    <div class="col-lg-12 panel-body">
        <div class="panel panel-default active">
            <div class="panel-heading">
                <i class="fa fa-th-list"></i> 基本信息
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body basic-info" style="height:145px"><div>
                    <strong>PID: </strong>
                    <label style="font-weight:400">{{pid}}</label>
                </div><div>
                    <strong>User: </strong>
                    <label style="font-weight:400">{{user}}</label>
                </div><div>
                    <strong>Vendor: </strong>
                    <label style="font-weight:400">{{vendor}}</label>
                </div><div>
                    <strong>VmName: </strong>
                    <label style="font-weight:400">{{vmName}}</label>
                </div><div>
                    <strong>VmVersion: </strong>
                    <label style="font-weight:400">{{vmVersion}}</label>
                </div></div>
            <!-- /.panel-body -->
        </div>
        <div class="panel panel-default">
            <div class="panel-heading">
                <ul class="nav nav-tabs">
                    <li class="active"><a href="#args" data-toggle="tab" aria-expanded="true">Args</a></li>
                    <li class=""><a href="#vmargs" data-toggle="tab" aria-expanded="false">Jvm 参数</a></li>
                    <li class=""><a href="#sysprops" data-toggle="tab" aria-expanded="false">系统属性</a></li>
                </ul>
            </div>
            <!-- /.panel-heading -->
            <div class="panel-body tab-content">
                <div class="tab-pane fade active in" id="args" style="height: 300px;overflow: scroll;">
                  <div v-for="arg in args">
                    <label style="font-weight:400">{{arg}}</label>
                  </div>
                </div>
                <div class="tab-pane fade" id="vmargs" style="height: 300px;overflow: scroll;">
                  <div v-for="vmArg in vmArgs">
                    <label style="font-weight:400">{{vmArg}}</label>
                  </div>
                </div>
                <div class="tab-pane fade" id="sysprops" style="height: 300px;overflow: scroll;">
                  <div v-for="(val, key) in systemProperties">
                    <strong>{{key}} =</strong>
                    <label style="font-weight:400">{{val}}</label>
                  </div>
                </div>
            </div>
            <!-- /.panel-body -->
        </div>
        <!-- /.panel -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Basic',
  computed: {
    vmId () {
      return this.$route.query.vmId
    }
  },
  data () {
    return {
      method: 'vm_basic_info',
      pid: 0,
      user: '',
      vendor: '',
      vmName: '',
      vmVersion: '',
      args: [],
      vmArgs: [],
      systemProperties: {}
    }
  },
  methods: {
    updateData () {
      this.$http.get(this.$url + this.method + '/' + this.vmId).then(m => {
        if (m.status === 200) {
          m = m.data
          if (m.status === 'success') {
            this.pid = m.data.PID
            this.vendor = m.data.Vendor
            this.user = m.data.User
            this.vmName = m.data.VmName
            this.vmVersion = m.data.VmVersion
            this.vmArgs = m.data.VmArgs
            this.systemProperties = m.data.SystemProperties
            var args = m.data.Args
            this.args = []
            if (args instanceof Array) {
              for (var i = 0; i < args.length; i++) {
                this.args = args
              }
            } else {
              this.args.push(args)
            }
          } else {
            console.log(m.message)
          }
        } else {
          console.log('get os_info failed')
        }
      })
    }
  },
  mounted () {
    this.updateData()
  },
  beforeRouteUpdate (to, from, next) {
    next()
    this.updateData()
  }
}
</script>

<style scoped>
.panel-body {
  padding: 15px;
}
</style>
