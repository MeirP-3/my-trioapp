<template>
    <div class="email-app">
        <email-manage v-if="emails" :emails="emails" @email-selected="emailSelected">
    
        </email-manage>
    </div>
</template>

<script>
import EmailManage from './EmailManage'
import emailService from '../../services/email.service.js'
export default {
    name: 'email-app',
    created() {
        emailService.getEmails().then(emails => {
            this.emails = emails
            if (this.emails.length) this.selectedEmail = emails[0].id;
        })
    },
    data() {
        return {
            emails: [],
            selectedEmail: 0
        }
    },
    components: {
        EmailManage
    },
    methods: {
        emailSelected(email) {
            this.selectedEmail = email.id
            email.isRead = true
        }
    }
}
</script>


<style lang="scss">
$email-list-width: 33%;
$email-details-width: 66%;
$email-header-height: 30%;
$email-body-height: 70%;
$email-email-details-list-height: 95vh;
$progress-bar-height: 2vh;
h1,
h2,
h3,
h4 {
    margin: 0;
    padding: 0;
}

.email-window {
    min-width: 96vw;
    min-height: 96vh;
    border: 1px dashed blue;
    .email-header {
        // height: $email-header-height;
        border: 1px dashed green;
    }
    .email-body {
        // height: $email-body-height;
        border: 1px dashed green;
    }
    .email-list,
    .email-details {
        border: 1px dashed green;
    }
    .email-details {
        display: flex;
        flex-flow: column nowrap;
    }
    .progress-bar {
        // height: $progress-bar-height;
        border: 1px dashed purple;
    }
    ul {
        list-style: none;
        padding: 0;
    }
    .email-preview {
        margin: 0.1em;
        margin-bottom: 0;
        border: 1px solid #666;
        text-align: start;
        padding: 0.5em;
        cursor: pointer;
    }
}

@media all and (min-width: 600px) {
    .email-window {
        display: flex;
        flex-flow: row nowrap;
    }
    .email-list {
        width: $email-list-width;
    }
    .email-details {
        width: $email-details-width;
    }
}
</style>
