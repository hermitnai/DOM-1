const div = dom.create('<td>hi<td>');
console.log(div);
const div2 = dom.find('#test>.red')[0]
console.log(div2)
dom.style(div2, 'color', 'red')
const divList = dom.find('.red')
console.log(divList)
dom.each(divList, (n)=> console.log(n))