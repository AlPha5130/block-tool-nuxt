import { defineConfig, presetIcons, presetWebFonts, presetWind3 } from 'unocss'
import extractorPug from '@unocss/extractor-pug'

export default defineConfig({
  presets: [presetIcons(), presetWebFonts(), presetWind3()],
  extractors: [extractorPug()],
})
