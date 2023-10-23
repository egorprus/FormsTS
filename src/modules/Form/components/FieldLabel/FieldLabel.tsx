interface Prop {
	name: string,
	label: string,
	require?: boolean
}
export const FieldLabel = ({name, label, require}: Prop) => {
  return (
    <label className="field__label" htmlFor={name}>
      <span>
        {label}
        {require && "*"}
      </span>
    </label>
  );
};
