<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

body {
  background-color: #eee
}

.chat-btn {
  position: absolute;
  right: 14px;
  bottom: 30px;
  cursor: pointer
}

.chat-btn .close {
  display: none
}

.chat-btn i {
  transition: all 0.9s ease
}

#check:checked~.chat-btn i {
  display: block;
  pointer-events: auto;
  transform: rotate(180deg)
}

#check:checked~.chat-btn .comment {
  display: none
}

.chat-btn i {
  font-size: 22px;
  color: #fff !important
}

.chat-btn {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background-color: blue;
  color: #fff;
  font-size: 22px;
  border: none
}

.wrapper {
  position: absolute;
  right: 20px;
  bottom: 100px;
  width: 300px;
  background-color: #fff;
  border-radius: 5px;
  opacity: 0;
  transition: all 0.4s
}

#check:checked~.wrapper {
  opacity: 1
}

.header {
  padding: 13px;
  background-color: blue;
  border-radius: 5px 5px 0px 0px;
  margin-bottom: 10px;
  color: #fff
}

.chat-form {
  padding: 15px
}

.chat-form input,
textarea,
button {
  margin-bottom: 10px
}

.chat-form textarea {
  resize: none
}

#check {
  display: none !important
}
</style>

<script>
window.embeddedChatbotConfig = {
chatbotId: "GDegXyRMaPX4ji3irS7AX",
domain: "www.chatbase.co"
}

export default {
mounted() {
  const script = document.createElement("script");
  script.src = "https://www.chatbase.co/embed.min.js";
  script.setAttribute("chatbotId", window.embeddedChatbotConfig.chatbotId);
  script.setAttribute("domain", window.embeddedChatbotConfig.domain);
  script.defer = true;

  document.body.appendChild(script);
},
};
</script>