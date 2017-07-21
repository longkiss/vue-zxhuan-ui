import Vue from "vue";
const AlertConstructor = Vue.extend(require('./alert.vue'))
const instance = new AlertConstructor({
    el: document.createElement('div')
});
AlertConstructor.prototype.closeAlert = function () {
    const el = instance.$el;
    el.parentNode && el.parentNode.removeChild(el);
    typeof this.callback == 'function' && this.callback();
};
const Alert = (options = {}) => {
    instance.msg = options.msg;
    instance.callback = options.callback;
    document.body.appendChild(instance.$el);
};
export default Alert;