<template>
  <div>
    <h1>Send And Update With - props in input</h1>
    <div class="card bg-secondary">
      <div class="card-body">
        <div class="row">
          <div class="col-md-4 offset-md-4">
            <input type="text" :value="searchText" @input="$emit('updateText', $event.target.value)" class="form-control" />
            Parent: {{ searchText }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
    searchText: {
        type: String,
        required: true
    }
})
</script>
