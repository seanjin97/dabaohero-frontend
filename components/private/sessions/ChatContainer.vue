<!--eslint-disable max-len-->
<template>
  <c-box class="container">
    <c-box class="row clearfix justify-content-center">
      <c-box class="col-lg-12">
        <c-box class="card chat-app">
          <c-box class="people-list" v-show="sessionsLoading">
            <c-flex justify="center">
              <c-spinner
                mt="12"
                thickness="4px"
                speed="0.65s"
                empty-color="green.200"
                color="vue.500"
                size="xl"
              />
            </c-flex>
          </c-box>
          <c-box v-show="!sessionsLoading" id="plist" class="people-list">
            <c-box
              class="searchBar input-group"
              style="
                position: sticky;
                border: 20px solid white;
                z-index: 10;
                top: 0px;
              "
            >
              <input
                type="text"
                class="form-control"
                placeholder="Search..."
                v-model="search"
              />
            </c-box>
            <ul class="list-unstyled chat-list mt-2 mb-0" style="z-index: 1">
              <session
                v-for="(session, idx) of filteredSession"
                :key="session.key"
                :session="session"
                v-model="index"
                :value="idx"
                @selectSession="$emit('selectSession', $event)"
                @getDabaoer="getDabaoer"
              />
            </ul>
          </c-box>
          <c-box class="chat">
            <c-box class="chat-header clearfix">
              <c-box class="row">
                <c-box class="col-lg-6" v-show="sessionId">
                  <a
                    href="javascript:void(0);"
                    data-toggle="modal"
                    data-target="#view_info"
                  >
                    <img
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="avatar"
                    />
                  </a>
                  <c-box class="chat-about">
                    <h6 class="m-b-0 mt-2">
                      {{ dabaoer.key === username ? 'You' : dabaoer.key }}
                      <span class="text-secondary">(Host) </span>
                      <span>
                        and
                        {{
                          currentVisibleSession &&
                          currentVisibleSession.leechers.length
                        }}
                        Leecher(s)</span
                      >
                    </h6>
                    <h6>
                      <c-badge
                        >{{ dabaoer.rating }}
                        <i class="fas fa-star text-warning"></i
                      ></c-badge>
                    </h6>
                  </c-box>
                </c-box>
                <c-box class="col-lg-6 hidden-sm text-right">
                  <!-- <a class="btn btn-warning float-right" v-if="dabaoerCheck">
                    <button @click="$emit('endSession')">
                      <i class="fas fa-hourglass-end" style="color: white"></i>
                    </button>
                  </a> -->
                  <c-popover>
                    <c-popover-trigger>
                      <c-button bg="red" class="float-end" v-show="dabaoerCheck"
                        ><i
                          class="fas fa-hourglass-end"
                          style="color: white"
                        ></i
                      ></c-button>
                    </c-popover-trigger>
                    <c-popover-content z-index="4">
                      <c-popover-arrow />
                      <c-popover-close-button />
                      <c-popover-header>Delete confirmation</c-popover-header>
                      <c-popover-body>
                        <c-text
                          >Are you sure you want to end this session?</c-text
                        >
                        <button
                          @click="$emit('endSession')"
                          class="m-3 btn btn-dabao fw-bold btn-lg"
                        >
                          Yes
                        </button>
                      </c-popover-body>
                    </c-popover-content>
                  </c-popover>
                  <a class="btn btn-warning float-right" v-show="leecherCheck">
                    <button
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                    >
                      <i class="fa fa-star"></i>
                    </button>
                  </a>
                </c-box>
                <div
                  class="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">
                          Rate your dedicated dabaoer
                        </h5>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <form>
                          <div class="mb-3">
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio1"
                                value="1"
                                v-model="rating"
                              />
                              <label class="form-check-label" for="inlineRadio1"
                                >1</label
                              >
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio2"
                                value="2"
                                v-model="rating"
                              />
                              <label class="form-check-label" for="inlineRadio2"
                                >2</label
                              >
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio3"
                                value="3"
                                v-model="rating"
                              />
                              <label class="form-check-label" for="inlineRadio3"
                                >3</label
                              >
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio3"
                                value="4"
                                v-model="rating"
                              />
                              <label class="form-check-label" for="inlineRadio3"
                                >4</label
                              >
                            </div>
                            <div class="form-check form-check-inline">
                              <input
                                class="form-check-input"
                                type="radio"
                                name="inlineRadioOptions"
                                id="inlineRadio3"
                                value="5"
                                v-model="rating"
                              />
                              <label class="form-check-label" for="inlineRadio3"
                                >5</label
                              >
                            </div>
                          </div>
                        </form>
                      </div>
                      <div class="modal-footer">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          data-bs-dismiss="modal"
                          @click="$emit('endSession')"
                        >
                          Close
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="submitRating()"
                          data-bs-dismiss="modal"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </c-box>
            </c-box>
            <div class="chat-history">
              <div v-show="!sessionId">
                <h1 style="font-size: 30px" class="text-center">
                  Select a chat to get started
                </h1>
              </div>
              <ul class="m-b-0">
                <li class="clearfix">
                  <message
                    v-for="(message, idx) in messages"
                    :key="idx"
                    :message="message"
                    :username="username"
                  />
                  <div ref="scrollToMe"></div>
                </li>
              </ul>
            </div>
            <div
              class="chat-message clearfix"
              v-show="sessionId && sessionActiveCheck"
            >
              <div class="input-group mb-0">
                <input
                  type="text"
                  class="form-control"
                  @keyup.enter="emitMessage()"
                  v-model="newMessage"
                  placeholder="Enter message"
                />
                <div class="input-group-prepend">
                  <span class="input-group-text btn btn-warning">
                    <button @click="emitMessage()">
                      <i class="fa fa-send" style="color: white"></i>
                    </button>
                  </span>
                </div>
              </div>
            </div>
            <c-box
              m="4"
              class="chat-message clearfix"
              v-show="!sessionId || !sessionActiveCheck"
            >
            </c-box>
          </c-box>
        </c-box>
      </c-box>
    </c-box>
  </c-box>
