import { type SchemaTypeDefinition } from 'sanity'
import about from './Schemas/about-schema'
import project from './Schemas/project-schema'
import tool from './Schemas/tools-schema'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ about, project, tool],
}
