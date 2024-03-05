export const useNuxtPageLoading = () => {
    const nuxtApp = useNuxtApp();
    const loading = ref(false);
    nuxtApp.hook("page:start", () => {
        loading.value = true;
    });

    nuxtApp.hook("page:finish", () => {
        loading.value = false;
    });
    return { loading };
};
