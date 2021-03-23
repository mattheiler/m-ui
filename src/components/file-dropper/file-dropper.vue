<template>
  <div class="mui-file-dropper" :class="classes" @click="click" @dragenter="enter" @dragleave="leave" @dragover.prevent @drop.prevent="drop">
    <input type="file" ref="input" :multiple="multiple" :accept="accept" :disabled="disabled" @change="change" />
    <div v-if="files.length > 0" class="file-list">
      <div class="file" v-for="file of files" :key="file.name">{{ file.name }}</div>
    </div>
    <div v-else>
      <slot />
    </div>
  </div>
</template>

<script>
import { every, head, includes, isEmpty, pull, remove, some, split, startsWith } from 'lodash';

function validate(files, accepts) {
  if (isEmpty(accepts)) {
    return true;
  }

  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#Unique_content_specifiers
  // validate unique content specifiers extensions (e.g., .jpeg), namespaces (i.e., audio/*, image/*, video/*), and media types...

  const extensions = remove(accepts, accept => startsWith(accept, '.'));
  const namespaces = [];

  if (!isEmpty(pull(accepts, 'audio/*'))) namespaces.push(/audio\/.*/i);
  if (!isEmpty(pull(accepts, 'image/*'))) namespaces.push(/image\/.*/i);
  if (!isEmpty(pull(accepts, 'video/*'))) namespaces.push(/video\/.*/i);

  const isExtension = file => includes(extensions, head(file.name.match(/\.[^.]+$/)));
  const isNamespace = file => some(namespaces, namespace => file.type.matches(namespace) != null);
  const isMediaType = file => some(accepts, accept => file.type.toUpperCase() === accept.toUpperCase());

  return every(files, file => isExtension(file) || isNamespace(file) || isMediaType(file));
}

export default {
  name: 'mui-file-dropper',
  props: {
    accept: {
      type: String,
      default: null,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      files: [],
      dragging: false,
    };
  },
  computed: {
    classes() {
      return {
        dragging: this.dragging,
        disabled: this.disabled,
      };
    },
  },
  methods: {
    enter() {
      this.dragging = true;
    },
    leave() {
      this.dragging = false;
    },
    load(files) {
      this.$set(this, 'files', files);
      this.$emit('input', files);
    },
    change(e) {
      this.load(e.target.files);
    },
    drop(e) {
      this.dragging = false;
      const { files } = e.dataTransfer;
      if (!this.multiple && files.length > 1) {
        console.error("Only one file is allowed.");
        return;
      }
      if (!validate(files, split(this.accept, ','))) {
        console.error("At least one of the files you're trying to drop is invalid.");
        return;
      }
      this.load(files);
    },
    click() {
      this.$refs.input.click();
    },
  },
};
</script>

<style scoped lang="scss">
@import 'styles/layouts';

.mui-file-dropper {
  background-color: var(--mui-file-dropper-background, #eee);
  border: 1px dashed var(--mui-file-dropper-border, lightgray);
  border-radius: 4px;
  color: var(--mui-file-dropper-foreground, gray);
  cursor: pointer;
  line-height: 16px;
  min-height: 96px;
  padding: 8px;
  text-align: center;
  user-select: none;

  @include mui-flex(column);
  @include mui-flex-align(center, center);

  .file-error-list {
    .file-error {
      color: var(--mui-error-color, red);
    }
  }

  input {
    display: none;
  }

  &:hover,
  &.dragging {
    background-color: var(--mui-file-dropper-hover-background, lightgray);
    color: var(--mui-file-dropper-hover-foreground, inherit);
  }

  &.disabled {
    background-color: var(--mui-file-dropper-disabled-background, lightgray);
    color: var(--mui-file-dropper-disabled-foreground, inherit);
  }
}
</style>
