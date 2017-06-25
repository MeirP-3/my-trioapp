<template>
    <div class="email-window">
        <email-compose v-if="isComposeMode" @exit-compose="exitCompose"></email-compose>
        <email-list :emails="emails" @show-details="showDetails" @delete-email="deleteEmail" :class="{'mob-hide': mobIsShownDetails, 'compose-hide': isComposeMode }" @compose-mode="compose">
        </email-list>
        <email-details :class="{'mob-hide': !mobIsShownDetails, 'compose-hide': isComposeMode}" :selected-email="selectedEmail" @mobHideDetails="mobHideDetails">
        </email-details>
    </div>
</template>

<script>
// TODO!! HOW TO FORCE WINDOW.WIDTH TO BE REACTIVE!
import EmailList from './EmailList'
import EmailDetails from './EmailDetails'
import EmailFilter from './EmailFilter'
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
            selectedEmail: null,
            mobIsShownDetails: false,
            isComposeMode: false,
        }
    },
    components: {
        EmailList,
        EmailDetails,
        EmailFilter,
        EmailCompose
    },
    methods: {
        showDetails(email) {
            this.mobIsShownDetails = true
            this.selectedEmail = email
            email.isRead = true
        },
        deleteEmail(email) {
            emailService.deleteEmail(email)
        },
        mobHideDetails() {
            this.mobIsShownDetails = false
        },
        compose() {
            this.isComposeMode = true
        },
        exitCompose() {
            this.isComposeMode = false
        }
    }
}

</script>

<style lang="scss">
$email-list-width: 40%;
$email-details-width: 56.5%;
.mob-hide, .compose-hide {
    display: none;
}
.from-time {
    display: flex;
    justify-content: space-between;
}

.email-window {
    min-width: 96vw;
    min-height: 96vh;
}

li {
    display: block;
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
        position: fixed;
        right: 8px;
        .mob-back {
            display: none;
        }
    }
    .mob-hide {
        display: initial;
    }
    .compose-hide {
        display: none;
    }
}
</style>
