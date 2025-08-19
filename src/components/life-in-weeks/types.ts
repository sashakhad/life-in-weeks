export interface LifeEvent {
  headline: string;
  description?: string;
  based?: string;
  doing?: string;
  association?: string;
}

export interface EventsData {
  [date: string]: LifeEvent[];
}

export interface ColorDefinition {
  className: string;
  element: "border" | "background-color";
  colorName: string;
}

export interface WeekBoxProps {
  type: "birthday" | "event" | "empty";
  date: string;
  label?: string;
  tooltip: string;
  basedClass?: string;
  doingClass?: string;
  onClick?: () => void;
}

export interface LifeInWeeksConfig {
  startDate: string;
  endYear: number;
  maxBoxesInRow: number;
  labelLenMultiplier: number;
}
