<!--
  @name: projectDetail
  @description: TODO
  @author: Lingkai Shi
  @date: 7/10/2024 6:56 PM
  @version: 1.0
-->

<script setup lang="ts">
import { ref } from 'vue'
import { getProjectById } from '@/api/ProjectApi'
import AccessDenied from '@/pages/common/[...accessDenied].vue'

const project = ref()
const route = useRoute()
const isCreator = ref<boolean>(true)

const getProjectDetail = async () => {
  // get project by id
  const result = await getProjectById(route.query.id as unknown as number)
  if (result)
    project.value = result
}

const checkIdentity = async () => {
  // Check if the user is the creator of the project?
  if (localStorage.getItem('id') == project.value?.createUserId)
    isCreator.value = true
  else isCreator.value = false
}

onMounted(async () => {
  await getProjectDetail()
  await checkIdentity()
})
</script>

<template>
  <AccessDenied v-if="!isCreator" />
  <div style="height:700px;background: #5a5e66"></div>
</template>
