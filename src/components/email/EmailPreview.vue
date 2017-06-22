<template>
    <li class="email-preview" @click="showDetails">
        <h4 :class="[{'read': email.isRead}]">{{email.subject}}</h4>
    </li>
</template>

<script>
export default {
    props: {
        email: {
            type: Object
        }
    },
    // data() {
    //     return {
    //         isRead: true
    //     }
    // },
    methods: {
        showDetails() {
            this.$emit('show-details', this.email)
        }
    }
}
</script>

<style lang="scss">
.subject {
    font-weight: 600;
}

.read {
    font-weight: 200;
}
</style>

