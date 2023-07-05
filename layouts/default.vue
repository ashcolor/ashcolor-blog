<template>
    <div>
        <CommonHeader></CommonHeader>
        <main class="container mx-auto flex max-w-7xl flex-col px-4 py-12 sm:px-6 md:px-8">
            <slot />
        </main>
        <CommonFooter></CommonFooter>
    </div>
</template>
