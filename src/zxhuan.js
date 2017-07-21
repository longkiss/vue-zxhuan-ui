import { CellItem, CellGroup } from "./cell";
import { Popup } from "./Popup";
import { Button } from "./button";
import { Alert, Confirm } from './dialog';
import { tabGroup, tabItem } from './tab';
import { Input } from './input';
import Vue from 'vue'
const install = function (Vue) {
    Vue.component(CellGroup.name, CellGroup);
    Vue.component(CellItem.name, CellItem);
    Vue.component(Popup.name, Popup);
    Vue.component(Button.name, Button);
    Vue.component(tabGroup.name, tabGroup);
    Vue.component(tabItem.name, tabItem);
    Vue.component(Input.name, Input);
}
Vue.prototype.$dialog = {
    // confirm: Confirm,
    alert: Alert,
    Confirm: Confirm
    // toast: Toast,
    // notify: Notify,
    // loading: Loading,
};
if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}
export default {
    install
};