<template>
    <div class="email-list">
        <div class="list-header">
            <div class="progress-bar">
                <span>{{percentage}}% read</span>
                <div class="bar" :style="{ width: percentage + '%'}">
                </div>
            </div>
            <div class="compose" @click="compose">New email</div>
            <!--<email-filter>
                                    </email-filter>-->
        </div>
        <ul v-if="emails.length">
            <email-preview v-for="email in emails" :key="email.id" :email="email" @show-details="showDetails" @delete-email="deleteEmail">
            </email-preview>
        </ul>
    </div>
</template>

<script>

import EmailPreview from './EmailPreview'
export default {
    props: {
        emails: {
            validator: emails => Array.isArray(emails)
        },
    },
    computed: {
        percentage() {
            let read = this.emails.filter(email => email.isRead);
            return read.length? ((read.length / this.emails.length) * 100).toFixed() : 0;
        }
    },
    components: {
        EmailPreview
    },
    methods: {
        showDetails(email) {
            this.$emit('show-details', email)
        },
        compose() {
            this.$emit('compose-mode')
        },
        deleteEmail(email) {
            this.$emit('delete-email', email)
        }
    }
}
</script>


<style lang="scss" scoped>
$progress-bar-height: 1.3em;
.list-header {
    height: 120px;
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 0 5px 0 #3367D6;
    border-radius: 3px;
    margin-bottom: 8px;
}

.progress-bar {
    width: 100%;
    margin-bottom: 0.5em;
    position: relative;
    box-shadow: 0 0 5px 0 #0f0;
    border-radius: 3px;
    height: 2em;
    span {
        position: absolute;
        left: 2px;
    }
}

.bar {
    height: 100%;
    background-color: #0f0;
}

.compose {
    padding: 0.3em;
    border-radius: 0.4em;
    min-width: 50px;
    background-color: #3367D6;
    cursor: pointer;
    color: white;
    font-size: 1.2em;
}

.email-details {
    display: flex;
    flex-flow: column nowrap;
}

ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
</style>

