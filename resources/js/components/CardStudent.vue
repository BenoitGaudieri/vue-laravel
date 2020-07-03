<template>
    <div class="card">
        <img :src="student.img" :alt="student.name" class="card-img-top" />
        <div class="card-body">
            <h4 class="card-title">{{ student.name }}</h4>
            <div class="card-text">{{ student.descrizione }}</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        student: {
            type: Object,
            required: true
        }
    }
};
</script>

<style>
</style>