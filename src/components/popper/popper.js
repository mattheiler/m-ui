export const MuiPopper = {
  data() {
    return {
      popper: {
        trigger: null,
        placement: null,
        visible: false,
      },
    };
  },
  methods: {
    open(trigger, placement) {
      this.popper = {
        trigger,
        placement,
        visible: true,
      };
    },
    close() {
      this.popper.visible = false;
    },
  },
};
