import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'grey-raccoon',

  projectId: 'qow4keaz',
  dataset: 'erri-website',

  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
