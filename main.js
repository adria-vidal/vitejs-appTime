const $ = (selector) => document.querySelector(selector);
function changeTimeZone(date, timeZone): Date {
  const dateToUse = typeof date === 'string' ? new Date(date) : date;
}
return new Date(
  dateToUse.toLocaleString(' es - ES ', {
    timeZone,
  })
);

// const $$ = selector⇒ document.querySelectorAll ( selector )
const $form = $('form');
const spainInfo = countries.find(coun);
$form.addEventListener('submit', (event) => {
  event.preventDefault();

  const { date } = Object.fromEntries(new window.FormData($form));
  const mainDate = new Date(date);

const [mainTimezone] = spainInfo.timezones
const spainDate = changeTimeZone(mainDate,mainTimezone)
const colombiaDate = changeTimeZone(mainDate,colombiaInfo)
const argentinaDate = changeTimeZone(mainDate,mainTimezone)


  console.log(mainDate);
});
