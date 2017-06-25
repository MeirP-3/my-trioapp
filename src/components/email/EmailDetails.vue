<template>
    <div class="email-details">
            <div class="email-header">
                <div v-if="selectedEmail" class="from-time">
                    <span class="from">{{selectedEmail.from}}</span>
                    <span class="time">{{selectedEmail.time}}</span>
                </div>
                <h4 v-if="selectedEmail">{{selectedEmail.subject}}</h4>
                <h4 v-else>no email</h4>
            </div>
            <div class="email-body">
                <p v-if="selectedEmail">{{selectedEmail.body}}</p>
                <button class="mob-back" @click="mobReturn">back</button>
            </div>
    </div>
</template>

<script>
export default {
    props: {
        selectedEmail: {
            type: Object
        }
    },
    methods: {
        mobReturn() {
            this.$emit('mobHideDetails')
        }
    }
}
</script>

<style lang="scss" scoped>
$email-header-height: 11vh;
$email-body-height: 70vh;
.email-header {
    height: $email-header-height;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em;
    box-shadow: 0 0 5px 0 #3367D6;
    margin-bottom: 8px;
    border-radius: 3px;
}

.email-body {
    position: relative;
    height: $email-body-height;
    padding: 1em;
    text-align: start;
    box-shadow: 0 0 5px 0 #3367D6;
    border-radius: 3px;
    overflow-y: scroll;
}

button.mob-back {
    position: absolute;
    bottom: 8px;
    left: 8px;
    min-height: 45px;
    min-width: 90px;
    border: none;
    border-radius: 3px;
    outline: none;
    background-color: #4377E6;
    color: #eee;
    font-size: 1.5em;
    cursor: pointer;
}
</style>
