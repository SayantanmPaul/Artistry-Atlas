/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\app\admin\[[...index]]\page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import {defineConfig} from 'sanity'
import { structureTool } from 'sanity/structure'
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    structureTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            S.documentTypeListItem('about').title('About Myself'),
            orderableDocumentListDeskItem({type: 'tool', S, context}),
            orderableDocumentListDeskItem({type: 'category', S, context}),
            orderableDocumentListDeskItem({type: 'project', S, context}),
            orderableDocumentListDeskItem({ type: 'education', S, context }),
            orderableDocumentListDeskItem({ type: 'experience', S, context }),
            orderableDocumentListDeskItem({ type: 'links', S, context }),
        ])
      }
    }),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),

    vercelDeployTool(),
  ],
})
