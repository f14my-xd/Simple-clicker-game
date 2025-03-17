import Cookies from "js-cookie";
import { e as escape_html } from "./escaping.js";
import "clsx";
let save_structure = {
  money: 0,
  level: 0,
  level_progress: 0
};
function get_save() {
  let save = Cookies.getJSON("save");
  if (save === void 0) {
    save = save_structure;
  }
  return save;
}
function Header($$payload, $$props) {
  let { header } = $$props;
  $$payload.out += `<div class="main"><div class="header svelte-z49bwd">${escape_html(header)}</div></div>`;
}
function Menu($$payload) {
  $$payload.out += `<div class="main svelte-etu3xl"><div class="menu-buttons svelte-etu3xl"><a href="/"><button class="menu-button svelte-etu3xl">Главная</button></a> <button class="menu-button svelte-etu3xl">Поддержать</button> <a href="/settings"><button class="menu-button svelte-etu3xl">Настройки</button></a></div> <div class="menu-line svelte-etu3xl"></div></div>`;
}
export {
  Header as H,
  Menu as M,
  get_save as g
};
