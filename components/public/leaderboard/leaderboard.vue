<!--eslint-disable max-len-->
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-12">
        <div class="card one">
          <div class="header text-center">
            <h2 class="title text-center">Leaderboard with Highest Order Made</h2>
            <div></div>
          </div>
          <div class="profile">
            <div class="person second" :key="item.key" v-for="(item,idx) in details">
              <div class="num" v-if="idx==1">2</div>
              <i class="fas fa-caret-up" v-if="idx==1"></i>
              <img :src="randomImage" alt="" class="photo" v-if="idx==1">
              <p class="link" v-if="idx==1">{{item.name}}</p>
              <p class="points" v-if="idx==1">{{item.orders}} order(s)</p>
            </div>
            <div class="person first" :key="item.key" v-for="(item,idx) in details">
              <div class="num" v-if="idx==0">1</div>
              <i class="fas fa-crown" v-if="idx==0"></i>
              <img :src="randomImage" alt="" class="photo main" v-if="idx==0">
              <p class="link-winner" v-if="idx==0">{{item.name}}</p>
              <p class="points-winner" v-if="idx==0">{{item.orders}} order(s)</p>
            </div>
            <div class="person third" :key="item.key" v-for="(item,idx) in details">
              <div class="num" v-if="idx==2">3</div>
              <i class="fas fa-caret-up" v-if="idx==2"></i>
              <img :src="randomImage" alt="" class="photo" v-if="idx==2">
              <p class="link" v-if="idx==2">{{item.name}}</p>
              <p class="points" v-if="idx==2">{{item.orders}} order(s)</p>
            </div>
          </div>
          <div class="rest mb-5">
            <div class="others flex">
              <div class="rank">
                <i class="fas fa-caret-up"></i>
                <p class="num">4</p>
              </div>
              <div class="info flex" :key="item.key" v-for="(item,idx) in details">
                <img :src="randomImage" alt="" class="p_img" v-if="idx==3">
                <p class="link" v-if="idx==3">{{item.name}}</p>
                <p class="points" v-if="idx==3">{{item.orders}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'leaderboard',
  props: ['details'],
  computed: {
    randomImage() {
      const num = Math.floor(Math.random() * 8 + 1);
      return `https://bootdey.com/img/Content/avatar/avatar${num}.png`;
    },
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');

.container{
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top:0; */
  height: 100%;
}

.card{
    background: #fff;
    transition: .5s;
    border: 0;
    margin-bottom: 30px;
    border-radius: .55rem;
    position: relative;
    width: 100%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.card .header{
  padding: 2rem;
  color: black;
}

.card .header .title{
  font-weight: 300;
  font-size: 20px;
}

.one .sort{
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-size: 14.1px;
}

.one .sort .day{
  padding: 0.4rem 1.2rem;
  margin: 0 0.1rem;
  cursor: pointer;
}

.one .sort .day.active,
.one .sort .day:active{
  background: rgba(210, 255, 213, 0.3);
  border-radius: 25px;
}

::selection{
  background: rgba(210, 255, 213, 0.3);
}

.photo{
  width: 120px;
  background: black;
  border-radius: 50%;
  border: 5px solid royalblue;
  box-shadow: 0 0 20px royalblue;
  margin: 1rem 0;
}

.main{
  width: 150px;
}

.profile{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
}

.profile .person{
  display: flex;
  margin: 1rem 0;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.profile .person.first{
  z-index: 10;
  transform: translateY(-10%);
}

.first .fa-crown{
  color: gold;
  filter: drop-shadow(0px 0px 5px gold);
}

.num{
  color: royalblue;
}

.fa-caret-up{
  color: royalblue;
  font-size: 21px;
}

.link{
  margin: 0.2rem 0;
  color: black;
  margin-top: -0.3rem;
  font-size: 17px;
}

.link-winner {
  font-size: 23px;
  color: rgb(11, 138, 85);
}

.points{
  color: royalblue;
  font-size: 17px;
}

.points-winner{
  color: royalblue;
  font-size: 23px;
}

.second{
  margin-right: -0.7rem !important;
}

.third{
  margin-left: -0.7rem !important;
}

.p_img{
  width: 70px;
  background: #fff;
  border-radius: 50%;
}

.flex{
  display: flex;
  align-items: center;
}

.others{
  display: flex;
  width: 100%;
  margin-top: 1rem;
  align-items: center;
  justify-content: center;
}

.info{
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 30px;
  background: rgba(210, 255, 213, 0.3);
}

.info .points{
  margin-left: 0.2rem;
  margin-right: 1.2rem;
}

.info .link{
  margin: 0 1rem;
}

.rank{
  display: flex;
  align-items: center;
  margin: 0 1rem;
  flex-direction: column-reverse;
}

.rank i{
  margin-top: -5px !important;
}

.rank .num{
  margin: 0 !important;
}
</style>
