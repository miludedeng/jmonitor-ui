<template>
  <div class="panel-body" style="height:401px">
     <div class="col-md-8">
       <fieldset class="sp-fs">
         <legend>Old</legend>
         <div id="old-top" style="height:347px;background-color: #eee;"></div>
         <div id="old-foot" style="height:0px;background-color: #687d15;"></div>
       </fieldset>
     </div>
     <div class="col-md-4">
       <div>
         <fieldset class="sp-fs">
           <legend>Eden</legend>
           <div id="eden-top" style="height:205px;background-color: #eee;"></div>
           <div id="eden-foot" style="height:0px;background-color: #f3b220;"></div>
         </fieldset>
       </div>
       <div>
         <fieldset class="sp-fs">
           <legend>Sur from</legend>
           <div id="from-top" style="height:48px;background-color: #eee;"></div>
           <div id="from-foot" style="height:0px;background-color: #d66312;"></div>
         </fieldset>
       </div>
       <div>
         <fieldset class="sp-fs">
           <legend>Sur to</legend>
           <div id="to-top" style="height:48px;background-color: #eee;"></div>
           <div id="to-foot" style="height:0px;background-color: #d66312;"></div>
         </fieldset>
       </div>
     </div>
 </div>
</template>
<script>
import $ from 'jquery'
export default {
  props: {
    old: Number,
    eden: Number,
    from: Number,
    to: Number
  },
  data () {
    return {
      heightMap: {
        old: 347,
        eden: 205,
        from: 48,
        to: 48
      }
    }
  },
  methods: {
    setSpacePrecent (name, precent) {
      var height = this.heightMap[name]
      $('#' + name + '-top').css('height', height * (1 - precent))
      $('#' + name + '-foot').css('height', height * precent)
    }
  },
  watch: {
    old (newVal, oldVal) {
      this.setSpacePrecent('old', newVal)
    },
    eden (newVal, oldVal) {
      this.setSpacePrecent('eden', newVal)
    },
    from (newVal, oldVal) {
      this.setSpacePrecent('from', newVal)
    },
    to (newVal, oldVal) {
      this.setSpacePrecent('to', newVal)
    }
  },
  mounted () {
    this.setSpacePrecent('old', this.old)
    this.setSpacePrecent('eden', this.eden)
    this.setSpacePrecent('from', this.from)
    this.setSpacePrecent('to', this.to)
  }
}
</script>

<style scoped>
.sp-fs {
    border: 2px solid #bbb;
    height: 100%;
}
.sp-fs legend {
    font-size: 14px;
    margin-bottom: 0px;
}
</style>
