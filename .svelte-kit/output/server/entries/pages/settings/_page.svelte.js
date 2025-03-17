import "clsx";
import { g as get_save, H as Header, M as Menu } from "../../../chunks/Menu.js";
import { c as pop, p as push } from "../../../chunks/index.js";
function MainSettings($$payload, $$props) {
  push();
  get_save();
  $$payload.out += `<div class="main"><div class="header svelte-od2d6z">Основные настройки</div> <button class="alert-button svelte-od2d6z">Сбросить сохранение</button></div>`;
  pop();
}
function _page($$payload) {
  Header($$payload, { header: "Simple clicker game | Настройки" });
  $$payload.out += `<!----> <div class="main svelte-1yvcm8h">`;
  Menu($$payload);
  $$payload.out += `<!----></div> `;
  MainSettings($$payload);
  $$payload.out += `<!---->`;
}
export {
  _page as default
};
