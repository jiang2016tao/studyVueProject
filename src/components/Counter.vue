<template>
  <div>
    <input type="button" value="增加" @click="increment">
    <div>这是{{count}}</div>
  </div>
</template>
<script>
  import {mapGetters, mapActions} from 'vuex'

  export default {
    name:"Counter",
    data(){
      return {}
    },
    computed:mapGetters([
      'count'/*,
      'getOdd'*/
    ]),
    methods:mapActions([
      'increment'/*,
      'decrement',
      'clickOdd',
      'clickAsync'*/
    ])
  }
</script>
