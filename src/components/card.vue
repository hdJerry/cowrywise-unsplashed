<template lang="html">
  <!-- {{datas}} -->
  <div class="">
    <div class="grid" v-if="!loading">
      <div v-for="fake in 6" :key="fake" class="card">
        <fake-item></fake-item>
      </div>
    </div>
    <div class="grid" v-if="loading">
      <div v-for="data in datas" :key="data.id" :id="'image'+data.id" class="card" @click="sendImage({image:data.urls.thumb,name:data.user.name,location:data.user.location,id:data.id})">
        <img :src="data.urls.thumb" alt="" srcset="">
        <div class="nameOverlay">
        </div>
        <span class="usernames">{{data.user.name}}</span>
        <span class="location" v-if="data.user.location != null"> {{data.user.location}} </span>
        <span class="location" v-else> No location </span>
      </div>
    </div>
  </div>

</template>

<script>

import fakeItem from './Fake';
import {EventBus} from '../event-bus';

export default {
  props:['datas','loading'],
  components:{
    fakeItem
  },
  data(){
    return{
      // datas : []
    }
  },
  methods:{
    sendImage(datas){
      EventBus.$emit('modalImage',datas);
    }
  },
  created(){
    // EventBus.$on('scaleImage',this.scaleImage);
  }
}
</script>

<style>

  .grid {
    width: 100%;
    max-width: 500px;
    margin: -30px auto;
    display: grid;
    grid-template-columns: auto;
    grid-template-rows:auto;
    grid-column-gap: 20px;
    grid-row-gap: 0px;

  }

  .card img{
    width: 100%;
    height: 100%;
    border-radius: 6px;
  }

  .card {
    height: auto;
    min-height: 30%;
    background: white;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #444;
    z-index: 0;
    transition: all .1s ease-in;
    border-radius: 6px;
  }

  .card:nth-of-type(1){
    grid-column: 1 / span 2;
    grid-row: 1/ span 2;
  }


  .card:nth-of-type(2){
    grid-column: 2/  span 3;
    grid-row: 1 / span 2;
  }

  .card:nth-of-type(3){
    grid-column: 1/ span 2;
    grid-row: 3 / span 4;
  }

  .card:nth-of-type(4){
    grid-column: 2 / span 3;
    grid-row: 3 / span 4;
  }

  .card:nth-of-type(5){
    grid-column: 1 / span 2;
    grid-row: 7;
  }

  .card:nth-of-type(6){
    grid-column: 2/ span 3;
    grid-row: 7;
  }

  .card:hover {
    top: -2px;
    box-shadow: 0 4px 5px rgba(0,0,0,0.2);
    z-index: 10000;
    transform: scale(1.1);
  }


.nameOverlay{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: #555;
  opacity: .5;
  filter: contrast(5);
  border-radius: 6px;
  /* border-bottom-right-radius: 5px; */
  color: #fff;
}

.usernames,.location{
  position: absolute;
  left: 5px;
  font-size: 0.73em;
  font-weight: bold;
  color: #fff;
  opacity: .6;
}
.usernames{
  bottom: 30px;
}
.location{
  bottom: 10px;
  font-weight: lighter;
  line-height: 10px;
}


@media (min-width : 576px) {
  .grid {
    width: 50%;
    max-width: 1240px;
    margin: -30px auto;
    display: grid;
    grid-template-columns: 150px 150px 150px;
    grid-template-rows:200px 10px auto;
    grid-column-gap: 20px;
    grid-row-gap: 15px;

  }

  .card:nth-of-type(1){
    grid-column: 1;
    grid-row: 1;
  }


  .card:nth-of-type(2){
    grid-column: 2;
    grid-row: 1 / span 2;
  }

  .card:nth-of-type(3){
    grid-column: 3;
    grid-row: 1;
  }

  .card:nth-of-type(4){
    grid-column: 1;
    grid-row: 2 / span 6;
  }

  .card:nth-of-type(5){
    grid-column: 2;
    grid-row: 3 / span 6;
  }

  .card:nth-of-type(6){
    grid-column: 3;
    grid-row: 2 / span 7;
  }

}
</style>
