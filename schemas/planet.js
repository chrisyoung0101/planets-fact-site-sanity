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
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
};
