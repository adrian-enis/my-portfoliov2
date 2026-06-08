/** Ritmo tipográfico inspirado en brittanychiang.com */
const leadingBody = "leading-[1.75]";
const leadingTight = "leading-snug";

const proseClass = `text-(--color-slate) text-lg ${leadingBody}`;
export const proseParagraphClass = `${proseClass} mb-8 last:mb-0`;

export const listClass = "flex flex-col gap-16 sm:gap-20";

export const cardClass =
    "exp-card group grid grid-cols-1 sm:grid-cols-[minmax(100px,120px)_1fr] gap-x-6 gap-y-4 sm:gap-y-2 py-6 sm:py-5 px-4 lg:px-5 lg:-mx-5 rounded-lg border border-transparent transition-all duration-300";

export const cardClassProjects =
    "exp-card group grid grid-cols-1 sm:grid-cols-[64px_1fr] gap-x-6 gap-y-4 sm:gap-y-2 py-6 sm:py-5 px-4 lg:px-5 lg:-mx-5 rounded-lg border border-transparent transition-all duration-300";

export const cardBodyClass = "min-w-0 space-y-6";

export const cardTitleClass =
    `text-lg font-medium text-(--color-slate-lighter) ${leadingTight}`;

export const cardDescClass = `text-lg text-(--color-slate) ${leadingBody}`;

export const cardChipsClass = "flex flex-wrap gap-2 pt-1";

export const cardPeriodClass =
    `text-sm text-(--color-slate) uppercase tracking-wider ${leadingBody} sm:pt-1 font-medium`;
