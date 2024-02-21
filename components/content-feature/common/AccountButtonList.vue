<template>
    <div class="flex flex-row gap-4">
        <NuxtLink
            v-for="account in ACCOUNTS"
            :key="account.name"
            :to="account.url"
            :aria-label="account.name"
            target="_blank"
            class="btn btn-circle btn-outline btn-primary btn-sm"
        >
            <Icon :name="account.icon" size="24px"></Icon>
        </NuxtLink>
    </div>
</template>
