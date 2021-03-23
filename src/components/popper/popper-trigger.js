import { merge } from 'lodash';

const defaults = {
  event: 'click',
  placement: 'bottom-start',
};

export const MuiPopperTrigger = {
  bind(el, binding, vnode) {
    const { value } = binding;

    let options;

    switch (typeof value) {
      case 'object':
        options = merge({}, defaults, value);
        break;
      case 'string':
        options = merge({}, defaults, { name: value });
        break;
      default:
        options = merge({}, defaults);
        break;
    }

    const { name, event } = options;
    if (name == null) throw new Error('Name cannot be null.');

    const handler = async () => {
      const popper = vnode.context.$refs[name];
      if (popper != null) {
        popper.open(el, options.placement);
      }
    };

    vnode.$popper = { event, handler };

    el.addEventListener(event, handler);
  },
  componentUpdated(el, binding, newNode, oldNode) {
    newNode.$popper = oldNode.$popper;
  },
  unbind(el, binding, vnode) {
    const { event, handler } = vnode.$popper;

    el.removeEventListener(event, handler);

    delete vnode.$popper;
  },
};