</template>

<script>
import Message from './Message.vue';
import Session from './Session.vue';

export default {
  name: 'Chat',
  components: { Message, Session },
  data() {
    return {
      newMessage: '',
      search: '',
      // dabaoer: 'sdfdsf',
      index: 0,
      rating: null,
      dabaoer: '',
    };
  },
  props: {
    sessionId: String,
    messages: Object,
    username: String,
    sessions: Array,
    id: Number,
    sessionsLoading: Boolean,
  },
  methods: {
    emitMessage() {
      if (this.newMessage) {
        this.$emit('sendMessage', {
          message: this.newMessage,
          sessionId: this.sessionId,
        });
        this.newMessage = '';
        this.scrollToElement();
      }
    },
    async submitRating() {
      const url = `${process.env.BACKEND_URL}/user/rate`;
      const token = await this.$auth.strategy.token.get();
      const data = await this.$axios.$post(
        url,
        {
          username: this.username,
          rating: Number(this.rating),
          dabaoer: this.dabaoer.key,
          session_code: this.sessionId,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      if (data) {
        this.$emit('clearSession');
      }
    },
    getDabaoer(x) {
      this.dabaoer = x;
    },
    scrollToElement() {
      const el = this.$refs.scrollToMe;

      if (el) {
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: 'smooth' });
      }
    },
  },
  updated() {
    this.scrollToElement();
  },
  computed: {
    trimmedId() {
      if (this.sessionId) {
        return this.sessionId.slice(0, 5);
      }
      return null;
    },
    filteredSession() {
      if (this.search.length !== 0) {
        return this.sessions.filter((session) =>
          session.key.slice(0, 5).match(this.search),
        );
      }
      return this.sessions;
    },
    dabaoerCheck() {
      if (this.sessions.length > 0) {
        const sessionFound = this.sessions.find(
          (session) => session.key === this.sessionId,
        );
        if (sessionFound !== undefined) {
          return sessionFound.dabaoer.key === this.username;
        }
        return null;
      }
      return null;
    },
    leecherCheck() {
      // return this.sessions.find((session) => session.key === this.sessionId).dabaoer
      // && !this.sessions.find((session) => session.key === this.sessionId).is_active;
      if (this.sessions.length > 0) {
        const sessionFound = this.sessions.find(
          (session) => session.key === this.sessionId,
        );
        if (sessionFound !== undefined) {
          return (
            sessionFound.dabaoer.key !== this.username &&
            !this.sessions.find((session) => session.key === this.sessionId)
              .is_active
          );
        }
        return null;
      }
      return null;
    },
    sessionActiveCheck() {
      if (this.sessions.length > 0 && this.sessionId) {
        const selectedSession = this.sessions.find(
          (session) => session.key === this.sessionId,
        );
        return selectedSession.is_active;
      }
      return null;
    },
    currentVisibleSession() {
      if (this.sessions.length > 0 && this.sessionId) {
        const selectedSession = this.sessions.find(
          (session) => session.key === this.sessionId,
        );
        console.log(selectedSession);
        return selectedSession;
      }
      return null;
    },
  },
};
</script>

