import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFormat',(datestr,pattern='')=>{
    return moment(datestr).format(pattern)
})
