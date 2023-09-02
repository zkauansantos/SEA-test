import RcSwitch, { ReactSwitchProps } from "react-switch";

interface SwitchProps extends ReactSwitchProps {}

export default function Switch({
  checked,
  onChange,
  checkedIcon,
  uncheckedIcon,
}: SwitchProps) {
  return (
    <RcSwitch
      onChange={onChange}
      checked={checked}
      checkedIcon={checkedIcon}
      uncheckedIcon={uncheckedIcon}
      height={20}
      handleDiameter={16}
      offHandleColor='#4FA1C1'
      onHandleColor='#4FA1C1'
      offColor='#DBDBDB'
      onColor='#DBDBDB'
    />
  );
}
