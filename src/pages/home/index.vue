<!--
  @name: index
  @description: TODO
  @author: Lingkai Shi
  @date: 8/10/2024 10:37 AM
  @version: 1.0
-->

<template>
  <el-container>
    <!-- Header -->
    <el-header>
      <h1>Welcome to Data Service Container</h1>
    </el-header>

    <!-- Main Content -->
    <el-main>
      <!-- Four Services Section -->
      <el-row :gutter="20" class="services-panel">
        <el-col :span="12">
          <el-card shadow="hover">
            <img src="path/to/icon1.png" class="service-icon" alt="Icon 1">
            <h3>Data Sharing Service</h3>
            <p>Provide data download service.</p>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover">
            <img src="path/to/icon2.png" class="service-icon" alt="Icon 2">
            <h3>Data Mapping Service</h3>
            <p>Provide src data to udx data or inverse.</p>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover">
            <img src="path/to/icon3.png" class="service-icon" alt="Icon 3">
            <h3>Data Refactor Service</h3>
            <p>Provide exchange node information between udx data.</p>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card shadow="hover">
            <img src="path/to/icon4.png" class="service-icon" alt="Icon 4">
            <h3>Visualization Service</h3>
            <p>Provide various visualization component.</p>
          </el-card>
        </el-col>
      </el-row>

      <!-- Container Status Information -->
      <el-row class="status-section" :gutter="20">
        <el-col :span="24">
          <el-card>
            <div class="container-info">
              <p>Host Name: Paxton</p>
              <p>OS: Windows_NT</p>
              <p>Version: 10.0.22631</p>
            </div>
            <div class="charts">
              <el-row :gutter="20">
                <el-col :span="12">
                  <MemoryUsageChart />
                </el-col>
                <el-col :span="12">
                  <DiskUsageChart />
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <!-- Local Area Networks -->
      <el-row class="lan-section" :gutter="20">
        <el-col :span="24">
          <el-table :data="lanData" style="width: 100%">
            <el-table-column prop="number" label="Number" width="150" />
            <el-table-column prop="hostName" label="Host Name" />
            <el-table-column prop="hostIP" label="Host IP" />
            <el-table-column prop="port" label="Port" width="150" />
          </el-table>
        </el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
import { reactive } from 'vue'
import MemoryUsageChart from '@/pages/home/com/MemoryUsageChart.vue'
import DiskUsageChart from '@/pages/home/com/DiskUsageChart.vue'

// LAN data for the table
const lanData = reactive([
  { number: 1, hostName: 'kingw', hostIP: '172.21.212.85', port: '8899' }
])
</script>

<style scoped>
.el-header {
  background-color: #e0f7fa;
  text-align: center;
  padding: 10px;
  font-size: 1.5rem;
}

.services-panel .el-card {
  text-align: center;
  padding: 20px;
}

.service-icon {
  width: 50px;
  margin-bottom: 10px;
}

.status-section .container-info {
  font-size: 1.2rem;
  margin-bottom: 20px;
}

.lan-section .el-table {
  margin-top: 20px;
}
</style>
