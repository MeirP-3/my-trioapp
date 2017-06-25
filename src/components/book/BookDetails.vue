<template>
    <div class="book-details-container">
        <section class="book-details">
            <div @click="closeMe" class="close">
                <span>&times;</span>
            </div>
            <div class="img-and-small-details">
                <h1>{{book.title}}</h1>
                <img src="http://via.placeholder.com/250x150">
                <h3>${{book.price}}</h3>
                <button class="next-book-details" @click="requestNextBook"> &rarr; </button>
            </div>
            <p class="book-description">{{book.description}}</p>
        </section>
    </div>
</template>

<<script>
export default {
    name: 'book-details',
    props: ['book'],
    methods: {
        closeMe() {
            console.log('close me!');
            this.$emit('close');
        },
        requestNextBook() {
            console.log('Requesting Next');
            this.$emit('next');
        }
    }  
}
</script>

<style scoped>
.book-details-container {
    position: absolute;
    width: 100%;
    top: 2em;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
}

.book-details {
    position: relative;
    max-width: 700px;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.5);
    font-size: 1.5em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding: 1em;
}

.img-and-small-details {
    margin-right: 1em;
    position: relative;
    height: 100%;
}

.book-description::first-letter {
    font-size: 3em;
}

.close {
    position: absolute;
    top: 0;
    right: 0;
    width: 3em;
    height: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
}

.close span {
    font-size: 2em;
    transition: all 0.5s;
}

.close span:hover {
    font-size: 2.5em;
    font-weight: 900;
}

.close span:active {
    font-size: 3.5em;
    font-weight: 900;
}

button {
    font-size: 1em;
}

.next-book-details {
    font-family: cursive;
    position: absolute;
    bottom: 0;
    right: 0;
}

</style>
