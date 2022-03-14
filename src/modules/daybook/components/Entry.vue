<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 }})"
    >
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="ms-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>

        <div class="entry-description">
            Sit velit ullamco deserunt est irure. Labore laborum eiusmod deserunt in aute ea et aute enim duis mollit ut quis mollit. Amet nisi eiusmod enim excepteur officia exercitation. Occaecat veniam aliquip mollit in elit minim veniam. Pariatur eiusmod dolor sint officia sunt nisi proident reprehenderit do ea qui.
        </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
    }
    .entry-description{
        font-size: 12px;
    }
}

</style>