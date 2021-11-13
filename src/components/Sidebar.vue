<template>
    <b-sidebar 
      position="static"
      :mobile="mobile"
      :expand-on-hover="expandOnHover"
      :reduce="reduce"
      :delay="expandWithDelay ? 500 : null"
      type="is-light"
      open
    >
      <div class="p-1">
        <b-menu class="is-custom-mobile">
            <b-menu-list label="Catégories">
                <b-menu-item v-for="(category, index) in categories" v-bind:key="category.id" :active="index === 0" :expanded="index === 0" :label="category.categoryName">
                    <b-menu-item v-for="page in category.pages" v-bind:key="page.id" :label="page.title" tag="router-link" :to="`/${page.category}/${page.name}`"></b-menu-item>                    
                </b-menu-item>
            </b-menu-list>
        </b-menu>
    </div>
    </b-sidebar>
</template>
<script>
import config from '@config/content.config';

export default {
  data() {
    return {
      expandOnHover: false,
      expandWithDelay: false,
      mobile: "reduce",
      reduce: false,
      categories: config,
    };
  }
}
</script>