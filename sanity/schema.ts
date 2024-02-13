import { type SchemaTypeDefinition } from 'sanity'
import about from './Schemas/about-schema'
import project from './Schemas/project-schema'
import tool from './Schemas/tools-schema'
import category from './Schemas/tools-category'
import education from './Schemas/education-schema'
import links from './Schemas/links-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ about, project, tool, category, education, links],
}
