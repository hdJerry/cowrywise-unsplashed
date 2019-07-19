<template>
  <div id="app" class="container-fluid">
    <div id="search-div" class="col-lg-6 col-md-8 col-sm-12">
      <div class="form-group has-search">
    <span class="fa fa-search form-control-feedback"></span>
    <input type="text" class="form-control" placeholder="Search" v-model="search" @keyup="getSearch">
     </div>
     <p class="no-data" v-if="loading == true && datas.length == 0">No data Found for {{search}}</p>
    </div>
    <!-- <router-view/> -->
    <div class="row">
      <div class="flex-justify-center">
        <card-images :datas="datas" :loading='loading'></card-images>
      </div>
    </div>

      <div class="modal-overlay" v-if="hasImage">
      </div>

        <div class="modalx">
          <div class="modalx-body-container">
            <div class="modalx-body">
              <span class="closex" @click="closeModal">&times;</span>
              <div class="image-body" :id="'modal'+imageId">

              </div>
              <div class="infos">
                <span class="names">{{name}}</span>
                  <br>
                  <span class="locate" v-if="location != null">{{location}}</span>
                <span class="locate" v-else>{{notfound}}</span>
              </div>
            </div>

          </div>
        </div>

  </div>
</template>


<script>

import api from './api';
import { ContentLoader } from 'vue-content-loader';

import cardImages from './components/card';
import {EventBus} from './event-bus';


export default {
  components:{
ContentLoader,
cardImages
  },
  data(){
    return{
      datas : [],
      loading : false,
      search : '',
      hasImage : false,
      image : '',
      name : '',
      imageId : '',
      location: '' || 'No location',
      notfound : "No location"
    }
  },
  computed:{

  },
  mounted(){
    // console.log("okay");http://  photos/?client_id=a0140ffded49c46524e80fbb89e1c6a737f32a236a1d4dcdd5c3760532db75ae
    // https://api.unsplash.com/search/photos?query=minimal
    api.photosList({
      query:'africa',
      page: 1,
      per_page : 10,
      order_by : 'latest',
      orientation: 'squarish'
    },'search/photos?')
    .then((res)=>{
      // console.log(res);
      if(res.status == 200){
        this.datas = res.data.results.slice(0,6);
        this.loading = true;
      }

    })
    .catch((err)=>{

    })

  },
  created(){
    EventBus.$on('modalImage',this.modalImage);
    // console.log("okay");
  },
  methods:{
    getSearch(){
      if(this.search.trim() != ''){

        this.loading = false;
        if(this.search.trim().length >= 1){
          api.searchPhoto({
            query:this.search.trim(),
            page: 1,
            per_page : 10,
            order_by : 'latest',
            orientation: 'squarish'
          },'search/photos?')
          .then((res)=>{
            // console.log(res);
            if(res.status == 200){
              this.datas = res.data.results.slice(0,6);
              this.loading = true;
            }

          })
          .catch((err)=>{

          })

        }else{
          api.searchPhoto({
            query:'africa',
            page: 1,
            per_page : 10,
            order_by : 'latest',
            orientation: 'squarish'
          },'search/photos?')
          .then((res)=>{
            // console.log(res);
            if(res.status == 200){
              this.datas = res.data.results.slice(0,6);
              this.loading = true;
            }

          })
          .catch((err)=>{

          })
        }

      }

    },
    modalImage(datas){

      // console.log(datas);
      // EventBus.$emit('scaleImage',datas);
      // $('body #image'+datas.id).css({transform:scale(1)});
      this.imageId = datas.id;
      this.name = datas.name;
      this.location = datas.location;
      this.hasImage = true;



      $('body .modalx-body .image-body').css({'background-image':`url(${datas.image})`,'background-repeat':'no-repeat','background-size': 'cover','background-position': 'center'});
      $('body .modalx').css({'display':'flex','justify-content':'center','visibility':'visible','opacity':1,'transition': 'visibility 0s, opacity 0.5s ease-in-out'});

    },
    closeModal(){
      this.imageId ="";
      this.name = "";
      this.location = "";
      this.hasImage = false;

      $('body .modalx-body .image-body').css({'background-image':`url()`,'background-repeat':'no-repeat','background-size': 'cover','background-position': 'center'});
      $('body .modalx').css({'display':'flex','visibility':'hidden','opacity':0,'transition' : 'visibility 0s, opacity 0.5s ease-in-out'});
    }

  }

}
</script>


<style lang="scss">
.image-body{
  width: 100%;
  height: 300px;
  margin-top: -70px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}

.modalx, .modal-overlay{
  position: absolute;
  top: 0;
  left:0;
  right:0;
  bottom: 0;
  // height: 100%;
}

.modalx{
  background-color: transparent;

  display: flex;
  visibility: hidden;
 opacity: 0;
 transition: visibility 0s, opacity 0.5s ease-in-out;
  // transition: all 5s ease-in-out;
}

.modal-overlay{
  background-color: #898989;
  opacity: 0.7;
  transition: all .5s ease-in-out;
}

.modalx-body,.modalx-body-container{
  width: 500px;
  height: 350px;
  background: #fff;
  margin-top: 7%;
  border-radius: 6px;
  transition: all .5s ease-in-out;
}
.closex{
  position: relative;
  right: -110%;
  top: -70px;
  font-size: 1.3em;
  cursor: pointer;
  color: #fff;
}
.infos{
  margin-left: 10px;
  margin-top: 10px;
}
.names{
  font-size: 1.1em;
  font-weight: bold;
}

.locate{
  font-size: 0.8em;
  font-weight: lighter;
}

 .has-search{
   margin-top: 20px;
 }
.has-search .form-control {
    padding-left: 2.375rem;
}

.has-search .form-control-feedback {
    position: absolute;
    z-index: 0;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;
    pointer-events: none;
    color: #aaa;
}

/* card */


#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
  // width : 80vw;
}


@media (max-width:650px){
  .closex{
    right: -100%;
  }
}
#search-div {
  padding: 30px;
  height: 150px;
  background: #dde2e9;
  margin: 10px auto;
}

.flex-justify-center{
  width: 80%;
  display: flex;
  justify-content: center;
}

@keyframes placeHolderShimmer{
  0%{
    background-position: -468px 0
  }
  100%{
    background-position: 468px 0
  }
}

.animated-background {
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: #f6f7f8;
  background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
  background-size: 800px 104px;
  height: 15px;
  position: absolute;
  width: 100px;
  left: 5px;
  bottom: 10px;
  border-radius: 6px;
}

.background-masker {
	 background: #fff;
	 position: absolute;
}
 .background-masker.header-top{
	 top: 6px;
	 left: 0;
	 right: 0;
	 height: 4px;
   // border-bottom-left-radius: 6px;
   // border-bottom-right-radius: 6px;
}

.no-data{
  text-align: center;
}

</style>
