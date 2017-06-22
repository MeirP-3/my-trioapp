<template>
    <div class="email-window">
        <div class="mail-list">
            <div class="progress-bar">
                I am progress bar!
            </div>
            <h1>I am mail list!</h1>
        </div>
        <div class="current-mail">
            <div class="mail-header">
                <h1>I am mail header!</h1>
            </div>
            <div class="mail-body">
                <h1>I am mail body!</h1>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
$mail-list-width: 33%;
$current-mail-width: 66%;
$mail-header-height: 30%;
$mail-body-height: 70%;
$mail-current-mail-list-height: 95vh;
$progress-bar-height: 2vh;

.email-window {
    min-width: 96vw;
    min-height: 96vh;
    border: 1px dashed blue;
    .mail-header {
        // height: $mail-header-height;
        border: 1px dashed green;
    }
    .mail-body {
        // height: $mail-body-height;
        border: 1px dashed green;
    }
    .mail-list,
    .current-mail {
        border: 1px dashed green;
    }
    .current-mail {
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
    .mail-list {
        width: $mail-list-width;
    }
    .current-mail {
        width: $current-mail-width;
    }
}
</style>
