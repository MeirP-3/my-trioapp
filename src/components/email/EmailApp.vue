<template>
    <div class="email-app">
        <email-manage v-if="emails" :emails="emails" :selected-email="selectedEmail" @email-selected="emailSelected" @delete-email="deleteEmail">
        </email-manage>
    </div>
</template>

<script>
import EmailManage from './EmailManage'
import EmailCompose from './EmailCompose'
import emailService from '../../services/email.service.js'
export default {
    name: 'email-app',
    created() {
        emailService.getEmails().then(emails => {
            this.emails = emails
            if (this.emails.length) this.selectedEmail = emails[0];
        })
    },
    data() {
        return {
            emails: [],
            selectedEmail: null
        }
    },
    components: {
        EmailManage,
        EmailCompose
    },
    methods: {
        emailSelected(email) {
            this.selectedEmail = email
            email.isRead = true
        },
        deleteEmail(email) {
            emailService.deleteEmail(email)
        }
    }
}
</script>


