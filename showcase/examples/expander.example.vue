
<template>
  <div class="expander-example">
    <h3>Expander (expand collapse)</h3>
    <mui-checkbox v-model="disabled">Disabled</mui-checkbox>
    <mui-expander title="Expand!" :disabled="disabled">
      <div v-for="i in 10" :key="`lorem-${i}`">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend libero non lobortis varius. Nulla facilisi. Pellentesque commodo congue sem, id aliquet lectus. Sed aliquet, ligula
          commodo placerat vehicula, tortor dolor efficitur sem, id ultricies diam ipsum sed arcu. Proin gravida ligula nec congue tincidunt. Nunc lectus lacus, elementum sit amet felis sit amet,
          rutrum interdum lacus. Ut tincidunt non dolor et blandit. Curabitur vitae nisi non quam maximus viverra et sit amet enim.
        </p>
        <p>
          Nam blandit est in ligula ullamcorper, et commodo nibh imperdiet. Proin mauris nisl, ultricies sed ultricies a, gravida sit amet felis. Nulla non nisi lacinia, facilisis felis in, pharetra
          ipsum. Phasellus nec arcu sollicitudin, molestie tortor vel, congue justo. Etiam augue, condimentum vitae eros in, iaculis auctor elit. Morbi commodo consectetur orci, a bibendum magna
          egestas et. Morbi ac lobortis orci.
        </p>
        <p>
          Nullam luctus nunc nulla, non consectetur dolor dapibus nec. Sed tincidunt fermentum tortor a lacinia. Quisque interdum nisi eget sem sagittis ultricies. Nulla facilisi. Proin accumsan
          eleifend augue sed convallis. Vestibulum lobortis sodales tellus, ac laoreet eros posuere ac. Cras pulvinar commodo enim ac semper. In quis varius tellus, sed auctor nibh. Vestibulum
          sollicitudin ex eu erat viverra, et fermentum nibh mattis. Sed porttitor leo leo, hendrerit mattis ligula aliquet et. Vivamus cursus malesuada finibus.
        </p>
        <p>
          Maecenas nec ex id sem vulputate interdum. Phasellus luctus, est vitae suscipit mollis, lorem ipsum vehicula enim, vel facilisis magna dui ac est. Donec ac sapien dui. In nec turpis augue.
          Vestibulum facilisis leo id neque tempor dapibus. Sed mauris tellus, faucibus eget sem quis, tempus scelerisque elit. Morbi gravida nisl ut blandit cursus.
        </p>
        <p>
          Donec sit amet velit in metus placerat laoreet. Pellentesque tortor nibh, tristique ac aliquet vitae, ornare at nunc. Aenean congue sollicitudin consequat. Cras tristique leo sodales
          venenatis ultricies. Aliquam leo ex, convallis eget nunc vel, mollis pharetra risus. Cras elementum sem eu sagittis commodo. Aliquam porta ante vel tincidunt sollicitudin. Proin magna
          sapien, bibendum nec aliquet vel, ornare et sem. Ut convallis metus quis turpis gravida, eget suscipit tellus finibus. Ut turpis turpis, pretium et tellus in, vestibulum vehicula elit. In
          eget mattis metus, vel vestibulum nisl. Cras porttitor arcu purus, vitae vehicula elit consectetur eu. Cras molestie massa consectetur, feugiat velit sit amet, pellentesque ante. Nulla
          dapibus augue eu laoreet efficitur. Etiam a metus aliquam, aliquam felis ac, tempor nulla.
        </p>
      </div>
    </mui-expander>
  </div>
</template>

<script>
export default {
  name: 'expander-example',
  data() {
    return {
      disabled: false,
    };
  },
};
</script>

<style lang="scss" scoped>
</style>