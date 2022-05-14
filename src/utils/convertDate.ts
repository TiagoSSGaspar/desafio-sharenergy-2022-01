export function convertDateISO(date_pt_BR: string): string {
  const [day, month, year] = date_pt_BR.split('/');

  const dateParseIso = [year, month, day].join('-');

  return dateParseIso
}

export function convertDatePTBR(date: string): string {
  const dateFormatted = Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  }).format(new Date(date));

  return dateFormatted

}
