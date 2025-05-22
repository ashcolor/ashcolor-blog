import { defineCollection, defineContentConfig, z } from "@nuxt/content";

export default defineContentConfig({
    collections: {
        blog: defineCollection({
            source: "blog/**/*.md",
            type: "page",
            schema: z.object({
                createdAt: z.string().optional(),
                updatedAt: z.string().optional(),
                title: z.string(),
                description: z.string().optional(),
                category: z.string().optional(),
                subCategory: z.string().optional(),
                tags: z.array(z.string()).optional(),
                thumbnail: z.string().optional(),
                isRecommend: z.boolean().optional(),
            }),
        }),
        studio: defineCollection({
            source: "studio/**/*.md",
            type: "page",
            schema: z.object({
                title: z.string(),
            }),
        }),
        other: defineCollection({
            source: "other/*.md",
            type: "page",
            schema: z.object({
                createdAt: z.string(),
                title: z.string(),
                description: z.string().optional(),
            }),
        }),
        singer: defineCollection({
            source: "data/synthesizer-v-singer.csv",
            type: "data",
            schema: z.object({
                body: z.array(
                    z.object({
                        release: z.string(),
                        name: z.string(),
                        version: z.string(),
                        language: z.string(),
                        gender: z.string(),
                        company: z.string(),
                        voice: z.string(),
                        illust: z.string(),
                        image_url: z.string().optional(),
                        dlsite_url: z.string().optional(),
                    })
                ),
            }),
        }),
        keyCaps: defineCollection({
            source: "data/amazon-keycap.csv",
            type: "data",
            schema: z.object({
                body: z.array(
                    z.object({
                        manufacturer: z.string(),
                        name: z.string(),
                        material: z.string(),
                        shape: z.string(),
                        printing: z.string(),
                        concept: z.string(),
                        notes: z.string(),
                        asin: z.string(),
                        image: z.string(),
                    })
                ),
            }),
        }),
    },
});
