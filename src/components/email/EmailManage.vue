<template>
    <div class="email-window">
        <email-compose v-if="isComposeMode" :email="12"></email-compose>
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
export default {
    props: {
        emails: {
            validator: emails => Array.isArray(emails)
        },
        selectedEmail: {
            type: Object
        }
    },
    data() {
        return {
            mobIsShownDetails: false,
            isComposeMode: false
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
            this.$emit('email-selected', email)
            this.mobIsShownDetails = true
        },
        deleteEmail(email) {
            this.$emit('delete-email', email)
        },
        mobHideDetails() {
            this.mobIsShownDetails = false
        },
        compose() {
            this.isComposeMode = true
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

body {
    color: #444;
}

.email-window {
    min-width: 96vw;
    min-height: 96vh;
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
