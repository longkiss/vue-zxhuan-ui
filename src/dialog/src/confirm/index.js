import Vue from "vue";
const ConfirmConstructor = Vue.extend(require('./Confirm.vue'))
const instance = new ConfirmConstructor({
    el: document.createElement('div')
});
ConfirmConstructor.prototype.closeConfirm = function () {
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
    typeof this.callback == 'function' && this.callback();
};
const Confirm = (options = {}) => {
    instance.msg = options.msg;
    instance.title = options.title;
    instance.callback = options.callback;
    document.body.appendChild(instance.$el);
};
export default Confirm;