import "clsx";
import { e as escape_html } from "../../chunks/escaping.js";
import { c as pop, p as push } from "../../chunks/index.js";
import { g as get_save, H as Header, M as Menu } from "../../chunks/Menu.js";
function Level($$payload, $$props) {
  push();
  let save = get_save();
  $$payload.out += `<div class="main svelte-1a15gxo"><div class="info svelte-1a15gxo"><div class="level svelte-1a15gxo" id="level_counter">Уровень: ${escape_html(save.level + 1)}</div></div> <progress max="100" id="level_progress_bar" class="progress svelte-1a15gxo"></progress></div>`;
  pop();
}
function Counter($$payload, $$props) {
  push();
  let save = get_save();
  $$payload.out += `<div class="main svelte-15ae99f"><div class="counter svelte-15ae99f">${escape_html(save.money.toFixed(0))}</div> <button class="button svelte-15ae99f">Нажми на меня!</button></div>`;
  pop();
}
function LevelUpAlert($$payload, $$props) {
  push();
  $$payload.out += `<div class="main svelte-15h17l1" id="level_up_alert" style="display: none;"><div class="level-up-alert svelte-15h17l1"><div class="header svelte-15h17l1" style="margin-top: 7px;">Новый уровень!</div> <div class="header svelte-15h17l1" id="level_up_header"></div> <div class="content svelte-15h17l1"><div class="left svelte-15h17l1"><div class="header-item svelte-15h17l1">Улучшенно:</div> <div class="item svelte-15h17l1" id="left"></div></div> <div class="right svelte-15h17l1"><div class="header-item svelte-15h17l1">Открыто:</div></div></div> <button class="button svelte-15h17l1">Хорошо</button></div></div>`;
  pop();
}
function _page($$payload) {
  Header($$payload, { header: "Simple clicker game" });
  $$payload.out += `<!----> `;
  LevelUpAlert($$payload);
  $$payload.out += `<!----> <div class="main svelte-1byazyg">`;
  Counter($$payload);
  $$payload.out += `<!----> `;
  Level($$payload);
  $$payload.out += `<!----> `;
  Menu($$payload);
  $$payload.out += `<!----></div>`;
}
export {
  _page as default
};
