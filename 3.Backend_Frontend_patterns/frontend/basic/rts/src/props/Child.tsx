// we need to add children in the below interface to access it
interface ChildProps {
  color: string;
  onClick: () => void;
  children?: React.ReactNode;
}

export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me </button>
    </div>
  );
};

// we need to tell typescript the above one is a react component

// TS doesn't know that we're making aReact component,
// so it thinks that 'Child' will not the below properties

// Normally All React Components can optionally provide these properties
// 1. propTypes 2. displayName 3. defaultProps 4. contextTypes

// to make it as react component see the below one

// we doesn't need the :interface to define like the above
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me </button>
    </div>
  );
};

// now we can use the properties of functional component
// now we know it is a react component
ChildAsFC.displayName;

// React.FunctionalComponent = (both same) = React.FC
