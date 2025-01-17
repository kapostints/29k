import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';

import {
  DEFAULT_LANGUAGE_TAG,
  LANGUAGE_TAGS,
} from '../../shared/src/constants/i18n';

import {generateFilesCollectionFromi18nFiles} from './lib/i18n';
import {Widget as uniqueIdWidget} from './widgets/uniqueIdWidget.jsx';

import EXERCISE_FIELDS from './fields/exercise';

import content from '../../content/content.json';

CMS.init({
  config: {
    load_config_file: false,
    backend: {
      name: 'github',
      repo: '29ki/29k',
      branch: 'main',
      open_authoring: true,
    },
    local_backend: {
      url: 'http://localhost:1337/api/v1',
    },
    media_library: {
      name: 'cloudinary',
      config: {
        cloud_name: 'twentyninek',
        api_key: '898446174989532',
        default_transformations: [
          [
            {
              transformation: 'global',
              quality: 'auto',
            },
          ],
        ],
      },
    },
    publish_mode: 'editorial_workflow',
    media_folder: 'media',
    logo_url:
      'https://static.tildacdn.com/tild3863-3531-4934-a361-343061656664/29k_logo_white.png',
    i18n: {
      structure: 'single_file',
      locales: LANGUAGE_TAGS,
      default_locale: DEFAULT_LANGUAGE_TAG,
    },
    collections: [
      {
        name: 'exercises',
        label: 'Exercises',
        label_singular: 'exercise',
        folder: '/content/src/exercises',
        identifier_field: 'id',
        extension: 'json',
        format: 'json',
        create: true,
        delete: true,
        publish: true,
        summary: '{{fields.name}}',
        slug: '{{id}}',
        editor: {
          preview: false,
        },
        fields: EXERCISE_FIELDS,
        i18n: true,
      },
      generateFilesCollectionFromi18nFiles('ui', 'UI', content),
    ],
  },
});

CMS.registerWidget(uniqueIdWidget);
CMS.registerMediaLibrary(cloudinary);
