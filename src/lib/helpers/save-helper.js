import Cookies from "js-cookie"
import  { save_structure } from '$lib/stuctures/save-structure.js';

// Получаем сохранение из куки
export function get_save() {

	let save = Cookies.getJSON("save")

	if (save === undefined) {
		save = save_structure;
	}
	return save;
}

// Сохраняем прогресс в куки
export function set_save(save) {
	Cookies.set("save", save);
}

export function delete_save(save) {
	save = save_structure;
	set_save(save);
}
