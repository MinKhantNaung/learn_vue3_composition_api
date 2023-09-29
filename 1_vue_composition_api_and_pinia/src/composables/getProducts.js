import { onMounted, ref, unref } from "vue";

export default function getPosts() {
    const products = ref(null);
    const error = ref(null)

    const getProductsByApi = async (url) => {
        try {
            const response = await fetch(url);
            products.value = await response.json();
        } catch (e) {
            error.value = e
        }
    }

    return {
        products,
        error,
        getProductsByApi
    }
}