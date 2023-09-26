import { onMounted, ref } from "vue";

export default function getPosts(url) {
    const products = ref(null);
    const error = ref(null)

    const getProducts = async () => {
        try {
            const response = await fetch(url);
            products.value = await response.json();
        } catch (e) {
            error.value = e
        }
    }

    onMounted(() => {
        getProducts()
    })

    return {
        products,
        error,
    }
}