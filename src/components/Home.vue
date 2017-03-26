<template>
  <div id="wrapper" class="in">

      <!-- Navigation -->
      <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
          <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
              </button>
              <router-link to="/index" class="navbar-brand navbar-logo"><img alt="JMonitor" src="../assets/logo.svg"></router-link>
              <router-link to="/index" class="navbar-brand navbar-title">JMonitor</router-link>
          </div>
          <ul class="nav navbar-top-links navbar-right in">
              <li>
                <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:;">
                    ( <span>{{osVersion}}</span> <span>{{osArch}}</span>, <span>{{processerNum}}</span> cpus, load
                    avg <span>{{loadAvg | loadAvgReadable}}</span> )
                </a>
              </li>
              <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                      <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-user">
                      <li><a href="javascript:;" @click="logout"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                      </li>
                  </ul>
              </li>
          </ul>
          <div class="navbar-default sidebar" role="navigation">
              <div class="sidebar-nav navbar-collapse">
                  <ul class="nav vm-list" id="side-menu">
                    <li v-for="jvm in jvms" @click="liSelected(jvm.pid)" :class="{ 'highlight': activeId == jvm.pid}">
                      <router-link :to="{path: '/panel/basic', query: {vmId: jvm.pid}}" :title="jvm.name" class="vm-title">
                        <img :src="jvm.icon">
                        (pid {{jvm.pid}}) {{jvm.name}}
                      </router-link>
                    </li>
                  </ul>
              </div>
          </div>
      </nav>
      <panel v-show="vmId"></panel>
      <welcome v-show="!vmId"></welcome>
  </div>
</template>

<script>
import icons from '../icon.js'
import router from '../router'
import welcome from './Welcome.vue'
import panel from './Panel.vue'
export default {
  name: 'app',
  data () {
    return {
      osInfoMethod: 'os_info',
      activeId: '',
      timer: null,
      listMethod: 'vm_list',
      logoutMethod: 'logout',
      osVersion: '',
      osArch: '',
      processerNum: '',
      loadAvg: 0,
      jvms: []
    }
  },
  computed: {
    vmId () {
      return this.$route.query.vmId
    }
  },
  watch: {
    vmId (newVal, oldVal) {
      console.log('new ' + newVal)
      console.log('old ' + oldVal)
    }
  },
  filters: {
    loadAvgReadable (data) {
      return data.toFixed(2)
    }
  },
  methods: {
    logout () {
      this.$http.get(this.$url + this.logoutMethod).then(m => {
        if (m.status === 200) {
          this.$token = null
          this.$initToken()
          router.push({path: '/login'})
        } else {
          console.log('logout failed')
        }
      })
    },
    loadData () {
      this.$http.get(this.$url + this.osInfoMethod).then(m => {
        if (m.status === 200) {
          m = m.data
          if (m.status === 'success') {
            this.osVersion = m.data.OsVersion
            this.osArch = m.data.Arch
            this.processerNum = m.data.ProcesserNum
            this.loadAvg = m.data.LoadAvg
          } else {
            console.log(m.message)
          }
        } else {
          console.log('get os info failed')
        }
      }, e => {
        this.jvms = []
        console.error(e)
        router.push({ path: '/login', query: {msg: 'net_work_err'} })
        clearInterval(this.timer)
        return false
      })
      this.$http.get(this.$url + this.listMethod).then(m => {
        if (m.status === 200) {
          m = m.data
          if (m.status === 'success') {
            var arr = m.data
            this.jvms = []
            var vids = []
            for (var i = 0; i < arr.length; i++) {
              if (vids.indexOf(arr[i].VmID) !== -1) {
                continue
              }
              vids.push(arr[i].VmID)
              var icon = arr[i].Icon
              icon = icon.replace(/\.png/, '')
              this.jvms.push({
                pid: arr[i].VmID,
                name: arr[i].Name,
                icon: icons[icon]
              })
            }
          } else {
            console.log(m.message)
          }
        } else {
          console.log('get vm list failed')
        }
      })
    },
    liSelected (pid) {
      this.activeId = pid
    }
  },
  mounted () {
    this.loadData()
    this.timer = setInterval(() => {
      this.loadData()
    }, 2000)
  },
  beforeDestory () {
    clearInterval(this.timer)
  },
  components: {
    welcome,
    panel
  }
}
</script>

<style>
body {
    background-color: #f8f8f8;
}
#wrapper {
  width: 100%;
}
#page-wrapper {
  padding: 0 15px;
  min-height: 568px;
  background-color: white;
}
@media (min-width: 768px) {
  .page-wrapper {
    position: inherit;
    margin: 0 0 0 250px;
    padding: 0 30px;
    border-left: 1px solid #e7e7e7;
  }
}
.navbar-logo{
  padding-right:0px
}
.navbar-logo img {
  height: 20px;
}
.navbar-top-links {
  margin-right: 0;
}
.navbar-top-links li {
  display: inline-block;
}
.navbar-top-links li:last-child {
  margin-right: 15px;
}
.navbar-top-links li a {
  padding: 15px;
  min-height: 50px;
}
.navbar-top-links .dropdown-menu li {
  display: block;
}
.navbar-top-links .dropdown-menu li:last-child {
  margin-right: 0;
}
.navbar-top-links .dropdown-menu li a {
  padding: 3px 20px;
  min-height: 0;
}
.navbar-top-links .dropdown-menu li a div {
  white-space: normal;
}
.navbar-top-links .dropdown-messages,
.navbar-top-links .dropdown-tasks,
.navbar-top-links .dropdown-alerts {
  width: 310px;
  min-width: 0;
}
.navbar-top-links .dropdown-messages {
  margin-left: 5px;
}
.navbar-top-links .dropdown-tasks {
  margin-left: -59px;
}
.navbar-top-links .dropdown-alerts {
  margin-left: -123px;
}
.navbar-top-links .dropdown-user {
  right: 0;
  left: auto;
}
.sidebar .sidebar-nav.navbar-collapse {
  padding-left: 0;
  padding-right: 0;
}
.sidebar .sidebar-search {
  padding: 15px;
}
.sidebar ul li {
  border-bottom: 1px solid #e7e7e7;
}
.sidebar ul li a.active {
  background-color: #eeeeee;
}
.sidebar .arrow {
  float: right;
}
.sidebar .fa.arrow:before {
  content: "\f104";
}
.sidebar .active > a > .fa.arrow:before {
  content: "\f107";
}
.sidebar .nav-second-level li,
.sidebar .nav-third-level li {
  border-bottom: none !important;
}
.sidebar .nav-second-level li a {
  padding-left: 37px;
}
.sidebar .nav-third-level li a {
  padding-left: 52px;
}
.vm-list .highlight {
  background: #e7e7e7;
}
@media (min-width: 768px) {
  .sidebar {
    z-index: 1;
    position: absolute;
    width: 250px;
    margin-top: 51px;
  }
  .navbar-top-links .dropdown-messages,
  .navbar-top-links .dropdown-tasks,
  .navbar-top-links .dropdown-alerts {
    margin-left: auto;
  }
}
.nav>li {
    position: relative;
}
.nav > li > a {
    overflow: hidden;
}
.vm-title {
    white-space: nowrap;
}
.vm-list {
    margin-top: 4px;
}
.sidebar ul li:first-child {
    border-top: 1px solid #e7e7e7;
}
</style>
