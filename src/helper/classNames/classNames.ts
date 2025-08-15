type Mods = Record<string, boolean | string>;

export function classNames(
  cls: string,
  mods: Mods,
  additional: string[],
): string {
  return [
    cls,
    ...additional,
    Object.entries(mods)
      .filter(([classname, value]) => Boolean(value))
      .map(([className, value]) => className),
  ].join(' ');
}

classNames('remove-btn', { hovered: true, selectable: true, red: true }, [
  'pdg',
]);

('remove-btn hovered selectable pdg');
