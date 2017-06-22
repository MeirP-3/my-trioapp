<template>
    <div class="email-window">
        <div class="email-list">
            <div class="progress-bar">
                I am progress bar!
            </div>
            <h1>I am email list!</h1>
        </div>
        <email-details>
        </email-details>
    </div>
</template>

<<script>
import EmailDetails from './EmailDetails'
export default {
  components: {
      
  }
}
</script>


<style lang="scss" scoped>
$email-list-width: 33%;
$email-details-width: 66%;
$email-header-height: 30%;
$email-body-height: 70%;
$email-email-details-list-height: 95vh;
$progress-bar-height: 2vh;

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
