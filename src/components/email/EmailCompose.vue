<template>
  <div class="compose">
    <h1 v-if="email">compose</h1>
    <h1 v-else>Wait a Sec...</h1>
    <form>
      <div class="to">
        <label>To:</label>
        <input type="email" v-model="email.to" required>
      </div>
  
      <div class="subject">
        <label>Subject:</label>
        <input type="text" v-model="email.subject">
      </div>
      
      <div class="body">
        <textarea placeholder="write your things here..." v-model="email.body"></textarea>
      </div>
      
      <button type="submit" @click="send">Send</button>
      <button @click="exit">Cancel</button>

    </form>
  </div>
</template>

<script>
import emailService from '../../services/email.service.js'
export default {
  created() {
    emailService.createId().then(id => this.email.id = id)
  },
  data() {
    return {
      email: {
        id: 0,
        from: 'me',
        to: '',
        time: '',
        subject: '',
        body: '',
        isRead: false
      }
    }
  },
  methods: {
    exit() {
      this.$emit('exit-compose')
    },
    send() {
      emailService.sendEmail(this.email)
      this.exit()
    }
  }
}
</script>

<style>
.compose, form {
  width: 96vw;
}
.to, .subject {
  display: flex;
  justify-content: space-between;
}
input {
  margin-bottom: 8px;
}
input,
textarea {
  max-width: 85vw;
  outline: none;
  border: none;
  box-shadow: 0 0 5px 0 #0f0;
}

textarea {
  height: 60vh;
}
@media all and (min-width: 250px) {

}
</style>