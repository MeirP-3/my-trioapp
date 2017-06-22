<template>
    <div class="email-list">
        <router-link to="/email/compose">Compose</router-link>
        <div class="progress-bar">
            I am progress bar!
        </div>
        <ul v-if="emails.length">
            <email-preview v-for="email in emails" :key="email.id" :email="email" @show-details="showDetails">
            </email-preview>
        </ul>
    </div>
</template>

<script>
import EmailPreview from './EmailPreview'
export default {
    props: {
        'emails': {
            validator: emails => Array.isArray(emails)
        }
    },
    components: {
        EmailPreview
    },
    methods: {
        showDetails(email) {
            this.$emit('show-details', email)
        }
    }
}
</script>

