<script setup lang="ts">
import { Editor, rootCtx, defaultValueCtx, editorViewOptionsCtx } from '@milkdown/kit/core'
import { commonmark } from '@milkdown/kit/preset/commonmark'
import { listener, listenerCtx } from '@milkdown/kit/plugin/listener'
import { nord } from '@milkdown/theme-nord'
import { Milkdown, useEditor } from '@milkdown/vue'

const { readonly } = defineProps<{ readonly: boolean }>()
const content = defineModel<string>({ required: true })

useEditor((root) =>
  Editor.make()
    .config((ctx) => {
      ctx.set(rootCtx, root)
      ctx.set(defaultValueCtx, content.value)
      ctx.update(editorViewOptionsCtx, (prev) => ({
        ...prev,
        editable: () => !readonly,
      }))
      ctx.get(listenerCtx).markdownUpdated((_ctx, md) => {
        content.value = md
      })
    })
    .config(nord)
    .use(commonmark)
    .use(listener)
)
</script>

<template lang="pug">
Milkdown
</template>
