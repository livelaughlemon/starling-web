<script setup>
const props = defineProps({
    error: Object
})
</script>

<template>
    <div>
        <div class="pageHeader">
            <Header />
        </div>
        <div class="mainContent errorContent gridContainer">
            <div class="errorHeader">
                <h1 class="errorCode" :title="error.statusCode">😞</h1>
                <h1 class="errorTitle">Uh oh! Something went wrong here.</h1>
                <br>
                <p class="errorTitle">{{ error.statusCode }} &bull; {{ error.statusMessage }}</p>
                <br><br>
                <Button href="/" type="noleft">Return Home</Button>
                <Button href="/status">Check Server Status</Button>
                <Button href="/help">Get Help</Button>
            </div>
        </div>
    </div>
</template>