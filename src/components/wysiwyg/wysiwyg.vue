<template>
  <editor :init="init" :initial-value="value" @input="changeValue" />
</template>

<script>
import { join, map } from 'lodash';

import 'tinymce';
import 'tinymce/themes/modern/theme';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autolink';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/charmap';
import 'tinymce/plugins/print';
import 'tinymce/plugins/preview';
import 'tinymce/plugins/anchor';
import 'tinymce/plugins/searchreplace';
import 'tinymce/plugins/visualblocks';
import 'tinymce/plugins/code';
import 'tinymce/plugins/fullscreen';
import 'tinymce/plugins/insertdatetime';
import 'tinymce/plugins/media';
import 'tinymce/plugins/table';
import 'tinymce/plugins/contextmenu';
import 'tinymce/plugins/paste';

const PLUGINS = [
  'advlist',
  'autolink',
  'lists',
  'link',
  'image',
  'charmap',
  'print',
  'preview',
  'anchor',
  'searchreplace',
  'visualblocks',
  'code',
  'fullscreen',
  'insertdatetime',
  'media',
  'table',
  'contextmenu',
  'paste',
];

const TOOLBARS = [['undo', 'redo'], ['styleselect'], ['bold', 'italic'], ['alignleft', 'aligncenter', 'alignright', 'alignjustify'], ['bullist', 'numlist', 'outdent', 'indent'], ['link', 'image']];

export default {
  name: 'mui-wysiwyg',
  components: {
    editor: () => import('@tinymce/tinymce-vue/lib/es2015'),
  },
  props: {
    init: {
      type: Object,
      default() {
        return {
          branding: false,
          plugins: join(PLUGINS, ' '),
          toolbar: join(
            map(TOOLBARS, toolbar => join(toolbar, ' ')),
            ' | ',
          ),
          skin: 'lightgray',
        };
      },
    },
    value: {
      default: null,
    },
  },
  model: {
    prop: 'value',
    event: 'change',
  },
  methods: {
    changeValue(value) {
      this.$emit('change', value);
    },
  },
};
</script>

<style lang="scss">
// we're still missing fonts and imgs... look into loading folders modularly from vue cli
@import '~tinymce/skins/lightgray/skin.min.css';
@import '~tinymce/skins/lightgray/skin.mobile.min.css';
</style>