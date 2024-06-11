<template>
    <div>
        Day la Settings's page
        <router-view></router-view>
    </div>
</template>

<script setup>
import { useMenu } from '../../../stores/use-menu';
const state = useMenu();
state.onSelectedKeys(['admin-settings']);
</script>