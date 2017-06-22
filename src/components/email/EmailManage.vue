<template>
    <div class="email-window">
        <email-list :emails="emails" @show-details="showDetails">
            <email-filter>
            </email-filter>
        </email-list>
        <email-details>
        </email-details>
    </div>
</template>

<script>
import EmailList from './EmailList'
import EmailDetails from './EmailDetails'
import EmailFilter from './EmailFilter'
export default {
    props: {
        emails: {
            validator: emails => Array.isArray(emails)
        }
    },
    components: {
        EmailList,
        EmailDetails,
        EmailFilter
    },
    methods: {
        showDetails(email) {
            this.$emit('email-selected', email)
        }
    }
}
</script>

