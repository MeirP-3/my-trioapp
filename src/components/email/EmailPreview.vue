<template>
    <li class="email-preview" @click="showDetails">
        <div class="from-time">
            <span :class="[{'read': email.isRead}, 'from']">{{email.from}}</span>
            <span :class="[{'read': email.isRead}, 'time']">{{email.time}}</span>
        </div>
        <div class="subject">
            <span :class="[{'read': email.isRead}, 'subject']">{{email.subject}}</span>
            <div class="delete-email" @click.stop="deleteEmail">
                <span>&times;</span>
            </div>
        </div>
        <div class="body">
            <p :class="{read: email.isRead}">{{email.body}}</p>
        </div>
    </li>
</template>

<script>
export default {
    props: {
        email: {
            type: Object
        }
    },
    methods: {
        showDetails() {
            this.$emit('show-details', this.email)
        },
        deleteEmail() {
            this.$emit('delete-email', this.email)
        }
    }
}
</script>

<style lang="scss" scoped>
.email-preview {
    margin: 0;
    margin-bottom: 8px;
    padding: 8px;
    cursor: pointer;
    height: 70px;
    font-weight: 600;
    overflow: hidden;
    box-shadow: 0 0 5px 0 #3367D6;
    border-radius: 3px;
}

.subject {
    text-align: center;
    position: relative;
}

.body {
    font-size: 0.8em;
    font-weight: 300;
    text-align: start;
    padding: 0;
    margin: 0;
}

.delete-email {
    cursor: pointer;
    position: absolute;
    width: 1.5em;
    height: 1.5em;
    top: 0;
    right: 0.5em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.delete-email>span {
    transition: all 0.5s;
}

.delete-email:hover>span {
    font-size: 1.2em;
    font-weight: bold;
}

.read {
    font-weight: 200;
}
</style>

