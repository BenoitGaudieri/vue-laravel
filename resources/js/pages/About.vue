<template>
    <div class="home">
        <h1 class="mb-5">About</h1>

        <h3 class="mb-3">Students</h3>

        <!-- Mostriamo qualcosa se sta caricando -->
        <div v-if="students === null" class="loader">Loadingu</div>
        <div v-else class="row">
            <!-- ciclo for degli studenti -->
            <div
                v-for="student in students"
                :key="student.id"
                class="col-4 mb-4"
            >
                <card-student :student="student"></card-student>
            </div>
        </div>
    </div>
</template>

<script>
// Use card student
import CardStudent from "../components/CardStudent.vue";

export default {
    // Use CardStudent
    components: {
        CardStudent
    },
    data() {
        return {
            students: null
        };
    },
    mounted() {
        // salviamo il contesto che ci serve
        const ctx = this;

        axios
            .get("api/students")
            .then(function(response) {
                // handle success
                // utilizziamo il contesto della data
                ctx.students = response.data;
            })
            .catch(function(error) {
                // handle error
                console.log(error);
            });
    }
};
</script>

<style scoped lang="scss">
</style>
