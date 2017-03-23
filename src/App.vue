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
              <router-link to="/index" class="navbar-brand navbar-logo"><img alt="JMonitor" src="./assets/logo.svg"></router-link>
              <router-link to="/index" class="navbar-brand navbar-title">JMonitor</router-link>
          </div>
          <!-- /.navbar-header -->
          <ul class="nav navbar-top-links navbar-right in">
              <li>
                <a class="dropdown-toggle" data-toggle="dropdown" href="javascript:;">
                    ( <span>{{OsVersion}}</span> <span>{{OsArch}}</span>, <span>{{ProcesserNum}}</span> cpus, load
                    avg <span>{{LoadAvg}}</span> )
                </a>
              </li>
              <li class="dropdown">
                  <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                      <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-user">
                      <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                      </li>
                  </ul>
                  <!-- /.dropdown-user -->
              </li>
              <!-- /.dropdown -->
          </ul>
          <!-- /.navbar-top-links -->
          <div class="navbar-default sidebar" role="navigation">
              <div class="sidebar-nav navbar-collapse">
                  <ul class="nav vm-list" id="side-menu">
                    <li v-for="jvm in jvms">
                      <router-link to="/panel/basic" :title="jvm.name" class="vm-title">
                        <img :src="jvm.icon">
                        (pid {{jvm.pid}}) {{jvm.name}}
                      </router-link>
                    </li>
                  </ul>
              </div>
              <!-- /.sidebar-collapse -->
          </div>
          <!-- /.navbar-static-side -->
      </nav>
      <router-view></router-view>
  </div>
</template>

<script>
import icons from './icon.js'
export default {
  name: 'app',
  data () {
    return {
      OsVersion: 'Mac OS X 10.12 ',
      OsArch: 'x86_64',
      ProcesserNum: '4',
      LoadAvg: '2.47',
      jvms: [
        {pid: 60946, name: '', icon: icons['Eclipse']},
        {pid: 61054, name: 'cc.cafetime.App', icon: icons['Tomcat']},
        {pid: 61043, name: 'org.jetbrains.jps.cmdline.Launcher', icon: icons['Scala']}
      ]
    }
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
