<script setup lang="ts">
const fileInput = ref<HTMLInputElement | undefined>();
const thumbnailImg = ref("");
const thumbnailImages = ref<Array<File>>([]);
const filenames = ref([]);

const onChangeFileInput = () => {
    thumbnailImages.value.length = 0;
    if (!fileInput.value || !fileInput.value.files) {
        return;
    }
    const files = fileInput.value.files;

    for (const file of files) {
        if (!file) {
            return;
        }

        if (!file.type.startsWith("image/")) {
            return;
        }

        const reader = new FileReader();
        reader.onload = function (e) {
            if (!e.target) {
                return;
            }
            thumbnailImages.value.push(e.target.result);
        };
        reader.readAsDataURL(file);
    }
};

const onClickUploadButton = async () => {
    const files = fileInput.value.files;

    const formData = new FormData();
    for (const file of files) {
        formData.append("files[]", file);
    }

    try {
        const response = await fetch("/api/files", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            const data = await response.json();
            filenames.value = data?.filenames || [];
        } else {
            // console.error("File upload failed:", response.statusText);
        }
    } catch (error) {
        // console.error("Error uploading file:", error);
    }
};
</script>

<template>
    <div class="flex flex-col gap-4">
        <input
            ref="fileInput"
            type="file"
            class="file-input file-input-bordered w-full max-w-xs"
            accept="image/*"
            multiple
            @change="onChangeFileInput(e)"
        />
        <div class="flex flex-row gap-2 overflow-auto">
            <img v-show="thumbnailImages.length === 0" class="skeleton h-32 w-32 border" />
            <img
                v-for="image in thumbnailImages"
                :key="image"
                ref="thumbnailImg"
                :src="image"
                class="h-32 border"
            />
        </div>
        <button
            class="btn btn-primary btn-wide self-center"
            :class="{ 'btn-disabled': thumbnailImages.length === 0 }"
            @click="onClickUploadButton()"
        >
            アップロード
        </button>
        <div>
            <div v-for="filename in filenames" :key="filename">
                <p>PC用コード</p>
                <ProseCode>
                    {{ `![](${IMAGE_PATH_BASE}/img/pc/${filename})` }}
                </ProseCode>
                <p>スマホ用コード</p>
                <ProseCode>
                    {{ `![](${IMAGE_PATH_BASE}/img/sp/${filename})` }}
                </ProseCode>
            </div>
        </div>
    </div>
</template>
