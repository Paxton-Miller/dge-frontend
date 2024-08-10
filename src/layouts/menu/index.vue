<script setup>
import { ref } from 'vue'
import { useHeaderStore } from '@/store/header.js'

const store = useHeaderStore()

const iconList = ref(['share', 'lock', 'user', 'tickets', 'pie-chart'])
const icon = ref('menu')

const defaultActive = ref(localStorage.getItem('path') || '/admin/data-pubish')

const menuList = ref([
    {
      id: 1,
      authName: 'Home',
      path: 'home',
      order: 1,
    },
    {
      id: 2,
      authName: 'Data Service',
      path: 'data/service',
      children: [
        {
          id: 6,
          authName: '访问权限',
          path: 'admin/data-permission',
          children: [],
          order: null,
        },
        {
          id: 7,
          authName: '数据追踪',
          path: 'admin/data-track',
          children: [],
          order: null,
        },
        {
          id: 8,
          authName: '统计报表',
          path: 'admin/data-statistics',
          children: [],
          order: null,
        },
      ],
      order: 2,
    },
    {
      id: 3,
      authName: 'DataProcess Service',
      path: 'data/process',
      order: 3,
    },
    {
      id: 4,
      authName: 'Visualization Service',
      path: 'data/visualization',
      order: 4,
    },
  ],
)

const savePath = path => {
  localStorage.setItem('path', `/${path}`)
}
</script>

<template>
  <ElMenu
    active-text-color="#ffd04b"
    background-color="#304156"
    class="el-menu-vertical-demo"
    :default-active="defaultActive"
    text-color="#fff"
    router
    unique-opened
    :collapse="!store.siderType"
  >
    <div v-for="(itemApi, index) in menuList"
         :key="itemApi.id"
    >
      <ElSubMenu v-if="itemApi.children != undefined" :index="itemApi.id">
        <template #title>
          <ElIcon>
            <component :is="iconList[index]" />
          </ElIcon>
          <span>{{ itemApi.authName }}</span>
        </template>
        <ElMenuItem
          v-for="it in itemApi.children"
          :key="it.id"
          :index="`/${it.path}`"
          @click="savePath(it.path)"
        >
          <template #title>
            <ElIcon>
              <component :is="icon" />
            </ElIcon>
            <span>{{ it.authName }}</span>
          </template>
        </ElMenuItem>
      </ElSubMenu>
      <ElMenuItem v-else :index="`/${itemApi.path}`" @click="savePath(itemApi.path)">
        <template #title>
          <ElIcon>
            <component :is="iconList[index]" />
          </ElIcon>
          <span>{{ itemApi.authName }}</span>
        </template>
      </ElMenuItem>
    </div>
  </ElMenu>
</template>
