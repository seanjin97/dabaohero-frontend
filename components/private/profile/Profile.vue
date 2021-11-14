<template>
  <section class="section about-section gray-bg" id="about">
    <div class="container">
      <div class="row align-items-center flex-row-reverse">
        <div class="col-lg-6">
          <div class="about-text go-to">
            <h3 class="dark-color">About Me</h3>
            <h6 class="theme-color lead"></h6>
            <p></p>
            <div class="row about-list">
              <div class="col-md-6">
                <div class="media">
                  <label>Name</label>
                  <p>{{ userData.name }}</p>
                </div>
                <div class="media">
                  <label>Nickname</label>
                  <p>{{ userData.nickname }}</p>
                </div>
                <div class="media">
                  <label>Username</label>
                  <p>{{ userData.username }}</p>
                </div>
                <div class="media">
                  <label>Last Login</label>
                  <p>{{ loginDate }}</p>
                </div>
              </div>
              <div class="col-md-6"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-avatar">
            <img
              src="https://bootdey.com/img/Content/avatar/avatar7.png"
              title=""
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="counter">
        <div class="row">
          <div class="col-6 col-lg-3">
            <div class="count-data text-center">
              <h6 class="count h2">{{ userData.completed_orders }}</h6>
              <p class="m-0px font-w-600">Orders Fulfilled</p>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="count-data text-center">
              <h6 class="count h2">{{ userData.orders_requested }}</h6>
              <p class="m-0px font-w-600">Orders Requested</p>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="count-data text-center">
              <h6 class="count h2">{{ userData.rating }}</h6>
              <p class="m-0px font-w-600">Current Rating</p>
            </div>
          </div>
          <div class="col-6 col-lg-3">
            <div class="count-data text-center">
              <h6 class="count h2">{{ active_sessions }}</h6>
              <p class="m-0px font-w-600">Number of Active Sessions</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    userData: Object,
    loginDate: String,
    active_sessions: Number,
  },
};
</script>

<style>
body {
  color: #6f8ba4;
  margin-top: 20px;
}
.section {
  padding: 30px 0;
  position: relative;
}
.gray-bg {
  background-color: #f5f5f5;
}
img {
  max-width: 100%;
}
img {
  vertical-align: middle;
  border-style: none;
}
.about-text h3 {
  font-size: 45px;
  font-weight: 700;
  margin: 0 0 2px;
}
@media (max-width: 767px) {
  .about-text h3 {
    font-size: 35px;
  }
}
.about-text h6 {
  font-weight: 600;
  margin-bottom: 15px;
}
@media (max-width: 767px) {
  .about-text h6 {
    font-size: 18px;
  }
}
.about-text p {
  font-size: 18px;
  max-width: 450px;
}
.about-text p mark {
  font-weight: 600;
  color: #b97c20;
}

.about-list {
  padding-top: 10px;
}
.about-list .media {
  padding: 5px 0;
}
.about-list label {
  color: #b97c20;
  font-weight: 600;
  width: 88px;
  margin: 0;
  position: relative;
}
.about-list label:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  right: 11px;
  width: 1px;
  height: 12px;
  background: #b97c20;
  -moz-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -webkit-transform: rotate(15deg);
  transform: rotate(15deg);
  margin: auto;
  opacity: 0.5;
}
.about-list p {
  margin: 0;
  font-size: 15px;
}

@media (max-width: 991px) {
  .about-avatar {
    margin-top: 30px;
  }
}

.about-section .counter {
  padding: 22px 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
}
.about-section .counter .count-data {
  margin-top: 10px;
  margin-bottom: 10px;
}
.about-section .counter .count {
  font-weight: 700;
  color: #b97c20;
  margin: 0 0 5px;
}
.about-section .counter p {
  font-weight: 600;
  margin: 0;
}
mark {
  background-image: linear-gradient(
    rgba(252, 83, 86, 0.6),
    rgba(252, 83, 86, 0.6)
  );
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: 0 bottom;
  background-color: transparent;
  padding: 0;
  color: currentColor;
}
.theme-color {
  color: #fc5356;
}
.dark-color {
  color: #b97c20;
}
label::after {
  content: none !important;
}
</style>
