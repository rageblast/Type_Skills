import { Child, ChildAsFC } from './Child';

const Parent = () => {
  return (
    <Child color="red" onClick={() => console.log('Cliked')}>
      assd
    </Child>
  );
};

// const Parent2 = () => {
//   return (
//     <ChildAsFC color="red" onClick={() => console.log('Cliked')}>
//       assd
//     </ChildAsFC>
//   );
// };
export default Parent;
