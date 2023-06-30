<template>
    <header class="sticky top-0">
        <div class="navbar bg-base-200">
            <div class="container m-auto">
                <div class="navbar-start">
                    <div class="dropdown">
                        <label tabindex="0" class="btn-ghost btn lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </label>
                        <ul
                            tabindex="0"
                            class="dropdown-content menu rounded-box menu-sm mt-3 w-52 bg-base-100 p-2 shadow"
                        >
                            <li
                                v-for="category in BLOG_CATEGORIES"
                                :key="category.name"
                                :to="category.path"
                                class="link-hover link"
                            >
                                <NuxtLink to="">{{ category.name }}</NuxtLink>
                            </li>
                            <li><NuxtLink to="/profile">運営者情報</NuxtLink></li>
                            <li><NuxtLink to="">お問い合わせ</NuxtLink></li>
                        </ul>
                    </div>
                    <NuxtLink to="/" class="btn-ghost btn text-xl normal-case">{{
                        BLOG_TITLE
                    }}</NuxtLink>
                </div>
                <div class="navbar-center hidden lg:flex">
                    <ul class="menu menu-horizontal px-1">
                        <li
                            v-for="category in BLOG_CATEGORIES"
                            :key="category.name"
                            :to="category.path"
                            class="link-hover link"
                        >
                            <NuxtLink to="">{{ category.name }}</NuxtLink>
                        </li>
                        <li><NuxtLink to="/profile">運営者情報</NuxtLink></li>
                        <li><NuxtLink to="/contact">お問い合わせ</NuxtLink></li>
                    </ul>
                </div>
                <div class="navbar-end flex">
                    <NuxtLink to="https://twitter.com/ashcolor06" target="_blank" class="btn">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            class="fill-current"
                        >
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
                            ></path>
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </header>
</template>
