<template>
    <div>
        <h1>Home Page</h1>
        <div v-for="category in categories" :key="category.categoryName">
            <h2>{{ category.categoryName }}</h2>
            <ul>
                <li v-for="page in category.pages" :key="page.name"><router-link :to="`/${page.category}/${page.name}`">{{ page.title }}</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
import config from '@config/content.config';

export default {
    data () {
        return {
            categories: config
        }    
    }
}
</script>