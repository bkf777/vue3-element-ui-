<template>
  <el-card>
    <el-table style="background-color: transparent" border>
      <ElTableColumn prop="id" label="序号" width="100px" />
      <ElTableColumn prop="id" label="名称" />
      <ElTableColumn label="图片">
        <template #default="scope">
          {{ scope }}
        </template>
      </ElTableColumn>
      <ElTableColumn prop="id" label="重量" />
      <ElTableColumn label="操作" width="500">
        <template #default="scope">
          {{ scope }}
        </template>
      </ElTableColumn>
    </el-table>
  </el-card>
</template>

<script setup lang="ts"></script>

<style scoped></style>