<style>
/* eslint-disable max-len */
.container {
  height: 100%;
}
.card {
  background: #fff;
  transition: 0.5s;
  border: 0;
  margin-bottom: 30px;
  border-radius: 0.55rem;
  position: relative;
  width: 100%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
body {
  background-color: #f4f7f6;
}

.chat-app .people-list {
  width: 280px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 7;
}
.chat-app .chat {
  margin-left: 280px;
  border-left: 1px solid #eaeaea;
}
.people-list {
  -moz-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  height: 550px;
  overflow: auto;
}
.people-list .chat-list li {
  padding: 10px 25px;
  list-style: none;
  border-radius: 3px;
}
.people-list .chat-list li:hover {
  background: #efefef;
  cursor: pointer;
}
.people-list .chat-list li.active {
  background: #efefef;
}
.people-list .chat-list li .name {
  font-size: 15px;
}
.people-list .chat-list img {
  width: 45px;
  border-radius: 50%;
}
.people-list img {
  float: left;
  border-radius: 50%;
}
.people-list .about {
  float: left;
  padding-left: 8px;
}
.people-list .status {
  color: #999;
  font-size: 13px;
}
.chat .chat-header {
  padding: 15px 20px;
  border-bottom: 2px solid #f4f7f6;
}
.chat .chat-header img {
  float: left;
  border-radius: 40px;
  width: 40px;
}
.chat .chat-header .chat-about {
  float: left;
  padding-left: 10px;
}
.chat-history {
  height: 450px;
  overflow: auto;
}
.chat .chat-history {
  padding: 20px;
  border-bottom: 2px solid #fff;
}
.chat .chat-history ul {
  padding: 0;
}
.chat .chat-history ul li {
  list-style: none;
  margin-bottom: 30px;
}
.chat .chat-history ul li:last-child {
  margin-bottom: 0px;
}
.chat .chat-history .message-data {
  margin-bottom: 15px;
}
.chat .chat-history .message-data img {
  border-radius: 40px;
  width: 40px;
}
.chat .chat-history .message-data-time {
  color: #434651;
  padding-left: 6px;
}
.chat .chat-history .message {
  /* color: #444; */
  padding: 18px 20px;
  line-height: 26px;
  font-size: 16px;
  border-radius: 7px;
  display: inline-block;
  position: relative;
}
.chat .chat-history .message:after {
  bottom: 100%;
  left: 7%;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-bottom-color: #fff;
  border-width: 10px;
  margin-left: -10px;
}

.chat .chat-history .my-message:after {
  bottom: 100%;
  left: 30px;
  border: solid transparent;
  content: ' ';
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  /* border-bottom-color: black; */
  border-width: 10px;
  margin-left: -10px;
}
.chat .chat-history .other-message {
  background: #e8f1f3;
  text-align: right;
}
.chat .chat-history .other-message:after {
  border-bottom-color: #e8f1f3;
  left: 93%;
}
.chat .chat-message {
  padding: 20px;
}
.online,
.offline,
.me {
  margin-right: 2px;
  font-size: 8px;
  vertical-align: middle;
}
.online {
  color: #86c541;
}
.offline {
  color: #e47297;
}
.me {
  color: #1d8ecd;
}
.float-right {
  float: right;
}
.clearfix:after {
  visibility: hidden;
  display: block;
  font-size: 0;
  content: ' ';
  clear: both;
  height: 0;
}
@media only screen and (max-width: 767px) {
  .searchBar {
    display: none;
  }
  .chat-app .people-list {
    width: 100px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 7;
  }
  .chat-app .chat {
    margin-left: 80px;
    border-left: 1px solid #eaeaea;
  }
}
@media only screen and (min-width: 768px) and (max-width: 992px) {
  .chat-app .chat-list {
    height: 650px;
  }
  .chat-app .chat-history {
    height: 600px;
    /* overflow-x: auto; */
  }
  .chat-app .people-list {
    height: 685px;
    overflow-y: auto;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1) {
  .chat-app .chat-list {
    height: 480px;
    overflow-x: auto;
  }
  .chat-app .chat-history {
    height: calc(100vh - 350px);
    overflow-x: auto;
  }
}
</style>
