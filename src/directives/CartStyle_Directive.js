export default {
  bind (el, binding, vnode) {
    if (binding.arg === 'primary') {

    } else {
      el.classList.add('basic')
    }
  }
}
