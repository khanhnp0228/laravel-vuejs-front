<template>
    <div>
        Day la Role's page
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useMenu } from '../../../stores/use-menu';
const state = useMenu();
state.onSelectedKeys(['admin-roles']);
</script>