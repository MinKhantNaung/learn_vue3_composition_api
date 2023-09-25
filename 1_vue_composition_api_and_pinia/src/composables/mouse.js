import {ref, onMounted, onUnmounted} from "vue"

export default function useMouse() {

    const x = ref(null)
    const y = ref(null)

    const updatePosition = (event) => {
        x.value = event.pageX 
        y.value = event.pageY
    }

    onMounted(() => {
        window.addEventListener('mousemove', updatePosition)
    })

    onUnmounted(() => {
        window.addEventListener('mousemove', updatePosition)
    })

    return {
        x,
        y,
    }
}