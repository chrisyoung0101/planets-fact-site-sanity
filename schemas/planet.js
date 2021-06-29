import { BiPlanet } from 'react-icons/bi';

export default {
  // computer name
  name: 'planet',
  // visible title in the UI
  title: 'Planets',
  type: 'document',
  icon: BiPlanet,
  fields: [
    {
      name: 'name',
      title: 'Planet Name',
      type: 'string',
      description: 'Name of the planet',
    },
    {
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options: {
        // source of the slug comes from the name field.  auto generated.
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'overview',
      title: 'Overview',
      type: 'text',
    },
    {
      name: 'internalStructure',
      title: 'Internal Structure',
      type: 'text',
    },
    {
      name: 'surfaceGeology',
      title: 'Surface Geology',
      type: 'text',
    },
    {
      name: 'sourceLink',
      title: 'Wikipedia Source Link',
      type: 'string',
    },
    {
      name: 'rotationTime',
      title: 'Rotation Time',
      type: 'string',
    },
    {
      name: 'revolutionTime',
      title: 'Revolution Time',
      type: 'string',
    },
    {
      name: 'radius',
      title: 'Radius',
      type: 'string',
    },
    {
      name: 'averageTemp',
      title: 'Average Temp',
      type: 'string',
    },

    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
