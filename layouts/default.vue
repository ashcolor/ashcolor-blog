<template>
    <div>
        <CommonHeader></CommonHeader>
        <main class="container mx-auto flex flex-col px-4 py-12 sm:px-6 md:px-8">
            <slot />
        </main>
        <CommonFooter></CommonFooter>
    </div>
</template>
