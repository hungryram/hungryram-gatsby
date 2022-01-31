module.exports = {
  // Global CloudCannon configuration
  _inputs: {
    title: {
      type: 'text',
      comment: 'The title of your page.'
    }
  },
  _select_data: {
    colors: ['Red', 'Green', 'Blue']
  },

  // Read from ./src instead of .
  source: 'src',

  // Write to ./output/_cloudcannon/info.json instead of ./_cloudcannon/info.json
  output: 'output',

  // Populates the sidebar navigation and provides metadata for the editor
  collections_config: {
    people: {
      // Reads the contents of each file in this directory
      path: 'blog',

      // The URL template for items in this collection
      url: '/blog/[slug]/',

      // Tells CloudCannon this collection produces output files
      output: true,

      // CloudCannon collection-level configuration
      name: 'Posts',
      _enabled_editors: ['data']
    },
    pages: {
      // Tells CloudCannon to navigate to this path for this collection
      path: '',

      // Reads the contents of each file for this pattern (takes priority over path)
      glob: ['**/*.md', './src/pages/*.html'],

      // Tells CloudCannon to only show successfully parsed files for this collection
      // Useful for excluding other collections when using '' as path
      filter: 'strict',

      // Tells CloudCannon this collection produces output files
      output: true
    },
    data: {
      // Reads the contents of each file in this directory
      path: 'data',

      // How to parse the files in this collection
      parser: (filePath, raw, { parsers, filters }) => {
        const parsed = parsers['front-matter'].parse(raw);
        const slug = filters.slugify(parsed.title || '');
        return { ...data, slug };
      }
    }
  },
};