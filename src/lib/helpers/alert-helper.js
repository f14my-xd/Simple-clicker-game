import { levels_structure } from '$lib/stuctures/levels-structure.js';

// Всплывающее окно о повышении уровня
export function level_up_alert(save) {
	document.getElementById("level_up_alert").style.display = "flex";
	document.getElementById("level_up_header").textContent = save.level + " => " + (save.level+1)
	document.getElementById("left").textContent = "Множитель: " + levels_structure[save.level-1].factor + " => " + levels_structure[save.level].factor
}