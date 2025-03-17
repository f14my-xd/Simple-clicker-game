import { levels_structure } from '$lib/stuctures/levels-structure.js';
import { set_save } from '$lib/helpers/save-helper.js';
import { level_up_alert } from '$lib/helpers/alert-helper.js';

// Можно сказать самая главная функция, вызываеться при клике на главную кнопку
export function increment(save) {
	let money = save.money

	// Проверяем повысился ли уровень
	save.money = (money + 3*levels_structure[save.level].factor)
	if (save.level_progress > (10*levels_structure[save.level].required)) {
		save.level++
		save.level_progress = 0
		document.getElementById("level_progress_bar").value = 0
		level_up_alert(save)
	} else {
		save.level_progress += 1
	}
	document.getElementById("level_counter").textContent = "Уровень: "+(save.level+1)
	document.getElementById("level_progress_bar").value = (save.level_progress/levels_structure[save.level].required)
	set_save(save)
}