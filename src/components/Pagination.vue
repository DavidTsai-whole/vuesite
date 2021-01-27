<template>
  <div>
    <nav aria-label="Page navigation example ">
      <ul class="pagination">
        <li class="page-item" :class="{ disabled: !pages.has_pre }">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="turnPage(pages.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          :class="{ active: pages.current_page === page }"
          v-for="(page, key) in pages.total_pages"
          :key="key"
        >
          <a class="page-link" @click.prevent="turnPage(page)" href="#">{{ page }}</a>
        </li>
        <li class="page-item" :class="{ disabled: !pages.has_next }">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="turnPage(pages.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
export default {
  props: ["pages"],
  data() {
    return {};
  },
  methods: {
    turnPage(px) {
      this.$emit("turnPage", px);
    },
  },
};
</script>
<style></style>
