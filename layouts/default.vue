<template>
    <div>
        <NuxtLoadingIndicator />
        <CommonSubHeader class="hidden lg:flex"></CommonSubHeader>
        <header class="sticky top-0 z-50">
            <CommonHeader></CommonHeader>
        </header>
        <main
            class="container mx-auto flex max-w-7xl flex-col px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-12"
        >
            <slot />
        </main>
        <CommonFooter></CommonFooter>
    </div>
</template>
